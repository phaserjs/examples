class Phaser4Viewer {
    constructor() {
        this.currentExample = null;
        this.currentVersion = null;
        this.sourceCode = null;
        this.returnPath = null;
        this.isModuleExample = false;
        this.init();
    }

    init() {
        // Get example source from URL
        const src = getQueryString('src');
        if (!src) {
            this.showError('No example specified');
            return;
        }

        this.currentExample = src;

        // Check if this is a module example
        this.isModuleExample = getQueryString('module') === 'true';

        // Setup return path for back button
        this.returnPath = getQueryString('return') || 'phaser4-index.html';

        // Setup event listeners
        this.setupEventListeners();

        // Initialize version selector
        this.initializeVersionSelector();

        // Load and display the example
        this.loadExample();
    }

    setupEventListeners() {
        // Back button
        const backButton = document.getElementById('back-button');
        backButton.addEventListener('click', () => {
            window.location.href = this.returnPath;
        });

        // Control buttons
        document.getElementById('fullscreen-btn').addEventListener('click', () => {
            this.openInMode('css.html');
        });

        document.getElementById('mobile-btn').addEventListener('click', () => {
            this.openInMode('mobile.html');
        });

        document.getElementById('edit-btn').addEventListener('click', () => {
            this.openInMode('edit.html');
        });

        document.getElementById('source-btn').addEventListener('click', () => {
            this.showSourceModal();
        });

        // Version selector
        const versionSelect = document.getElementById('version-select');
        versionSelect.addEventListener('change', (e) => {
            const newVersion = e.target.value;
            this.switchToVersion(newVersion);
        });

        // Modal controls
        document.getElementById('close-source').addEventListener('click', () => {
            this.hideSourceModal();
        });

        // Close modal when clicking outside
        document.getElementById('source-modal').addEventListener('click', (e) => {
            if (e.target.id === 'source-modal') {
                this.hideSourceModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideSourceModal();
            }
        });
    }

    initializeVersionSelector() {
        const versionSelect = document.getElementById('version-select');

        // Populate version options
        versions.forEach(version => {
            const option = document.createElement('option');
            option.value = version.val;
            option.textContent = version.text;
            versionSelect.appendChild(option);
        });

        // Set default version
        this.currentVersion = getQueryString('v', versions[0].val);
        versionSelect.value = this.currentVersion;
    }

    async loadExample() {
        const loadingIndicator = document.getElementById('loading');
        const exampleContainer = document.getElementById('phaser-example');

        try {
            // Show loading state
            loadingIndicator.style.display = 'block';
            exampleContainer.innerHTML = '';

            // Set base href for module examples before loading anything else
            if (this.isModuleExample) {
                this.setupBaseHrefForModule();
            }

            // Update page title
            const title = this.getExampleTitle();
            document.getElementById('example-title').textContent = title;
            document.title = `${title} - Phaser 4 Example`;

            // Load source code
            await this.loadSourceCode();

            // Load Phaser and run the example
            await this.loadPhaserAndRunExample();

        } catch (error) {
            console.error('Failed to load example:', error);
            this.showError('Failed to load example: ' + error.message);
        } finally {
            loadingIndicator.style.display = 'none';
        }
    }

    setupBaseHrefForModule() {
        // Extract the folder path from the example path
        // e.g., "src/games/avoid the germs/main.js" -> "src/games/avoid the germs/"
        const folderPath = this.currentExample.substring(0, this.currentExample.lastIndexOf('/') + 1);

        // First, make all existing relative URLs absolute before setting base href
        this.makeAssetsAbsolute();

        // Create and inject base tag
        const baseTag = document.createElement('base');
        baseTag.href = folderPath;
        document.head.insertBefore(baseTag, document.head.firstChild);
    }

    makeAssetsAbsolute() {
        // Get the current page's base URL (before we change it)
        const currentBase = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

        // Update favicon
        const favicon = document.querySelector('link[rel="shortcut icon"]');
        if (favicon && favicon.href.startsWith(currentBase)) {
            favicon.href = currentBase + 'images/favicon.ico';
        }

        // Update CSS
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]:not([href^="http"])');
        cssLinks.forEach(link => {
            if (!link.href.startsWith('http')) {
                const relativePath = link.getAttribute('href');
                link.href = currentBase + relativePath;
            }
        });

        // Update images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.src.startsWith(currentBase) && img.getAttribute('src')) {
                const relativePath = img.getAttribute('src');
                if (!relativePath.startsWith('http')) {
                    img.src = currentBase + relativePath;
                }
            }
        });

        // Update scripts (except CDN ones)
        const scripts = document.querySelectorAll('script[src]:not([src^="http"])');
        scripts.forEach(script => {
            const relativePath = script.getAttribute('src');
            if (!relativePath.startsWith('http')) {
                script.src = currentBase + relativePath;
            }
        });
    }

    async loadPhaserAndRunExample() {
        return new Promise((resolve, reject) => {
            // Check if it's Phaser 4
            const isPhaser4 = this.currentVersion.startsWith('4');

            // Create and load Phaser script
            const phaserScript = document.createElement('script');
            phaserScript.id = 'phaser-script';
            phaserScript.type = isPhaser4 ? 'module' : 'text/javascript';
            phaserScript.async = true;

            phaserScript.onload = () => {
                this.runExample().then(resolve).catch(reject);
            };

            phaserScript.onerror = () => {
                reject(new Error('Failed to load Phaser script'));
            };

            // Set Phaser script source
            const phaserVersionJS = this.currentVersion + '.js';
            phaserScript.src = `./build/${phaserVersionJS}`;

            document.head.appendChild(phaserScript);
        });
    }

    async runExample() {
        if (!this.sourceCode) {
            throw new Error('No source code loaded');
        }

        // Determine script type
        let scriptType = 'text/javascript';

        // If this is explicitly a module example, use module type
        if (this.isModuleExample) {
            scriptType = 'module';
        } else if (this.sourceCode.startsWith('// #module')) {
            // Otherwise, check for module comment in the source
            scriptType = 'module';
        }

        // Create and inject example script
        const exampleScript = document.createElement('script');
        exampleScript.id = 'example-script';
        exampleScript.type = scriptType;
        exampleScript.textContent = this.sourceCode;

        document.body.appendChild(exampleScript);
    }

    getExampleTitle() {
        if (!this.currentExample) return 'Loading...';

        // Extract title from path and clean it up
        let path = this.currentExample;

        // Remove "src\" or "src/" prefix if present
        if (path.toLowerCase().startsWith('src\\') || path.toLowerCase().startsWith('src/')) {
            path = path.substring(4);
        }

        const parts = path.split(/[\/\\]/);
        const filename = parts[parts.length - 1];
        return filename.replace(/\.(js|json)$/, '').replace(/[-_]/g, ' ')
            .split(' ').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
    }

    async loadSourceCode() {
        try {
            const response = await fetch(this.currentExample);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.sourceCode = await response.text();
        } catch (error) {
            throw new Error('Failed to load source code: ' + error.message);
        }
    }

    openInMode(page) {
        const url = `${page}?src=${encodeURIComponent(this.currentExample)}&v=${encodeURIComponent(this.currentVersion)}`;
        window.open(url, '_blank');
    }

    showSourceModal() {
        const modal = document.getElementById('source-modal');
        const sourceCode = document.getElementById('source-code');
        const githubLink = document.getElementById('github-link');

        // Set source code
        sourceCode.textContent = this.sourceCode || 'Source code not available';

        // Set GitHub link
        const githubUrl = `https://github.com/phaserjs/examples/blob/master/public/${this.currentExample}`;
        githubLink.href = githubUrl;

        // Apply syntax highlighting with Prism
        if (window.Prism && this.sourceCode) {
            Prism.highlightElement(sourceCode);
        }

        // Show modal
        modal.style.display = 'block';

        // Focus on modal for accessibility
        modal.focus();
    }

    hideSourceModal() {
        const modal = document.getElementById('source-modal');
        modal.style.display = 'none';
    }

    showError(message) {
        const exampleContainer = document.getElementById('phaser-example');
        const loadingIndicator = document.getElementById('loading');

        loadingIndicator.style.display = 'none';
        exampleContainer.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 400px;
                background: #f8f9fa;
                border-radius: 10px;
                border: 2px dashed #dee2e6;
                text-align: center;
                color: #6c757d;
                flex-direction: column;
                gap: 1rem;
            ">
                <div style="font-size: 48px;">⚠️</div>
                <div style="font-size: 18px; font-weight: 600;">Error Loading Example</div>
                <div style="font-size: 14px;">${message}</div>
                <button onclick="location.reload()" style="
                    padding: 10px 20px;
                    background: #667eea;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    font-size: 14px;
                ">Try Again</button>
            </div>
        `;
    }

    switchToVersion(newVersion) {
        // Build new URL with updated version parameter
        const currentUrl = new URL(window.location);
        currentUrl.searchParams.set('v', newVersion);

        // Reload the page with the new version
        window.location.href = currentUrl.toString();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Phaser4Viewer();
});
