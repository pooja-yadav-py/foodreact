import React, { useState } from 'react';
import BurgerList from './FoodItems';
import ProductJSON from './Product.json';
import '../index.css';


const Home = (props) => {
  
  //const [selectedList,updatedSelectedList]=useState(2);

  const showPizzaItems = (selected) =>{
    
    props.updatedSelectedList(selected);
  }
    return(
        <>
        {props.selectedList==2 &&
        <div className="container d-flex justify-content-center">
          <div className="card my-3 me-3" style={{width: '11rem'}} onClick={() => showPizzaItems(0)}>
           <div className="outerDiv"> 
            <div className="innerdiv">
              <img src={ProductJSON.result[0].image} className="card-img-top" alt="pizza" />
            </div>
            <div className="card-body ">
                <p className="card-text mt-1 ">{ProductJSON.result[0].name}</p>
              </div>
            </div>
          </div>
        
         <div className="card my-3" style={{width: '11rem'}} onClick={() => showPizzaItems(1)}>
         <div className="outerDiv1"> 
          <div className="innerdiv1">
              <img src={ProductJSON.result[1].image} className="card-img-top" alt="image" />
          </div>
          <div className="card-body">
                <p className="card-text mt-1">{ProductJSON.result[1].name}</p>
            </div>
            </div>
          </div>
       </div>
        }
       {!props.cartOpen && <BurgerList selectedList={props.selectedList} cartItems={props.cartItems} setCartItems={props.setCartItems} />}
        
     </>
    );
}

export default Home;