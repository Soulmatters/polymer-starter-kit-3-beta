import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js'
import './shared-styles.js';


class MyView1 extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>

    <div class="card">
      <div class="circle">1</div>
      <h1>View One</h1>
      <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
      <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      
      <paper-button raised> test </paper-button>
      
    </div>
`;
  }

  static get is() { return 'my-view1'; }
}

window.customElements.define(MyView1.is, MyView1);
