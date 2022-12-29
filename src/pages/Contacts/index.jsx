import React from 'react'
import './Contacts.scss'

const Contacts = () => {
  return (
    <div className='contacts'>
      <h1>По поводу сотрудничества или возникновения вопросов обращайтесь по номеру</h1>
      <button onClick={() => window.location.href='https://wa.me/message/MCEORQJHY6W3F1'}>+996 500 520 000</button>
      <h1>Наш адрес</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d758.194374420584!2d72.76978037735259!3d40.52440881871228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1672333695603!5m2!1sru!2skg" width='100%' height='500' style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contacts