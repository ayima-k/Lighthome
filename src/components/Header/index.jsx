import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import './Header.scss'

const Header = () => {
  const [active, setActive] = React.useState('main')
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className='navbar'>
      <h1>LIGHTHOME.KG</h1>
      <ul>
        <li className='bars' onClick={() => setToggle(prev => !prev)}><AiOutlineBars/></li>
        <ul className={toggle ? 'ul active' : 'ul'}>
          <li
            className={active === 'main' ? 'li active' : 'li'}
            onClick={() => setActive('main')}
          >
            Главная
          </li>
          <li 
            className={active === 'contacts' ? 'li active' : 'li'}
            onClick={() => setActive('contacts')}
          >
            Контакты
          </li>
          <li 
            className={active === 'link' ? 'li active' : 'li'}
            onClick={() => {
              window.location.href = 'https://www.instagram.com/lighthome_kg/'
              setActive('link')
            }}
          >
            <BsInstagram/>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default Header