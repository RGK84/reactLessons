import './App.css';
import React, { useState} from 'react';
import {List, ListItem, IconButton, ListItemText} from '@mui/material';  
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Comment} from '@mui/icons-material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#393E46",
        },
        secondary: {
            main: "#EEEEEE",
        },
    },
});

function ChatList() {
    const [chat] = useState([
        {
            id: 1,
            name: 'Chat 1'
        },
        {
            id: 2,
            name: 'Chat 2'
        },
        {
            id: 3,
            name: 'Chat 3'
        }
    ]);

    return (
        <ThemeProvider theme={theme}>
            <List sx={{ width: '20%', bgcolor: 'background.paper' }}>
                {chat.map((value) => (
                    <ListItem
                    key={value.id}
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <Comment />
                        </IconButton>
                    }
                    >
                    <ListItemText primary={value.name} /></ListItem>
                ))}
            </List>  
        </ThemeProvider>
    );
}

export default ChatList;