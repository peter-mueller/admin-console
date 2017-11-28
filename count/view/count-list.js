import {html, render} from '/node_modules/lit-html/lit-html.js';

const template = val => html`
<style>
    :host {
        display: block;
    }
    
    table { 
        border-collapse: collapse;        
        margin: auto;
    }
    th {
        border-bottom: 1px solid black;
    }
    tr +tr {
        border-top: 1px solid #e5e5e5;
    }
    td,th {
        padding: 1rem;
    }
</style>

<table>
<tr>
  <th align="left">Client Name</th>
  <th align="center">Anzahl Request</th> 
</tr>
${val.map(count => html`
<tr>
  <td id="name">${count.clientName}</td>
  <td align="center" id="amount">${count.amount}</td> 
</tr>
`)}


</table>
`

export class CountList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});        
    }

    set counts(val) {
        render(template(val), this.shadowRoot);
    }
}

customElements.define('count-list', CountList);