import React from 'react'
import accept from '../../assets/accept.svg'

import './success.css'
import { Helmet } from 'react-helmet'
import Logo from '../../assets/logo.svg'

const SuccessForm = () => {

  return (
    <div className='success__page'>
      <Helmet>
        <title>Спасибо за ваш интерес!</title>
      </Helmet>
        <div className="success_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className='success__page_title'>
            <h1>Создавайте и автоматизируйте любые интеграции с конструктором DiliApi.</h1>
            <h2>Скоро запуск. Следи за проектом.</h2>
        </div>
        <div className='success_info'>
            <h3>Спасибо за Ваш интерес!</h3>
            <img src={accept} alt="accept" />
            <h4>Подпишитесь на наш официальный Telegram канал, чтобы ничего не пропустить.</h4>
            <form action='https://t.me/diliapi'>
                <button>Подписаться</button>
            </form>
        </div>
        <div className="success_footer">Лето 2023</div>
    </div>
  )
}

export default SuccessForm