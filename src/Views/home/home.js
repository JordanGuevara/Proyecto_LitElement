import { LitElement, html} from "lit-element";
import "./table.js";
import "./form.js"

/*
Realizar un nuevo componente form.js que capturar los datos y pasar los datos al componente
table

*/
class Home extends LitElement {
  constructor(){
        super();
        this.list=[
            {name:"Jordan",lastname:"Guevara",age:31},
            {name:"Carlos",lastname:"Calva",age:21},
            {name:"Maria",lastname:"Billamar",age:11}

        ];
    }
  render() {
    return html`
      <h1>Tabla de registros</h1>
      <wc-form></wc-form>
      <wc-table .list="${this.list}"></wc-table> `;
  }
}

window.customElements.define("wc-home", Home);
