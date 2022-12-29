import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import './Header.scss'

const Header = () => {
  const [active, setActive] = React.useState('main')
  const [toggle, setToggle] = React.useState(false)
  const barsRef = React.useRef(null)

  
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      const withinBoundaries = e.composedPath().includes(barsRef.current);
      if (barsRef.current && !withinBoundaries) {
        setToggle(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className='navbar'>
      <h1>LIGHTHOME.KG</h1>
      <ul>
        <li ref={barsRef} className='bars' onClick={() => setToggle(prev => !prev)}><AiOutlineBars/></li>
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