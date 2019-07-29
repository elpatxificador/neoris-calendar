import { LitElement, html, css } from 'lit-element';

class ArrowButton extends LitElement{
    static get properties() { return {
        direction: { type: String }
      };
    }

    constructor() {
        super();
        this.direction = '';
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
        document.addEventListener('click', this.arrowClicked);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.arrowClicked);
        super.disconnectedCallback();
    }

    arrowClicked() {
        console.log('Click en arrow');
        let event = new CustomEvent('my-event', {
            detail: {
              message: 'Arrow click ', direction: this.direction
            }
          });
        this.dispatchEvent(event);
    }

}

customElements.define('neoris-arrow', ArrowButton);