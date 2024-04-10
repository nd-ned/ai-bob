import { useState, useEffect } from 'preact/hooks'

import './Popup.css'
import settingsIcon from '../assets/settingsIcon.svg'

export const Popup = () => {
  return (
    <main style={{ border: '1px solid red' }}>
      <h3>Popup </h3>
      <img
        src={settingsIcon}
        alt="settings"
        onClick={() => {
          chrome.tabs.create({ url: chrome.runtime.getURL('settings.html') })
        }}
      />
      <button
        onClick={() => {
          chrome.browserAction.onClicked.addListener(function (tab) {
            chrome.windows.create({
              type: 'panel',
              url: chrome.runtime.getURL('sidepanel.html'),
              width: 300,
              height: window.screen.availHeight,
            })
          })
        }}
      >
        Open side panel
      </button>
    </main>
  )
}

export default Popup
