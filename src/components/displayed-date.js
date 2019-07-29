import { LitElement, html, css } from 'lit-element';
import { calendarDate } from '../services/helper-displayed-date.js';

class DisplayedDate extends LitElement{
    static get properties() { return { dateDisplayed: { type: Object } }; }

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
        /*
        <p class = "arrows">
        <neoris-arrow direction="up"></neoris-arrow>
        <neoris-arrow direction="down"></neoris-arrow>
        </p>
        */
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('arrow-event', this.arrowClicked.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('arrow-event', this.arrowClicked.bind(this));
        super.disconnectedCallback();
    }

    arrowClicked() {
        if (!this.dateDisplayed) {
            this.dateDisplayed = calendarDate;
        }
        if (event.detail === 'up') {  
            calendarDate.setMonth(calendarDate.getMonth + 1);
        } else if (event.detail === 'down') {
            calendarDate.setMonth(calendarDate.getMonth - 1);
        }
        this.dateDisplayed = calendarDate;

        event.stopPropagation();
    }

}

customElements.define('neoris-displayed-date', ArrowButton);