import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from 'react';
import Footer from './components/Footer';

function App() {

  const elements = React.createElement(
    'div', 
    {className: 'content', id: 'content'}, 
    React.createElement('h1', {className: 'title', style: {color: 'red'}}, 'Hello React JS'),
    React.createElement('h2', {}, 'Hello React JS'),
    React.createElement('h3', {}, 'Hello React JS'),
    React.createElement('h1', {}, 
      React.createElement('a', {href: 'https://tech2.vn', target: '_blank'}, 'Tech2')
    )
    );

  const style = {color: 'red'};

  const welcome = "Hello React JS";

  function showMsg(msg){
    alert('Xin chào Tech2' + msg);
  }

  return (
      <>
        {/* {elements} */}
        <div className="content" id="content">
          <h1 className="title" style={style}>{welcome}</h1>
          <h2>Hello React JS</h2>
          <h3>Hello React JS</h3>
          <h1><a href="https://tech2.vn" target="_blank">Tech2</a></h1>
          <label htmlFor='lbl_fullname'>Họ và tên</label>
          <input type="text" id='lbl_fullname' placeholder="Họ và tên" defaultValue="Hoàng An" />

          <div>
            <label htmlFor='male'>
              <input type="radio" name='gender' id='male' defaultValue='male' /> Nam
            </label>

            <label htmlFor='female'>
              <input type="radio" name='gender' id='female' defaultValue='female' /> Nữ
            </label>
          </div>

          <button type='button' onClick={(e) => {
            showMsg(e.target.innerText)
          }}>Click me</button>
        </div>
        <Footer />
      </>
  );
}

export default App;
