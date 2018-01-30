[![Build Status](https://travis-ci.org/advanced-rest-client/rest-api-menu.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/rest-api-menu)  

# rest-api-menu

A quick access menu for REST API projects

A list of REST APIs in the ARC main menu.
The element uses direct implementation of the PouchDB to make a query to the
datastore.
It also listens to `datastore-destroyed` custom event update state of the list
items when datastore was destroyed.

It listens for `selected-rest-api-changed` custom event as an alternative
to setting `selectedApi` property directly on the element.

### Example

```html
<rest-api-menu selected-api="[[route.api]]"></rest-api-menu>
```

### Datastore access

This element uses events API to access datastore data. This is provided by the
`arc-models/rest-api-model` element. See documentation for this element if you
need to implement own data exchange logic.

Datastore element is not in the shadow DOM of this element and is should be
included in the application DOM.

```html
<link rel="import" href="bower_components/arc-models/rest-api-model.html">
<link rel="import" href="bower_components/rest-api-menu/rest-api-menu.html">
<rest-api-menu selected-api="[[route.api]]"></rest-api-menu>
<rest-api-model></rest-api-model>
```

### Styling
`<rest-api-menu>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--rest-api-menu` | Mixin applied to the element | `{}`
`--rest-api-menu-background-color` | Background color of the menu | `#f7f7f7`
`--rest-api-menu-list-item` | Mixin applied to each list item | `{}`
`--rest-api-menu-selected-item-background-color` | Background color of the selected list item | `rgba(255, 152, 0, 0.24)`
`--rest-api-menu-name-label` | Mixin applied to the name label | `{}`
`--arc-menu-empty-info-color` | Color applied to the empty info section | ``
`--arc-menu-empty-info-title-color` | Color applied to the title in the empty info section | ``

