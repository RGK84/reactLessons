import '../index.css';
import React, { useState, useEffect, useRef } from 'react';
import {Box, Button, TextField, Card, Typography, CardContent, List, ListItem} from '@mui/material';  

function Messages() {
        
    const [message, setMessage] = useState([
        {
            id: 1,
            text: 'Привет!',
            author: 'Sergey',
        },
        {
            id: 2,
            text: 'Добрый вечер!',
            author: 'Vlad',
        },
        {
            id: 3,
            text: 'Привет!',
            author: 'Roman',
        },
        {
            id: 4,
            text: 'Прив!',
            author: 'Roman',
        },
        {
            id: 5,
            text: 'Хоу!',
            author: 'Petr',
        },
        {
            id: 6,
            text: 'Хай!',
            author: 'Roman',
        }
    ]);

    // const [lastUser, setLastUser] = useState('');

    const [name, setName] = useState(['']);
    const [text, setText] = useState(['']);

    const ref = useRef(null);
    
    // useEffect(() => {
    //     let timeout = setTimeout(() => answer(), 1500);
    //     console.log(ref);
    //     focusInput(ref.current.children[1].children[0]);
    //     return () => clearTimeout(timeout)
    // }, [lastUser])

    const nameChanger = (event) => {
        setName(event.target.value)
    }
    const textChanger = (event) => {
        setText(event.target.value)
    }

    const formSubmit = (event) => {
        event.preventDefault();
        ref.current.focus();
        let lastId = message.length;
        const item = {
            id: lastId + 1,
            text: text,
            author: name,
        }
        setMessage((prevMessage) => {
            return [item, ...prevMessage]
        });
        setName('');
        setText('');
        // setLastUser(name);
    }

    // const answer = () => {
    //     if (message.length > 0) {
    //         let lastId = message.length;
    //         const item = {
    //             id: lastId + 1,
    //             text: 'Ваше сообщение принято к рассмотрению, ожидайте ответа оператора.',
    //             author: 'Android',
    //         }
    //         setMessage((prevMessage) => {
    //             return [item, ...prevMessage]
    //         });
    //     }
    // }

    function focusInput(field) {
        if (field) {
            field.focus();
        }
    }

    return (
        <div className="App-bg">
            <div className='App-main'>
                <Box component="form" className='form' onSubmit={formSubmit}>
                    <TextField id="name" ref={ref} variant="outlined" autoFocus label="Имя пользователя" required value={name} onChange={nameChanger}/>
                    <TextField id="message" variant="outlined" label="Текст сообщения" required value={text} onChange={textChanger}/>
                    <Button variant="contained" type="submit">Отправить</Button>
                </Box>

                <List className="App-desc">
                    {message.map((item) => {
                        return(
                        <ListItem key={item.id}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">{ item.author }</Typography>
                                    <Typography variant="body2">{ item.text }</Typography>
                                </CardContent>
                            </Card>
                        </ListItem>
                        )}
                    )}
                </List>
            </div>
        </div>
    );
}
export default Messages;