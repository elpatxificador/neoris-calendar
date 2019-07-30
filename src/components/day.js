import { LitElement, html, css } from 'lit-element';

class Day extends LitElement {

    static get styles() {
        return css`
        :host{
            color: white;
            font-size: 1.4rem;
            border: 0.05rem solid red;

            display: grid;
            grid-template-rows: auto;
        }

        :hover{
            background-color: green;
        }
        `;
    }

    static get properties() { return { _day: { type: String } }; }

    constructor() {
        super();
        this._day = "";
    }

    render() {

        return html`<div>${this._day}</div>`;
    }
}

customElements.define('neoris-day', Day);