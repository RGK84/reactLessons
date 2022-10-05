const initialState = {
    chats: [
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
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}