import React from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'react-bootstrap'

const Quotes = [
    ["Thomas Edison, type fit","Genius is one percent inspiration and ninety-nine percent perspiration"],
    ["Yogi Berra","Life is a learning experience, only if you learn"],
    ["type fit","Today is the tomorrow we worried about yesterday"],
    ["Karen Clark, type fit","Life is change. Growth is optional. Choose wisely."],
    ["type fit","Today is the tomorrow we worried about yesterday"],
    ["type fit","Monday is the tomorrow we worried about yesterday"],
    ["type fit","Tuesday is the tomorrow we worried about yesterday"],
    ["type fit","Wednesday is the tomorrow we worried about yesterday"],
    ["type fit","Thursday is the tomorrow we worried about yesterday"],
    ["type fit","Friday is the tomorrow we worried about yesterday"],
    ["type fit","Saturday is the tomorrow we worried about yesterday"],
    ["type fit","Sunday is the tomorrow we worried about yesterday"],

]


function QuotesGenerator () {
    const [currentQuote, setQuote ] = React.useState(Quotes[0]);

    let updateQuote = () => {
        alert("Hello Quotes. adsfadfadf");
        setQuote(Quotes[Math.floor((Math.random() * Quotes.length ))]);
    }

    function UpdateQuote1(){
        alert("Hello Quotes. adsfadfadf");
        setQuote(Quotes[3]);
        document.getElementById("Author").innerHTML= "nodeValue()";
    }

    return  (
        <>
            <div>
                <h1>Project 3: Quotes Generator</h1>
                <button  onClick={updateQuote}>New Quotes</button>
                <div>
                   <h3 id='Quote' >{currentQuote[1]}.</h3>
                   <h5 id='Author'>{currentQuote[0]}</h5>
                </div>
            </div>
        </>
        )  ;
}

export default QuotesGenerator