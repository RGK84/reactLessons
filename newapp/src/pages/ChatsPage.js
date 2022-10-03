import React, { useState} from 'react';
import {List, ListItem, IconButton, ListItemText} from '@mui/material';  
import {Comment} from '@mui/icons-material';
import {Link} from "react-router-dom";

function ChatsPage() {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Sergey'
        },
        {
            id: 2,
            name: 'Vlad'
        },
        {
            id: 3,
            name: 'Petr'
        }
    ]);

    return (
        <List sx={{ width: '20%', bgcolor: 'background.paper' }}>
            {chats.map((value) => (
                <ListItem
                key={value.id}
                secondaryAction={
                    <IconButton aria-label="comment">
                        <Comment />
                    </IconButton>
                }
                >
                    <Link to={`/messages/${value.id}`}>
                        <ListItemText primary={value.name} />
                    </Link>
                </ListItem>
            ))}
        </List>  
    );
}

export default ChatsPage;