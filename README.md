# ribbon-tile

A Vanilla-JS custom component that creates a ribbon-style repeating tile that you can add to your website.

## How to use

1. Import `ribbon-tile.js` in your HTML file in any way you see fit.
   
   For example:
   
   ```html
   <!-- index.html -->
   
   <script src="path/to/ribbon-tile.js" defer></script>
   ```
3. Create a `<ribbon-tile></ribbon-tile>` component inside your document body.
   * Add a `ribbon-width` attribute, this will determine how wide the wibbon is. You
   can write it in px, rem, etc.
   * Add a `ribbon-space` attribute, which will tell the component how much space it should use overall.
   * Add a `image-url` attribute, the url to your tile image. The image has to be 1:1 in resolution.
   * You can optionally add a `gradient-color` attribute that takes a color in any format. This will
   generate a radial gradient which will fade the borders of the ribbon.
   * Finally, you can optionally add an `animation-duration` attribute that will change the default
   sideways linear scroll animation's duration. It must be written in seconds.

   Example:

   ```html
   <!-- index.html -->
   
   <ribbon-tile
      ribbon-width="6rem" <!-- This can be in px, em... -->
      ribbon-space="12rem" <!-- This can be in px, em... -->
      image-url="./public/images/tile.jpg"
      gradient-color="rgba(1, 1, 1, .5)" <!-- Default colors, rbg, rgba... -->
      animation-duration="120s"
   >
   </ribbon-tile>
   ```

> [!WARNING]
> Ensure `ribbon-space` is greater than `ribbon-width` or else things
> get janky.

   
