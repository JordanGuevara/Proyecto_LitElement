import { LitElement } from "lit-element";

class Table extends LitElement {
  render() {
    return html`
      <h1>Tabla de registros</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paulo</td>
            <td>Julian</td>
            <td>Carol</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

window.customElements.define("wc-table", Table);
