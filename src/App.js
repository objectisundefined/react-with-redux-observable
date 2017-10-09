import React, { Component } from 'react';
import Stories from './components/Stories';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';
import Ping from './components/Ping'
import Users from './components/Users'
import Search from './components/Search'
import Beers from './components/Beers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stories />
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
        <Ping />
        <Users />
        <Search />
        <Beers />
      </div>
    );
  }
}

export default App;
