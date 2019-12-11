import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import * as Components from './server-components'

const toExpose = {
  React,
  ReactDOM,
  ReactDOMServer,
  REACT: Components,
  Styled: { ServerStyleSheet }
}

Object.assign(global, toExpose)