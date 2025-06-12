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
    save(){
        let data={
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad
        };
        let options ={
            data: data,
            bubble: true,
            composed: true,
        }
    }

    manejador(event){
        return (event)=>{
            const value = event.target.value;
            this[nombre]=value;
        };
    }
    static styles=css`
        form{
            border: solid 1px black;
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 10px 10px 10px 10px;
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
            <form>
                <label for="nombre">Nombre:
                    <input @input="${this.manejador("nombre")}" .value="${this.nombre}"  />
                </label>
                
                <label for="apellido">Apellido:
                    <input @input="${this.manejador("apellido")}"  .value="${this.apellido}" />
                </label>
                
                <label for="edad">Edad:
                    <input @input="${this.manejador("edad")}" .value="${this.edad}"  />
                </label>
                
                <button type="button">Guardar</button>
            </form>
        
        `;
    };
}
window.customElements.define("wc-form",Form);