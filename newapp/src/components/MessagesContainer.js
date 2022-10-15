import Messages from "../pages/Messages";

const MessagesContainer = () => {

    return (
        <Messages
            chatId={chatId}
            messages={messageList[chatId]}
            onAddChat={onAddChat}
            onAddMessage={onAddMessage}
        />
    );
}