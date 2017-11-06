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
```
<rest-api-menu selected-api="[[route.api]]"></rest-api-menu>
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

