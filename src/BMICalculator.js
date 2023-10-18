import React from 'react'
import ReactDOM from 'react-dom'
import bootstrap, { Badge } from 'react-bootstrap'
import  Form  from 'react-bootstrap/Form';
import './styles.css';



function BMICalculator () {
    
   // const UserList = [];
    
    const githuburl = "https://api.github.com/search/users?q=";

    const [weight, setWeight ] = React.useState(50);
    const [height, setHeight ] = React.useState(100);
    const [heightinmeter, setHeightinMeter ] = React.useState(height/100);
    const [bmi, setBMI ] = React.useState(weight/heightinmeter);

    function  UpdateWeight(el){
        el.preventDefault();
        const input = el.target;
        console.log(input.value);
        setWeight(input.value);
        setHeightinMeter(height/100);
        setBMI(weight/(heightinmeter*heightinmeter).toFixed(1));
    }
    function  UpdateHeight(el){
        el.preventDefault();
        const input = el.target;
        console.log(input.value);
        setHeight(input.value);
        setHeightinMeter(height/100);
        setBMI(weight/(heightinmeter*heightinmeter).toFixed(1));
    }
    

    
    return  (
        <>
            <main>
                <h1>Project 6: BMI calculator </h1>
                <div>
                   <h3 >My Search</h3>
                   
                    <div>
                        <Form.Label>Weight (kg.): {weight}</Form.Label>
                        <Form.Range min={50} max={200} step={1} onChange={UpdateWeight}></Form.Range>
                    </div>
                    <div>
                        <Form.Label>Height (cm.): {height}</Form.Label>
                        <Form.Range min={100} max={300}  onChange={UpdateHeight}></Form.Range>            
                    </div>
                    <div>
                        Your BMI is. <Badge>{bmi}</Badge>
                    

                    </div>
                   
                </div>
            </main>
        </>
        )  

    
}



export default BMICalculator


