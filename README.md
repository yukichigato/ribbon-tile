# ribbon-tile

A Vanilla-JS custom component that creates a ribbon-style repeating tile that you can add to your website.

I know this is pretty basic, but it's something I found myself needing more often than I thought, and I'm too
lazy to keep re-implementing this from scratch whenever I need it

<center><img src="https://i.ibb.co/ks6L8YH1/ezgif-7a8e89a2accc17.gif"/></center>

## How to use

1. Import `RibbonTile.js` in your HTML file in any way you see fit.
   
   For example:
   
   ```html
   <!-- index.html -->
   
   <script src="path/to/RibbonTile.js" defer></script>
   ```
3. Create a `<ribbon-tile></ribbon-tile>` component inside your document body.
   * Add a `ribbon-width` attribute, this will determine how wide the wibbon is. You
   can write it in px, rem, etc.
   * Add a `ribbon-space` attribute, which will tell the component how much space it should use overall.
   * Add a `image-url` attribute, the url to your tile image. The image has to be 1:1 in resolution.
   * You can optionally add a `gradient-color` attribute that takes a color in any format. This will
   generate a radial gradient which will fade the borders of the ribbon.
   * You can optionally add a `shadow-color` attribute that takes a color in any format. This will
      generate a shadow below the ribbon of the color of your choice.
   * Finally, you can optionally add an `animation-duration` attribute that will change the default
   sideways linear scroll animation's duration. It must be written in seconds.

   Example:

   ```html
   <!-- index.html -->
   
   <ribbon-tile
      ribbon-width="6rem"
      ribbon-space="12rem"
      image-url="./public/images/tile.jpg"
      gradient-color="rgba(1, 1, 1, .5)"
      shadow-colro="rgba(1, 1, 1, .75)"
      animation-duration="120s"
   >
   </ribbon-tile>
   ```

> [!WARNING]
> Ensure `ribbon-space` is greater than `ribbon-width` or else things
> get janky.

   
