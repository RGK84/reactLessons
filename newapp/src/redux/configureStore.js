import {applyMiddleware, combineReducers, createStore} from "redux";
import { chatReducer } from "./reducers/chatReducer";
import { messageReducer } from "./reducers/messageReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// const logger = store => next => action => {
//     const delay = action?.meta?.delayMs;
//     if (!delay) return next(action);

//     const timeout = setTimeout( () => next(action), delay);

//     return () => clearTimeout(timeout);
// }

const config = {
    key: 'root',
    storage
};

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
});

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);