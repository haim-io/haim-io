import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

function Modal({ onClose, children, actionBar }) {
  const [domReady, setDomReady] = React.useState(false)

  React.useEffect(() => {
    setDomReady(true)
  }, [])

  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return domReady
    ? ReactDOM.createPortal(
      <div>
        <div
          onClick={onClose}
          className="modal-overlay"
        />
        <div className="modal">
          <div className="modal-content">
            <div className="modal-content-inner">
              {children}
            </div>
            <div className="modal-action-bar">{actionBar}</div>
          </div>
        </div>
      </div>,
      document.querySelector('.modal-container')
    )
    : null
}

export default Modal
