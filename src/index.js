import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import 'tachyons';
import { robots } from './robots';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(<CardList robots={robots}/>, document.getElementById("root"));
  

