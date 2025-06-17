import { LitElement,html,css } from "lit-element";
class Page1 extends LitElement{
    render(){
            return html`
            <div>    
                <h1>Pagina 1</h1>
            <div>  
            `;
        }
}
window.customElements.define("wc-page1",Page1);