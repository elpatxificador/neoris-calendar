import { LitElement, html } from 'lit-element';

class Clock extends LitElement {

    constructor() {
        super();
    }
    
    render() {
        return html`<p>Soy un parrafo</p>`;
    }
}
    
customElements.define('neoris-clock', Clock);