import React from 'react'
import { FiX, FiClipboard } from "react-icons/fi";
import './componentStyle.css'

const LinkItems = ({content,closeModal}) => {
  const {full_short_link,original_link} = content.result
  const copyLink = async () => {
    await navigator.clipboard.writeText(full_short_link)
    alert('URL copied to share and shortened ')
   }
  return (
    <div className="modal-container">

      <div className="modal-header">
        <h2>Shortened Link</h2>
        <button onClick={closeModal}>
          <FiX size={20} color="#000" />
        </button>
      </div>

      <span>
        {original_link}
      </span>

      <button className="modal-link" onClick={copyLink}>
        {full_short_link}
        <FiClipboard size={20} color="#FFF" />
      </button>

    </div>
  )
}

export default LinkItems