import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel  from './components/search-panel';
import  TodoList from './components/todo-list'

const App = () => {

    const  todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id:2},
        {label: 'Have a lunch', important: false, id:3}
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

//const el = React.createElement('h1', null, 'Hello World!');


ReactDom.render(<App/>, document.getElementById('root'));