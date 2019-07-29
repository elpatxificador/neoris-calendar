import { LitElement, html, css } from 'lit-element';
import { dateSystem } from '../services/helpertimeout.js';
import { dateLocale, dateOptions } from '../config/configextendeddate';

class ExtendedDate extends LitElement {

    static get styles() {
        return css`
        :host {
            color: blue;
        }
        `;
    }

    constructor(){
        super();
    }

    render() {
        return html`<p>${this.buildExtended(dateLocale, dateOptions)}</p>`;
    }

    buildExtended(locale, options) {
        return dateSystem.toLocaleDateString(locale, options);
    }
}

customElements.define('neoris-extended-date', ExtendedDate);