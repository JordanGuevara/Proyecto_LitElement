import { LitElement, html } from "lit-element";
// Cambiar las propiedades del boton
// Seleccionar el elemento y cambiar el color del fondo al mouse
class MyElement extends LitElement {
    constructor(){
        super();
        this.text="Click me"
    }
    static get properties(){
        return {
            text: {type:String, attribute: true},
        };
    }
    getStyles(){
        return `
         button{
            background-color: blue;
            border-radius: 5px 10px 5px 10px;
            text-align: center;
            color: white;
            width: 100px;
            height: 25px;
        }`;
    };
    getTemplate(){
        return html`
            <button>${this.text}</button>
            <style>${this.getStyles()}</style>
    `;
    }
    
    render() {
        return html`
            <button>${this.text}</button>
            <style>${this.getStyles()}</style>
    `;
    }
}

customElements.define("my-button", MyElement);
