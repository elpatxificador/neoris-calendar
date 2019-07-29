import { LitElement, html, css } from 'lit-element';
import { calendarDate } from '../services/helper-displayed-date.js';

class DisplayedDate extends LitElement{
    static get properties() { return { dateDisplayed: { type: String } }; }


    constructor() {
        super();
        this.dateDisplayed = '';
    }
    
    static get styles() {
        return css `
        .button {
            border: solid black;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
        }
        
        .up {
          transform: rotate(-135deg);
          -webkit-transform: rotate(-135deg);
        }
        
        .down {
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
        }
        `;
    }

    render() {
        return html`<button><i class="button ${this.direction}"></i></button>`;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this.arrowClicked.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.arrowClicked.bind(this));
        super.disconnectedCallback();
    }

    arrowClicked() {
        let event = new CustomEvent('arrow-event', {
            detail: this.direction,
            bubbles: true
            });
        this.dispatchEvent(event);
    }

}

customElements.define('neoris-arrow', ArrowButton);