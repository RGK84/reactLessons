const initialState = {
    messages: [
        {
            id: 1,
            text: 'Привет!',
            author: 'Sergey',
            chatId: 1
        },
        {
            id: 2,
            text: 'Добрый вечер!',
            author: 'Vlad',
            chatId: 2
        },
        {
            id: 3,
            text: 'Привет!',
            author: 'Roman',
            chatId: 1
        },
        {
            id: 4,
            text: 'Прив!',
            author: 'Roman',
            chatId: 2
        },
        {
            id: 5,
            text: 'Хоу!',
            author: 'Petr',
            chatId: 3
        },
        {
            id: 6,
            text: 'Хай!',
            author: 'Roman',
            chatId: 3
        }
    ]
}


export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                messages: state.messages.filter((message) => message.id !== action.payload)
            }
        case 'add':
            return {
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}