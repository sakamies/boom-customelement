<h1>Boom custom element</h1>

This is a silly example of how you can parameterize custom elements with their name. Define an element named &lt;boom---&gt; and the element will have a fuse of as many seconds as there are dashes in its name.

```js
import { Boom } from './boom.js'
customElements.define('boom---', Boom);
```

```html
  <boom---></boom--->
```

You can only have one element per class in the custom elements registry though. You'd have to extend your class with a new one if you wanted to configure another element based on its name. Kinda defeats the purpose.