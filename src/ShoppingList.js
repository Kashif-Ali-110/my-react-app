import React from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'react-bootstrap'




function ShoppingCart () {
    
    const ShoppingList = [];
    
    const [shoppingObj, setShoppingObject ] = React.useState([]);

    function  UpdateShoppingObject(el){
        el.preventDefault();
        const form = el.target;
        const input = el.target[0];
        const newItems = [...shoppingObj, input.value];
        setShoppingObject(newItems);
        form.reset();
    }

    

    function Item( {item}){

        return (
            <li>
                {item}
                <button className="delete" onClick={onDelete} id={item} value={item}>x</button>
            </li>
        )
    }
  
    function  onDelete(el){
        
        const deletedItem = el.target.value;
        
        const newItems = shoppingObj.filter((item) => {
            return item !== deletedItem;
          });
        /*
          shoppingObj.splice(index,1);
          const newItems = shoppingObj;*/
          setShoppingObject(newItems);
        
    }

    return  (
        <>
            <div>
                <h1>Project 4: Shopping Cart</h1>
                <div>
                   <h3 >My Shopping</h3>
                   
                    <div>
                        <form onSubmit={UpdateShoppingObject}>
                            <input type='text'  id='add' key={"asdf"}></input>
                            <button  id='send'>Add</button>
                        </form>
                    </div>
                    
                    <ul>

                        { shoppingObj.map((item, index) => (
                            <Item item={item} key={index} onDelete={index}></Item> )) }
                    </ul>
                   
                </div>
            </div>
        </>
        )  

    
}



export default ShoppingCart


