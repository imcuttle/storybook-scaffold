import './style.css'
import { editable } from 'react-mhoc'
import * as React from 'react'

export default function withEditable(getComp, {} = {}) {
  return function() {
    const comp = getComp()

    let Comp = comp.type
    if (typeof comp.type === 'function') {
      Comp = editable(comp.type)
    }

    return React.Children.only(
      React.createElement(Comp, comp.props, comp.props.children)
    )
  }
}