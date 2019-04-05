[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/rest-api-menu.svg)](https://www.npmjs.com/package/@advanced-rest-client/rest-api-menu)

[![Build Status](https://travis-ci.org/advanced-rest-client/rest-api-menu.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/rest-api-menu)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/rest-api-menu)

# rest-api-menu

A quick access menu for REST API projects

```html
<rest-api-menu></rest-api-menu>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/rest-api-menu
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/rest-api-menu/rest-api-menu.js';
    </script>
  </head>
  <body>
    <rest-api-menu></rest-api-menu>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/rest-api-menu/rest-api-menu.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <rest-api-menu></rest-api-menu>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/rest-api-menu
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
