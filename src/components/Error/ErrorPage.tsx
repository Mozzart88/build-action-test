import React from 'react'
import './error.css'
import { Helmet } from 'react-helmet'

const ErrorPage = () => {
  return (
    <div className='error__page'>
      <Helmet>
        <title>Что-то пошло не так</title>
      </Helmet>
        <div className='error__page_title'>
            <h1>Создавайте и автоматизируйте любые интеграции с конструктором DiliApi.</h1>
            <h2>Скоро запуск. Следи за проектом.</h2>
        </div>
        <div className='error_info'>
            <h3>Что-то пошло не так</h3>
            <h4>Повторите попытку позже или проверьте интернет соединение.</h4>
        </div>
        <div className="error_footer">Лето 2023</div>
    </div>
  )
}

export default ErrorPage