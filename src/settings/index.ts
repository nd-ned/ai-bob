import { createElement, render } from 'preact'
import MainRouter from './MainRouter'
import './index.css'

render(createElement(MainRouter, null), document.getElementById('app') as HTMLElement)
