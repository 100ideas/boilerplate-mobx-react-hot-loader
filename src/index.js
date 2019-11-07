import React from 'react';
import { render } from 'react-dom';

import App from './App';
import './index.css';

import {countUniqueElements} from 'utils'
console.log(countUniqueElements([1,2,3]))

const root = document.createElement('div');
document.body.appendChild(root);

render( <App />, root );