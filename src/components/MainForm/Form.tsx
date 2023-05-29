import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './form.css'
import { Helmet } from 'react-helmet'
import Logo from '../../assets/logo.svg'

const Form = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    // const [usernameDirty, setUsernameDirty] = useState(false)
    const [emailError, setEmailError] = useState('Поле Email не может быть пустым')
    // const [usernameError, setUsernameError] = useState('Поле Username не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError])

    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            // case 'username':
            //     setUsernameDirty(true)
            //     break
        }
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email')
        } else {
            setEmailError('')
        }
    }

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
        // if (!e.target.value) {
        //     setUsernameError('Поле Username не должно быть пустым')
        // } else {
        //     setUsernameError('')
        // }
    }

    const navigate = useNavigate()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        const url = 'https://hook.eu1.make.com/a6csf4i4vopqaw8wwljyn8f93sf8om10'

        try {
            await axios.post(url, {
                email,
                username
            })
                navigate('/success')
        } catch(err) {
                navigate('/error')
        }
    }

  return (
    <div className='main__page'>
        <Helmet>
            <title>Готовые интеграции в конструкторе DiliApi. Связывайте сервисы и автоматизируйте процессы.</title>
            <meta
                name='description'
                content='Автоматизация доступная каждому. Создавайте интеграции с готовыми шаблонами и связывайте сервисы в конструкторе DiliApi.'
            />
            <meta
                name='keywords'
                content='интеграции, авоматизация, автоматизаруйте'
            />
        </Helmet>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className='main__page_title'>
            <h1>Создавайте и автоматизируйте любые интеграции с конструктором DiliApi.</h1>
            <h2>Скоро запуск. Следи за проектом.</h2>
        </div>
        <div className='main__page_form'>
            <form className='senddata__main_form'>
                <h2>Хочешь тестировать сервис в числе первых?</h2>
                <input
                className='email'
                    type="email" 
                    placeholder='Email' 
                    value={email} 
                    name='email' 
                    onChange={e => emailHandler(e)} 
                    onBlur={e => blurHandler(e)} 
                />
                {(emailDirty && emailError) && <div className='error'>{ emailError }</div>}
                {/* {(usernameDirty && usernameError) && <div className='error'>{ usernameError }</div>} */}
                <input
                    className='username'
                    type="text" 
                    placeholder='Username Telegram' 
                    value={username} 
                    name='username' 
                    onChange={e => usernameHandler(e)} 
                    // onBlur={e => blurHandler(e)} 
                />
                <button disabled={!formValid} type='submit' className='submit_btn' onClick={handleSubmit}>Записаться</button>
            </form>            
        </div>
        <div className="footer">Лето 2023</div>
    </div>
  )
}

export default Form