import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../dist/reset.css';
import '../dist/main.css';

const album = {id: 1, artist: `TeenRoboDog`};

ReactDOM.render(<App album={album} />, document.getElementById('root'));