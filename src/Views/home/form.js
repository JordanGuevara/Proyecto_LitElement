import { LitElement, html, css } from "lit-element";
class Form extends LitElement{
    constructor(){
        super();
        this.name="";
        this.lastname="";
        this.age="";
    }
    static get properties() {
        return {
            name: { type: String },
            lastname: { type: String },
            age: { type: Number },
        };
    }
    save(){
        let data={
            name: this.name,
            lastname: this.lastname,
            age: this.age
        };
        let options ={
            detail: data,
            bubble: true,
            composed: true,
        }
        this.dispatchEvent(new CustomEvent("savePerson",options));

    }

    manejador(name){
        return (event)=>{
            const value = event.target.value;
            this[name]=value;
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
                <label for="name">Nombre:
                    <input @input="${this.manejador("name")}" .value="${this.name}" />
                </label>
                
                <label for="lastname">Apellido:
                    <input @input="${this.manejador("lastname")}"  .value="${this.lastname}"/>
                </label>
                
                <label for="age">Edad:
                    <input @input="${this.manejador("age")}" .value="${this.age}" />
                </label>
                
                <button type="button" @click="${this.save}">Guardar</button>
            </form>
        
        `;
    };
}
window.customElements.define("wc-form",Form);