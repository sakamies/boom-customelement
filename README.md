<h1>Boom custom element</h1>

This is a silly example of how you can parameterize custom elements with their name. Define an element named &lt;boom---&gt; and the element will have a fuse of as many seconds as there are dashes in its name.

Import as usual.

```js
import { Boom } from './boom.js'
customElements.define('boom---', Boom);
```

Add the element. For the sake of informing your users, you must have an [output element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output) inside your boom. It will show the seconds remaining.

```html
  <boom--->
    This message will self destruct in <output></output> seconds.
  </boom--->
```

You can only have one element per class in the custom elements registry though. You'd have to extend your class with a new one if you wanted to configure another element based on its name. Kinda defeats the purpose.

Also learned from this that you can't redefine or remove custom element definitions. That feels very unusual for javascript.