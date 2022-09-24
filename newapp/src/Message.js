import './App.css';
import React, { useState, useEffect } from 'react';

function Message() {
    const [message, setMessage] = useState(
        []
    );

    const [lastUser, setLastUser] = useState('');

    const [name, setName] = useState(['']);
    const [text, setText] = useState(['']);
    useEffect(() => {
        let timeout = setTimeout(() => answer(), 1500)
        return () => clearTimeout(timeout)
        }, [lastUser])

    const nameChanger = (event) => {
        setName(event.target.value)
    }
    const textChanger = (event) => {
        setText(event.target.value)
    }

    const formSubmit = (event) => {
        event.preventDefault();
        let lastId = message.length;
        const item = {
            id: lastId + 1,
            text: text,
            author: name,
        }
        setMessage((prevMessage) => {
            return [item, ...prevMessage]
        });
        setLastUser(name);
    }

    const answer = () => {
        if (message.length > 0) {
            let lastId = message.length;
            const item = {
                id: lastId + 1,
                text: 'Ваше сообщение принято к рассмотрению, ожидайте ответа оператора.',
                author: 'Android',
            }
            setMessage((prevMessage) => {
                return [item, ...prevMessage]
            });
        }
    }

    return (
    <div className="App-bg">
        <form className='form' onSubmit={formSubmit}>
            <label htmlFor="name">Имя пользователя</label>
            <input id="name" value={name} onChange={nameChanger}/>
            <label htmlFor="message">Текст сообщения</label>
            <input id="message" value={text} onChange={textChanger}/>
            <button type="submit">Отправить сообщение</button>
        </form>
            

        <ul className="App-desc">
            {message.map((item) => {
                return(
                <li key={item.id}>
                    <h3 className="Message-author">{ item.author }</h3>
                    <div className="Message-text">{ item.text }</div>
                </li>
                )}
            )}
        </ul>
    </div>
    );
}
export default Message;