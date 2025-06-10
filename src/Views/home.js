import { LitElement } from "lit-element";

class Home extends LitElement {
  render() {
    return html` <wc-table></wc-table> `;
  }
}

window.customElements.define("wc-home", Home);
