# ribbon-tile

A Vanilla-JS custom component that creates a ribbon-style repeating tile that you can add to your website.

## How to use

1. Import `ribbon-tile.js` in your HTML file in any way you see fit.
2. Create a `<ribbon-tile></ribbon-tile>` component inside your document body.
3. Add a `ribbon-width` attribute, this will determine how wide the wibbon is. You
   can write it in px, rem, etc.
4. Add a `ribbon-space` attribute, which will tell the component how much space it should use overall.
5. Add a `image-url` attribute, the url to your tile image. The image has to be 1:1 in resolution.
6. You can optionally add a `gradient-color` attribute that takes a color in any format. This will
   generate a radial gradient which will fade the borders of the ribbon.
7. Finally, you can optionally add an `animation-duration` attribute that will change the default
   sideways linear scroll animation's duration. Ensure it's in seconds.
