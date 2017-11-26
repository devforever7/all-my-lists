import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListNamesContainer from './components/containers/ListNamesContainer';
import AddListContainer from './components/containers/AddListContainer';
import AddCategoryContainer from './components/containers/AddCategoryContainer';
import CurrentListContainer from './components/containers/CurrentListContainer';
import AsidePresentation from './components/presentation/pageLayout/AsidePresentation';
import SectionPresentation from './components/presentation/pageLayout/SectionPresentation';



/*const App = () => (
    <main className="main">
        <ListNamesContainer/>
        <CurrentListContainer />
    </main>
);*/

const App = () => (

<main className="main">
    <AsidePresentation />
    <SectionPresentation />
</main>

);

export default App;





/*<div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
    </p>
</div>*/



/*class App extends Component {

  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
  }
}*/



