import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FAQ from './FAQ';
import QuotesGenerator from './QuotesGenerator';
import ShoppingCart  from './ShoppingList';
import AppShopping from './ShoppingListFrom' ;
import GitHubUserSearch from './GitHubSearch';
import reportWebVitals from './reportWebVitals';
import BMICalculator from './BMICalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    /*<App />
    // <FAQ />
    <QuotesGenerator />
    <hr></hr>
    <ShoppingCart />
    <hr></hr>
    <GitHubUserSearch />
    <hr></hr>
    <BMICalculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
