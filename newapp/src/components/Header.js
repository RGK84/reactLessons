import { useContext } from 'react';
import { ThemeContext } from '../context';


function Header() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <header className="App-menu">
            <button onClick={toggleTheme}>Light</button>
            <button onClick={toggleTheme}>Dark</button>
        </header>
    );
}

export default Header;