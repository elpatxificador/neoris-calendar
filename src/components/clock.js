import { LitElement, html } from 'lit-element';

class Clock extends LitElement {

    constructor() {
        super();
    }
    
    _render() {
        return html`<p>Soy un parrafo</p>`;
    }

    connectedCallback() {
        this._render();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(oldVal);
        console.log(newVal);
        //Si mi atributo/propiedad esta definido luego asigno a ese atributo un valor
        (attrName in this) && (this[attrName] = newVal);
    }
}
    
customElements.define('neoris-clock', Clock);