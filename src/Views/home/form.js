import { LitElement, html, css } from "lit-element";
class Form extends LitElement{
    constructor(){
        super();
        this.nombre="";
        this.apellido="";
        this.edad="";
    }
    static get properties() {
        return {
            nombre: { type: String },
            apellido: { type: String },
            edad: { type: Number },
        };
    }

    manejador(event){
        return (event)=>{
            const value = event.target.value;
            this[nombre]=this[apellido]=this[edad]=value;
        };
    }
    static styles=css`
        form{
            border: solid 1px black;
            margin-bottom: 20px;
            padding: 20px;
        }
        input{
            margin-right: 10px;
            border-radius: 5px 5px 5px 5px;
        }
        button{
            border-radius: 10px 10px 10px 10px;
            padding: 5px;
            width:100px;
            height:auto;
            background-color: orange;
            color: black;
        }
    
    
    `;
    render(){
        return html`
            <form action="">
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" .value="${this.nombre}" @input="${this.manejador(nombre)}">
                <label for="apellido">Apellido:</label>
                <input type="text" name="apellido" id="apellido" .value="${this.apellido}" @input="${this.manejador(apellido)}">
                <label for="edad">Edad:</label>
                <input type="number" name="edad" id="edad" .value="${this.edad}" @input="${this.manejador(edad)}">
                <button type="button">Guardar</button>
            </form>
        
        `;
    };
}
window.customElements.define("wc-form",Form);