class Phaser4Examples {
    constructor() {
        this.examplesData = null;
        this.currentPath = [];
        this.currentCategory = null;
        this.searchTimeout = null;
        this.init();
    }

    async init() {
        try {
            // Load examples data
            await this.loadExamplesData();

            // Setup event listeners
            this.setupEventListeners();

            // Initialize UI based on URL
            this.initializeFromURL();

            // Render initial state
            this.renderCategoryTree();
            this.renderExamples();
            this.updateBreadcrumb();

        } catch (error) {
            console.error('Failed to initialize Phaser4Examples:', error);
            this.showError('Failed to load examples data');
        }
    }

    async loadExamplesData() {
        try {
            const response = await fetch('examples.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.examplesData = await response.json();
        } catch (error) {
            throw new Error('Failed to load examples.json: ' + error.message);
        }
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.handleSearch(e.target.value);
            }, 300);
        });

        // Handle clicks outside search results
        document.addEventListener('click', (e) => {
            const searchResults = document.getElementById('search-results');
            const searchContainer = document.querySelector('.search-container');
            if (!searchContainer.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            this.initializeFromURL();
            this.renderCategoryTree();
            this.renderExamples();
        });
    }

    initializeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const pathParam = urlParams.get('path');

        if (pathParam) {
            this.currentPath = pathParam.split('/').filter(p => p);
            this.currentCategory = this.getCategoryByPath(this.currentPath);
        } else {
            this.currentPath = [];
            this.currentCategory = this.examplesData;
        }
    }

    getCategoryByPath(path) {
        let current = this.examplesData;

        for (const segment of path) {
            if (!current.children) return null;
            current = current.children.find(child =>
                child.name === segment && child.children
            );
            if (!current) return null;
        }

        return current;
    }

    updateURL() {
        const url = new URL(window.location);
        if (this.currentPath.length > 0) {
            url.searchParams.set('path', this.currentPath.join('/'));
        } else {
            url.searchParams.delete('path');
        }
        window.history.pushState({}, '', url);
    }

    renderCategoryTree() {
        const treeContainer = document.getElementById('category-tree');
        treeContainer.innerHTML = '';

        if (!this.examplesData) {
            treeContainer.innerHTML = '<div class="loading">Loading...</div>';
            return;
        }

        const treeHTML = this.buildCategoryTreeHTML(this.examplesData.children, []);
        treeContainer.innerHTML = treeHTML;

        // Add click handlers for tree items
        this.setupTreeClickHandlers();
    }

    buildCategoryTreeHTML(categories, parentPath) {
        if (!categories) return '';

        return categories
            .filter(category => {
                // Only include folders, and exclude underscore folders and bugs folder
                return category.children &&
                       !category.name.startsWith('_') &&
                       category.name !== 'bugs';
            })
            .map(category => {
                const currentPath = [...parentPath, category.name];
                const isActive = this.isPathActive(currentPath);
                const hasChildren = category.children.some(child => child.children);

                let html = `
                    <div class="category-item">
                        <div class="category-folder ${isActive ? 'active' : ''}"
                             data-path="${currentPath.join('/')}"
                             data-name="${category.name}">
                            <span class="folder-icon">📁</span>
                            <span class="folder-name">${category.name}</span>
                            ${hasChildren ? '<span class="folder-toggle">▶</span>' : ''}
                        </div>
                `;

                if (hasChildren && isActive) {
                    html += `
                        <div class="category-children expanded">
                            ${this.buildCategoryTreeHTML(category.children, currentPath)}
                        </div>
                    `;
                }

                html += '</div>';
                return html;
            })
            .join('');
    }

    isPathActive(path) {
        if (path.length > this.currentPath.length) return false;
        return path.every((segment, index) => segment === this.currentPath[index]);
    }

    setupTreeClickHandlers() {
        const folders = document.querySelectorAll('.category-folder');
        folders.forEach(folder => {
            folder.addEventListener('click', (e) => {
                e.preventDefault();
                const path = folder.dataset.path.split('/').filter(p => p);
                this.navigateToCategory(path);
            });
        });
    }

    navigateToCategory(path) {
        this.currentPath = path;
        this.currentCategory = this.getCategoryByPath(path);
        this.updateURL();
        this.renderCategoryTree();
        this.renderExamples();
        this.updateBreadcrumb();

        // Auto-scroll examples-grid to top
        const examplesDisplay = document.querySelector('.examples-display');
        if (examplesDisplay) {
            examplesDisplay.scrollTop = 0;
        }
    }

    renderExamples() {
        const container = document.getElementById('examples-grid');

        if (!this.currentCategory) {
            container.innerHTML = '<div class="error">Category not found</div>';
            return;
        }

        const children = this.currentCategory.children || [];

        if (children.length === 0) {
            container.innerHTML = '<div class="empty">No examples found in this category</div>';
            return;
        }

        // Separate folders and files, filtering out underscore folders and bugs folder
        const folders = children.filter(child =>
            child.children &&
            !child.name.startsWith('_') &&
            child.name !== 'bugs'
        );
        const files = children.filter(child =>
            !child.children &&
            !child.name.startsWith('_')
        );

        let html = '';

        // Render folders first
        folders.forEach(folder => {
            html += this.createFolderCardHTML(folder);
        });

        // Render files
        files.forEach(file => {
            html += this.createExampleCardHTML(file);
        });

        container.innerHTML = html;

        // Setup click handlers
        this.setupExampleClickHandlers();
    }

    getFolderIcon(folderName) {
        // Available folder icons
        const icons = [
            'camera.png', 'cd.png', 'earbuds.png', 'film.png', 'filmstrip.png',
            'headphones.png', 'headphones2.png', 'images.png', 'ipod.png',
            'joypad.png', 'mic.png', 'mic2.png', 'monitor.png', 'phaser-folder.png',
            'piano.png', 'reel.png', 'swirl.png', 'tape.png', 'tv.png', 'video.png', 'vu.png'
        ];

        // Thematic mapping based on folder names
        const thematicMapping = {
            'animation': 'filmstrip.png',
            'audio': 'headphones.png',
            'camera': 'camera.png',
            'video': 'video.png',
            'input': 'joypad.png',
            'physics': 'monitor.png',
            'game objects': 'joypad.png',
            'games': 'joypad.png',
            'renderer': 'tv.png',
            'loader': 'cd.png',
            'textures': 'images.png',
            'demoscene': 'swirl.png',
            'tweens': 'film.png',
            'time': 'tape.png',
            'math': 'monitor.png',
            'utils': 'phaser-folder.png',
            'plugins': 'phaser-folder.png'
        };

        // Check for thematic match first
        const lowerName = folderName.toLowerCase();
        for (const [key, icon] of Object.entries(thematicMapping)) {
            if (lowerName.includes(key)) {
                return `images/${icon}`;
            }
        }

        // For folders not in thematic mapping, use a consistent but varied selection
        // Use simple hash of folder name to pick icon consistently
        let hash = 0;
        for (let i = 0; i < folderName.length; i++) {
            hash = ((hash << 5) - hash) + folderName.charCodeAt(i);
            hash = hash & hash; // Convert to 32-bit integer
        }
        const iconIndex = Math.abs(hash) % icons.length;
        return `images/${icons[iconIndex]}`;
    }

    createFolderCardHTML(folder) {
        const folderPath = [...this.currentPath, folder.name].join('/');
        const iconPath = this.getFolderIcon(folder.name);

        return `
            <div class="folder-card" data-path="${folderPath}" data-type="folder">
                <div>
                    <img src="${iconPath}" alt="Folder" class="folder-icon" />
                    <div class="folder-title">${folder.name}</div>
                </div>
            </div>
        `;
    }

    createExampleCardHTML(file) {
        const imagePath = this.getScreenshotPath(file.path);
        const title = file.name.replace('.js', '').replace('.json', '');

        return `
            <div class="example-card" data-path="${file.path}" data-type="example">
                <img src="${imagePath}" alt="${title}" class="example-image"
                     onerror="this.src='images/phaser-folder.png'">
                <div class="example-info">
                    <div class="example-title">${title}</div>
                </div>
            </div>
        `;
    }

    getScreenshotPath(filePath) {
        return filePath
            .replace(/^src/, 'screenshots')
            .replace(/\.js$/, '.png')
            .replace(/\.json$/, '.png')
            .toLowerCase();
    }

    setupExampleClickHandlers() {
        const cards = document.querySelectorAll('[data-type="folder"], [data-type="example"]');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const type = card.dataset.type;
                const path = card.dataset.path;

                if (type === 'folder') {
                    const folderPath = path.split('/').filter(p => p);
                    this.navigateToCategory(folderPath);
                } else if (type === 'example') {
                    this.openExample(path);
                }
            });
        });
    }

    openExample(examplePath) {
        // Build return URL with current path
        let returnUrl = 'phaser4-index.html';
        if (this.currentPath.length > 0) {
            returnUrl += `?path=${encodeURIComponent(this.currentPath.join('/'))}`;
        }

        window.location.href = `phaser4-view.html?src=${encodeURIComponent(examplePath)}&return=${encodeURIComponent(returnUrl)}`;
    }

    updateBreadcrumb() {
        const breadcrumb = document.getElementById('breadcrumb');

        // Build breadcrumb navigation
        let navHtml = '<div class="breadcrumb-nav">';
        navHtml += '<a href="phaser4-index.html" class="breadcrumb-item">Home</a>';

        let currentPath = [];
        this.currentPath.forEach(segment => {
            currentPath.push(segment);
            const url = `phaser4-index.html?path=${encodeURIComponent(currentPath.join('/'))}`;
            navHtml += `<a href="${url}" class="breadcrumb-item">${segment}</a>`;
        });
        navHtml += '</div>';

        // Add version links only when on home page
        let versionLinksHtml = '';
        if (this.currentPath.length === 0) {
            versionLinksHtml = `
                <div class="version-links">
                    <span>Swap to Phaser:</span>
                    <a href="/3.86/index.html">3.86</a>
                    <span>|</span>
                    <a href="/3.55/index.html">3.55</a>
                    <span>|</span>
                    <a href="/3.24/index.html">3.24</a>
                </div>
            `;
        }

        breadcrumb.innerHTML = navHtml + versionLinksHtml;

        // Add click handlers to breadcrumb items
        const breadcrumbItems = breadcrumb.querySelectorAll('.breadcrumb-item');
        breadcrumbItems.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (index === 0) {
                    this.navigateToCategory([]);
                } else {
                    const path = this.currentPath.slice(0, index);
                    this.navigateToCategory(path);
                }
            });
        });
    }

    handleSearch(query) {
        const searchResults = document.getElementById('search-results');

        if (!query.trim()) {
            searchResults.style.display = 'none';
            return;
        }

        const results = this.searchExamples(query.toLowerCase());

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result">No examples found</div>';
        } else {
            const resultsHTML = results
                .slice(0, 10) // Limit to 10 results
                .map(result => `
                    <div class="search-result" data-path="${result.path}">
                        <div style="font-weight: 600;">${result.name}</div>
                        <div style="font-size: 12px; color: #888;">${result.path}</div>
                    </div>
                `)
                .join('');

            searchResults.innerHTML = resultsHTML;

            // Add click handlers to search results
            searchResults.querySelectorAll('.search-result').forEach(result => {
                result.addEventListener('click', () => {
                    const path = result.dataset.path;
                    this.openExample(path);
                    searchResults.style.display = 'none';
                });
            });
        }

        searchResults.style.display = 'block';
    }

    searchExamples(query) {
        const results = [];

        const searchInCategory = (category, parentPath = '') => {
            if (!category.children) return;

            category.children.forEach(child => {
                // Skip underscore folders and bugs folder
                if (child.name.startsWith('_') || child.name === 'bugs') {
                    return;
                }

                const fullPath = parentPath ? `${parentPath}/${child.name}` : child.name;

                if (child.children) {
                    // It's a folder, search recursively
                    searchInCategory(child, fullPath);
                } else {
                    // It's a file, check if it matches
                    if (child.name.toLowerCase().includes(query)) {
                        results.push({
                            name: child.name.replace('.js', '').replace('.json', ''),
                            path: child.path
                        });
                    }
                }
            });
        };

        searchInCategory(this.examplesData);

        return results.sort((a, b) => a.name.localeCompare(b.name));
    }

    showError(message) {
        const container = document.getElementById('examples-grid');
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #e74c3c;">
                <h3>Error</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Phaser4Examples();
});
