import { LitElement, html } from 'lit-element';
import { interval, dateSystem } from '../services/helpertimeout.js';

const tick = 1000;

class Clock extends LitElement {

    static get properties() { return { _time: { type: String } }; }

    constructor() {
        super();
        this._intervalID = 0;
        this._time = undefined;
    }
    
    render() {
        console.log(this._time);
        if (!this._time) {
            this._time = dateSystem.getHours() + ":" + dateSystem.getMinutes() + ":" + dateSystem.getSeconds();
        }
        return html`<p>${this._time}</p>`;
    }

    connectedCallback() {
        super.connectedCallback();
        this._intervalID = interval.setInterval(this.changeClock.bind(this), tick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        interval.clearInterval(this._intervalID);
    }

    changeClock() {
        dateSystem.setSeconds(dateSystem.getSeconds() + (tick/1000));
        this._time = this.appendLeadingZeroes(dateSystem.getHours()) + ":" + 
                        this.appendLeadingZeroes(dateSystem.getMinutes()) + ":" + 
                        this.appendLeadingZeroes(dateSystem.getSeconds());
    }

    appendLeadingZeroes(number){
        if(number <= 9){
          return "0" + number;
        }
        return number;
    }
}
    
customElements.define('neoris-clock', Clock);