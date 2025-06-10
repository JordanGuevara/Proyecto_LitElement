import { LitElement } from "lit-element";
class Home extends LitElement{
    render(){
        return html `
            <h1>tabla de registros</h1>
            <!-- Genera una tabla -->
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>>
                </thead>>
            </table>
        
        
        
        `;
    }

}
window.customElements.define("wc-home",Home)