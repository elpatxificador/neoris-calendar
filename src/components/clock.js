import { LitElement, html } from 'lit-element';
import { interval, dateSystem } from '../services/helpertimeout.js';

const tick = 1000;

class Clock extends LitElement {

    constructor() {
        super();

        this._intervalID = 0;
        this._time = undefined;
    }
    
    render() {
        console.log(this._time);
        return html`<p>Reloj: ${this._time}</p>`;
    }

    connectedCallback() {
        this._intervalID = interval.setInterval(this.changeClock.bind(this), tick);
    }

    disconnectedCallback() {
        interval.clearInterval(this._intervalID);
    }

    changeClock() {
        
        dateSystem.setSeconds(dateSystem.getSeconds() + (tick/1000));
        this._time = dateSystem.getHours() + ":" + dateSystem.getMinutes() + ":" + dateSystem.getSeconds();
        this.render();
    }
}
    
customElements.define('neoris-clock', Clock);