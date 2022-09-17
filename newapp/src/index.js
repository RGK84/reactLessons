import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myName = 'Roman';
const newMessage = 'Современные технологии достигли такого уровня, что экономическая повестка сегодняшнего дня выявляет срочную потребность системы массового участия. Вот вам яркий пример современных тенденций — базовый вектор развития играет определяющее значение для инновационных методов управления процессами. А также действия представителей оппозиции, вне зависимости от их уровня, должны быть объявлены нарушающими общечеловеческие нормы этики и морали.';

root.render(
  <React.StrictMode>
  <App name={myName} message={newMessage} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
