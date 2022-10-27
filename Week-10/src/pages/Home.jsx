import React, { useState } from 'react'
import { FiLink } from 'react-icons/fi';
import LinkItems from '../components/LinkItems';
import Menu from '../components/Menu';
import api from '../services/api';


const Home = () => {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false);

  const onSubmitHandler = async () => {
    try {
      const res = await api.post(`/shorten?url=${link}`)
      setData(res.data)
      setShowModal(true)
      setLink('')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className='container-home'>
      <div className="logo">
        <img src="/Logo.png" alt="link-logo"/>
        <h1>Short Link</h1>
        <span>Paste your link to shorten</span>
      </div>

      <div className="area-input">
        <form className='input-box'>
        <FiLink size={24} color="#FFF" />
        <input type="text" placeholder='Paste your link here....'
               value={link}
               onChange={(e) => setLink(e.target.value)}
               name="link"
               id="link" />
        </form>
        <button onClick={onSubmitHandler}>Shorten Link</button>
      </div>
      <Menu/>
      {
        showModal && (
          <LinkItems
          closeModal={() => setShowModal(false)}
          content= {data}
          />
        )
      }

    </div>
  )
}

export default Home