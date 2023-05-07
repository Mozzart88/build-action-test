import React from 'react'
import './error.css'

const ErrorPage = () => {
  return (
    <div className='main__page'>
        <div className='main__page_title'>
            <h1>Конструктор интеграций от LEADTEX</h1>
            <h2>Скоро запуск. Следи за проектом.</h2>
        </div>
        <div className='info'>
            <h3>Что-то пошло не так</h3>
            <h4>Повторите попытку позже или проверьте интернет соединение.</h4>
        </div>
        <div className="footer">Лето 2023</div>
    </div>
  )
}

export default ErrorPage