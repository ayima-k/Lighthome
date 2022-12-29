import React from 'react'
import { AiOutlineAntDesign, AiOutlineDollarCircle } from 'react-icons/ai'
import { BsKey, BsStar } from 'react-icons/bs'
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
      {/* <h2>ремонт квартиры под ключ</h2> */}
      <h2>ремонт недвижимости в городе Ош</h2>
      <span>Цель компании <span className='dark_blue'>«Light Home»</span> - сделать качественный ремонт каждому клиенту по <span className='light_blue'>доступной цене</span>.</span>
      <div className="block">
        <div className="card">
          <span><BsKey/></span>
          <p>Ремонт под ключ</p>
        </div>
        <div className="card">
          <span><AiOutlineDollarCircle/></span>
          <p>Приемлемая цена</p>
        </div>
        <div className="card">
          <span><BsStar/></span>
          <p>Работаем на качество</p>
        </div>
        <div className="card">
          <span><AiOutlineAntDesign/></span>
          <p>Дизайн интерьера от А до Я</p>
        </div>
      </div>
    </div>
  )
}

export default Main