import '../index.css';
import React, { useState, useRef, useContext, useEffect } from 'react';
import {Box, Button, TextField, Card, Typography, CardContent, List, ListItem} from '@mui/material';  
import {ThemeContext} from '../context';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { messagesSelector } from '../redux/reducers/messagesSelector';

function Messages() {
        
    const messages = useSelector(messagesSelector);

    const [name, setName] = useState(['']);
    const [text, setText] = useState(['']);

    const ref = useRef(null);
    
    const nameChanger = (event) => {
        setName(event.target.value)
    }
    const textChanger = (event) => {
        setText(event.target.value)
    }

    const dispatch = useDispatch();

    const { theme, toggleTheme } = useContext(ThemeContext);

    const {id} = useParams();
    const filteredMessages = messages.filter((message) => {
        return message.chatId === +id;
    });

    const addMessage = (event) => {
        event.preventDefault();
        ref.current.focus();
        let lastId = messages.length;
        const item = {
            id: lastId + 1,
            text: text,
            author: name,
            chatId: +id
        };
        dispatch({ type: 'add', payload: item });
        setName('');
        setText('');
        setLastUser(name);
    }

    const [lastUser, setLastUser] = useState('');

    useEffect(() => {
        let timeout = setTimeout(() => answer(), 1500);
        return () => clearTimeout(timeout);
    }, [lastUser])

    const answer = () => {
        if (messages.length > 6) {
            let lastId = messages.length;
            const item = {
                id: lastId + 1,
                text: 'Ваше сообщение принято к рассмотрению, ожидайте ответа оператора.',
                author: 'Android',
                chatId: +id
            }
            dispatch({ type: 'add', payload: item });
        }
    }
    
    return (
        <>
            <div className="App-bg">
                <div className='App-main'>
                    <Box component="form" className='form' onSubmit={addMessage}>
                        <TextField id="name" ref={ref} variant="outlined" autoFocus label="Имя пользователя" required value={name} onChange={nameChanger}/>
                        <TextField id="text" variant="outlined" label="Текст сообщения" required value={text} onChange={textChanger}/>
                        <Button variant="contained" type="submit">Отправить</Button>
                    </Box>

                    <List className="App-desc" style={{background: theme.background, color: theme.color}}>
                        {filteredMessages.map((item) => {
                            return(
                            <ListItem key={item.id}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">{ item.author }</Typography>
                                        <Typography variant="body2">{ item.text }</Typography>
                                        <Button variant="contained" type="button" onClick={() => dispatch({ type: 'delete', payload: item.id })}>Удалить</Button>
                                    </CardContent>
                                </Card>
                            </ListItem>
                            )}
                        )}
                    </List>
                </div>
            </div>
        </>
    );
}
export default Messages;