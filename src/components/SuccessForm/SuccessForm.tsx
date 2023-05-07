import React from 'react'
import accept from '../../assets/accept.svg'

import './success.css'

const SuccessForm = () => {

  return (
    <div className='main__page'>
        <div className='main__page_title'>
            <h1>Конструктор интеграций от LEADTEX</h1>
            <h2>Скоро запуск. Следи за проектом.</h2>
        </div>
        <div className='info'>
            <h3>Спасибо за Ваш интерес!</h3>
            <img src={accept} alt="" />
            <h4>Подпишитесь на наш официальный <br /> Telegram канал, чтобы ничего не пропустить.</h4>
            <form action='https://t.me/diliapi'>
                <button>Подписаться</button>
            </form>
        </div>
        <div className="footer">Лето 2023</div>
    </div>
  )
}

export default SuccessForm