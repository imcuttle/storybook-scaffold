import { configure } from '@storybook/react';

import * as preview from '@storybook/react/dist/client/preview';

const storiesOf = preview.storiesOf
preview.storiesOf = function() {
  const rlt = storiesOf.apply(this, arguments)
  const originAdd = rlt.add

  // Supports add(label, middlewires, getComponent)
  function add(label, ...middlewires) {
    const fn = middlewires.reduceRight((fn, prevFn) => {
      if (typeof prevFn === 'function') {
        return prevFn(fn)
      }
      return fn
    })
    return originAdd(label, fn)
  }
  rlt.add = add
  return rlt
}

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
