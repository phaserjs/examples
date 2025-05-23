# Phaser 4 Examples Site

A beautiful, modern static website for browsing thousands of Phaser examples with a tree-based navigation structure and powerful search functionality.

## Features

### 🎨 Beautiful Modern Design
- Clean, modern UI with glassmorphism effects
- Responsive design that works on all devices
- Beautiful gradient backgrounds and smooth animations
- Professional typography and spacing

### 🔍 Powerful Search
- Real-time search across all examples
- Instant results with debounced input
- Navigate directly to examples from search results

### 📂 Tree Navigation
- Hierarchical folder structure displayed as an expandable tree
- Visual breadcrumb navigation
- Deep linking support for sharing specific categories

### 🖼️ Rich Example Display
- Thumbnail previews of all examples
- Grid layout with hover effects
- Clear example titles and paths
- Folder icons for easy navigation

### 🎮 Comprehensive Example Viewer
- Embedded example display using existing infrastructure
- Multiple viewing modes (100%, Mobile, Edit)
- Version selector for different Phaser builds
- Source code modal with syntax highlighting
- Direct GitHub links

### 🔗 Deep Linking
- Share direct links to specific categories
- Share direct links to individual examples
- Browser back/forward navigation support
- URL-based state management

## Files Structure

### HTML Pages
- `phaser4-index.html` - Main examples categories page
- `phaser4-view.html` - Individual example viewer page

### Stylesheets
- `css/phaser4-styles.css` - Complete modern styling for both pages

### JavaScript
- `js/phaser4-examples.js` - Main page functionality (tree nav, search, thumbnails)
- `js/phaser4-viewer.js` - Example viewer functionality (controls, modals, source)

## How to Use

### Main Examples Page
1. Open `phaser4-index.html` in your browser
2. Browse categories using the tree navigation on the left
3. Search for specific examples using the search bar
4. Click on folders to navigate deeper into categories
5. Click on example thumbnails to view them

### Example Viewer
1. Click on any example from the main page
2. Use the control buttons to switch viewing modes:
   - **100%**: Full-screen view
   - **Mobile**: Mobile-optimized view  
   - **Edit**: Code editor with live preview
   - **Source**: View syntax-highlighted source code
3. Use the version dropdown to test with different Phaser builds
4. Click the back button to return to the examples list

## URL Structure

### Main Page
- `phaser4-index.html` - Show all categories
- `phaser4-index.html?path=animation` - Show examples in 'animation' category
- `phaser4-index.html?path=game%20objects/sprites` - Show nested category

### Example Viewer
- `phaser4-view.html?src=src/animation/basic.js` - View specific example
- `phaser4-view.html?src=src/animation/basic.js&v=4.0.0-rc4` - With specific version

## Technical Details

### Data Source
- Uses existing `examples.json` file for all example metadata
- No server-side processing required - fully client-side
- Compatible with existing screenshot infrastructure

### Responsive Design
- Mobile-first design approach
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements
- Collapsible sidebar on mobile devices

### Performance Optimizations
- Debounced search to prevent excessive API calls
- Lazy loading of example thumbnails
- Efficient tree rendering with minimal DOM manipulation
- CSS animations for smooth user experience

### Browser Compatibility
- Modern browsers with ES6+ support
- Uses fetch API for data loading
- CSS Grid and Flexbox for layouts
- No external dependencies beyond existing infrastructure

## Integration

This site integrates seamlessly with the existing Phaser examples infrastructure:

- Uses existing `examples.json` for data
- Leverages existing `view.html`, `css.html`, `mobile.html`, `edit.html` for example display
- Compatible with existing screenshot system
- Uses existing `versions.js` for version management
- Maintains existing URL parameters and functionality

The new site can coexist with the current examples browser, allowing for gradual migration or A/B testing. 