import { List, ListItem, IconButton, ListItemText } from '@mui/material';  
import { Comment } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { chatsSelector } from '../redux/reducers/chatsSelector';

function ChatsPage() {
    const chats = useSelector(chatsSelector);

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