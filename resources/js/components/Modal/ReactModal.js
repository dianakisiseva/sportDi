import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Modal from 'react-modal'
import classNames from 'classnames'

Modal.setAppElement('#app')

const ReactModal = forwardRef(
  (props, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)
    const { className, closeButton } = props
    const modalClass = classNames('Content', className)

    useImperativeHandle(
      ref,
      () => ({
        setContent (contentTitle, contentBody) {
          setContent(contentTitle, contentBody)
        },

        open () {
          open()
        },

        close () {
          close()
        }
      })
    )
    const setContent = (contentTitle, contentBody, openModal = true) => {
      setTitle(contentTitle ?? null)
      setBody(contentBody ?? null)
      setIsOpen(openModal)
    }

    const open = () => {
      setIsOpen(true)
    }

    const close = () => {
      setIsOpen(false)
    }

    return (
      <Modal
        className={modalClass}
        overlayClassName='Overlay'
        isOpen={isOpen}
        onRequestClose={close}
        shouldCloseOnOverlayClick={false}
      >
        <div className={`modal-header ${!title || !title.length ? 'modal-no-border' : ''}`}>
            <div className="react-modal-header-title-icon">
                {closeButton && <button onClick={close} className="btn-close b-right"></button>}
            </div>
            <h5>{title}</h5>

          <button onClick={close} className='modal-btn-close' />
        </div>

        {body}
      </Modal>
    )
  }
)

export default ReactModal
