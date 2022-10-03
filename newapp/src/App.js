import './index.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ChatsPage from './pages/ChatsPage';
import NotFoundPage from './pages/NotFoundPage';
import Messages from './pages/Messages';
import {useState} from 'react';
import {ThemeContext, themes} from './context';
import Header from './components/Header';

function App(props) {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
    const toggleTheme = () => {
        setCurrentTheme(prevState => prevState == themes.light ? themes.dark : themes.light);
    }

return (
    <ThemeContext.Provider value={ {theme: currentTheme, toggleTheme: toggleTheme} }>
        <Header />
        <div className="App">
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path={'/profile'} element={<ProfilePage />}/>
                <Route path={'/chats'} element={<ChatsPage/>}/>
                <Route path={'/messages/:id'} element={<Messages/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    </ThemeContext.Provider>
    
);
}
export default App;