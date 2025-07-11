import { LitElement, html, css } from "lit-element";

class Nabvar extends LitElement {
  static get styles() {
    return css`
      .continer-navbar {
        display: flex;
        justify-content: center;
        margin: auto;
        background-color: #0b8e21ca;
        padding: 10px;
        gap: 10px;
      }
    `;
  }
  render() {
    return html`
      <div class="continer-navbar">
        <wc-link to="/home">
          <wc-button text="Page 1"></wc-button>
        </wc-link>

        <wc-link to="/page2">
          <wc-button text="Page 2"></wc-button>
        </wc-link>

        <wc-link to="/page3">
          <wc-button text="Page 3"></wc-button>
        </wc-link>
      </div>
    `;
  }
}
window.customElements.define("wc-navbar", Nabvar);
