import React, {Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import routes from './routes'

class App extends Component{
  render(){
   return (
    <div className="App">
     <Header/>
    {routes}
     <Footer/>
    </div>
  );
}
}

export default App;
