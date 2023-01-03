
import './App.css';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NameForm from './components/NameForm';
import SupportFrom from './components/SupportFrom';
import { Menu } from './Menu';
import TodoList from './components/ToDoList/TodoList';



function App() {
  return (

    <ErrorBoundary>
      <div className="App">
        <Menu />
        <Hero heroName="Batman"></Hero>
        <Hero heroName="Superman"></Hero>
        <Hero heroName="Yulia"></Hero>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/name' element={<NameForm />} />
          <Route exact path='/support' element={<SupportFrom />} />
          <Route exact path='/todo' element={<TodoList />} />
        </Routes>
      </div >
    </ErrorBoundary>


  );
}

export default App;
