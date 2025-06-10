import { LitElement, html,css} from "lit-element";

class Table extends LitElement {
    static get properties() {
        return {
            list:{ type: Array}
        }
    };
    static styles = css`
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #999;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    `;
    
    // constructor(){
    //     super();
    //     this.list=[
    //         {name:"Jordan",lastname:"Guevara",age:31},
    //         {name:"Carlos",lastname:"Calva",age:21},
    //         {name:"Maria",lastname:"Billamar",age:11}

    //     ];
    // }

    render() {
            return html`
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                    </thead>
                    <tbody>
                        ${this.list.map((item)=>{
                            return html`
                             <tr>
                                <td>${item.name}</td>
                                <td>${item.lastname}</td>
                                <td>${item.age}</td>
                             </tr>
                            `
                        })}
                    </tr>
                    </tbody>
                </table>
                `;
        }
}

window.customElements.define("wc-table", Table);
