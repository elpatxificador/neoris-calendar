import { LitElement, html, css } from 'lit-element';
import { calendarDate } from '../services/helper-displayed-date.js';
import { ArrowButton } from '../components/arrow-button.js';

class DisplayedDate extends LitElement{
    static get properties() { return { dateDisplayed: { type: Object } }; }

    constructor() {
        super();
        this.dateDisplayed = '';
    }
    
    static get styles() {
        return css `
        :host {
            display: flex;
        }
        .month {
            flex: 10;
        }
        .arrows {
            flex: 2;
        }
        `;
    }

    render() {
        return html`
        <div class="month">
            <button>Button 1</button>
        </div>
        <div class="arrows">
            <neoris-arrow direction="up"></neoris-arrow>
            <neoris-arrow direction="down"></neoris-arrow>
        </div>
        `;
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

customElements.define('neoris-displayed-date', DisplayedDate);

