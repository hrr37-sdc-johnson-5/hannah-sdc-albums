import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedAlbumsApp from './App.jsx';
import '../dist/reset.css';
import '../dist/main.css';


//get id from params to pass into the prop

ReactDOM.render(<RecommendedAlbumsApp />, document.getElementById('rec-albums'));

// window.RecommendedAlbumsApp = RecommendedAlbumsApp;