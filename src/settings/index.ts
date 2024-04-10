import { createElement, render } from 'preact'
import App from './App'
import './index.css'

render(createElement(App, null), document.getElementById('app') as HTMLElement)
