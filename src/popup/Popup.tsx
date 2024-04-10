import './Popup.css'

export const Popup = () => {
  return (
    <main style={{ border: '1px solid red' }}>
      <button
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          margin: '10px 0',
        }}
        onClick={() => {
          chrome.tabs.create({ url: chrome.runtime.getURL('settings.html') })
        }}
      >
        Open settings
      </button>
    </main>
  )
}

export default Popup
