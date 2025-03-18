<h1>Boom custom element</h1>

This is a silly example of how you can parameterize custom elements with their name. Define an element named &lt;boom---&gt; and the element will have a fuse of as many seconds as there are dashes in its name.

```js
import { Boom } from './boom.js'
customElements.define('boom---', Boom);
```

```html
  <boom---></boom--->
```

Rather useless though, because you can only have one element per class in the custim elements registry.