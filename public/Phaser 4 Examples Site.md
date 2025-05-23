Phaser 4 Examples Site

Important: Everything you need to do should be done inside the 'public' folder. Never go any higher than this.

NEVER CHANGE FILES IN THE FOLLOWING FOLDERS within public:

3.24
3.55
3.86
assets
build
plugins
screenshots
src

All other files or folders can be modified.

## The task

Build a static web site that allows users to browse the thousands of Phaser Examples that we have available.

- There is no server-side languages you can use, this site has to be static and populated and created dynamically via JavaScript at runtime. There is no build step or build tools.

- Every example can be found in the file public/examples.json - you should parse and read this file at runtime in order to create the site dynamically.
- When new examples are created, this JSON file is updated by the team. You can read it to find all available examples, organized by folder and file name.
- Every example also has a screenshot, which is stored in the public/screenshots folder.
- There is a PNG version of the Phaser 4 logo in public/images/phaser4logo.png - this is a beautiful logo, and should be used on the site.

The site should be split into two main sections:

- Examples Categories page
- Example Viewer Page

The Examples Categories page should have the following content:

- A header with the Phaser 4 logo
- A search bar
- A list of categories. The categories are the folders in the public/examples folder, which can be found in the examples.json file.
- Clicking on a category should show the user all available examples in that category, plus any sub-categories it may have.

This should be presented as a tree structure on the left of the page, with the categories and sub-categories. And to the right of this, the examples should be presented as thumbnails. Folders should be represented by a folder icon.

Clicking on an example should show the user the example in a new page.

Viewing an example should place the example path into the URL which the 'view' page then reads. This allows users to easily share links to direct examples as well.

The Example Viewer Page should have the following content:

- A header with the Phaser 4 logo and a 'back' button that returns the user to the Examples Categories page they came from.
- The name of the example (as derived from the examples.json file)
- The Phaser example, running in the page. See the file public/view.html for how this is done currently.

Below the Phaser example, there should be buttons for:

100% - This views the example in 'full screen' (which is currently handled by the css.html file)
Mobile - This views the example in 'mobile' mode (which is currently handled by the mobile.html file)
Edit - This allows the user to edit the example in the editor (which is currently handled by the edit.html file)
Source - This shows the source code of the example, pretty-printed and highlighted. This page also has a link to the example on GitHub which would start: https://github.com/phaserjs/examples/blob/master/public/src/

There is also a drop-down list. This allows the user to select the version of Phaser that they want to run the example with. The file public/js/versions.js contains an array of all the versions that are available.
