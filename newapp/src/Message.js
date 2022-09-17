import './App.css';

function Message( {message}) {
    return (
    <div className="App-bg">
        <p className="App-desc">{message}</p>
    </div>
    );
}
export default Message;