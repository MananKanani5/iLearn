import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Loader extends React.Component {
  state = {
    loading: true
  };
  
  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    
    return (
      <App />
    ); 
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}

ReactDOM.render(
  <React.StrictMode>
    <Loader /> 
  </React.StrictMode>,
  document.getElementById('root')
);


