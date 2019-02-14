import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel  from './components/search-panel';
import  TodoList from './components/todo-list'

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

//const el = React.createElement('h1', null, 'Hello World!');


ReactDom.render(<App/>, document.getElementById('root'));