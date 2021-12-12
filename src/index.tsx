import App from './App'
import React from 'react'
import { render } from 'react-dom'
import { Global } from './globalStyle'

render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
