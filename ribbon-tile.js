class RibbonTile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const attributes = {
      ribbon_width: this.getAttribute("ribbon-width"),
      ribbon_space: this.getAttribute("ribbon-space"),
      image_url: this.getAttribute("image-url"),
      gradient_color: this.getAttribute("gradient-color") ?? "rgba(1, 1, 1, 0)",
      shadow_color: this.getAttribute("shadow-color") ?? "rgba(1, 1, 1, 0)",
      animation_duration: this.getAttribute("animation-duration") ?? "180s",
    };

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        @keyframes pan {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: 100% 0;
          }
        }
  
        .ribbon-container {
          position: relative;
          height: ${attributes.ribbon_space};
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ribbon {
          position: absolute;
          height: ${attributes.ribbon_width};

          transform-origin: center;
          /*
          background: radial-gradient(
              circle closest-corner at 50% 50%,
              rgba(1, 1, 1, 0) 40%,
              ${attributes.gradient_color} 65%
            ),
            url("${attributes.image_url}");
          */

          background: linear-gradient(90deg, ${attributes.gradient_color} 16.5%, rgba(255,255,255,0) 30%, rgba(154,154,154,0) 70%, ${attributes.gradient_color} 84.5%),
            url("${attributes.image_url}");
          background-image: url("${attributes.image_url}")
          background-size: auto, contain;
          background-size: contain;
          background-repeat: repeat-x, repeat;
          background-position: center, center;
          animation: pan ${attributes.animation_duration} linear infinite;

          box-shadow: 0rem 1rem 2rem ${attributes.shadow_color};
        }

      </style>
      <div class="ribbon-container">
        <div class="ribbon"></div>
      </div>
      `;

    this.shadowRoot.append(template.content.cloneNode(true));

    const calculateRotation = (height, width) => {
      return Math.atan(height / width) * (180 / Math.PI);
    };

    const ribbonContainer = this.shadowRoot.querySelector(".ribbon-container");
    const ribbon = ribbonContainer.querySelector(".ribbon");

    const rotationValue = calculateRotation(
      ribbonContainer.offsetHeight - ribbon.offsetHeight,
      ribbonContainer.offsetWidth
    );

    ribbon.style.transform = `rotate(${rotationValue * -1}deg)`;
    ribbon.style.width = `${ribbonContainer.offsetWidth * 1.5}px`;
  }
}

customElements.define("ribbon-tile", RibbonTile);
