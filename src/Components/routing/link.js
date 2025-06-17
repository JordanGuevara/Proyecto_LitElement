import { LitElement,html,css } from "lit-element";
class Link extends LitElement{
    static get properties(){
        return {
            to: {type: String, attribute: true},
            routename: {tyepe: String, attribute: true}
        };
    }
    _handlerClick(){
        let detail = {
            to: this.to,
            routename: this.routename
        };
        this.dispatchEvent(new CustomEvent("go-event",{
            detail: detail,
        }));
        
    }
    render(){
            return html`
            <div @click="${this._handlerClick}"><div>  
            `;
        }
}
window.customElements.define("wc-link",Link);