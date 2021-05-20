import React from 'react';
import ProductJSON from "./Product.json";




const BurgerList = (props) =>{
  
  
  function addToCartClickHandler(cartItems){
    const updateCartItems = props.setCartItems;
    const cartItemsProps = props.cartItems;
    updateCartItems(() => [...cartItemsProps, cartItems]);
    }

  const productData =  ProductJSON.result[props.selectedList]
  const productList = () =>{
    return(
      productData.subItemsData.subItems.map(function(productitem){
        return(
            
          <div className="card2 mb-3 mt-1 mx-auto" key={productitem.name}>
            <div className="row g-0">
              <div className="pizzalistleft col-md-8">
               <div className="card-body2">
                <h5 className="card-title mb-1">{productitem.name}</h5>
                 <p className="card-text mb-1"><small className="text-muted"><b>₹{productitem.price}</b></small></p>
                 <p className="card-text mt-0">{productitem.description}</p>
                 <button type="button" className="btn btn-danger" onClick={() => addToCartClickHandler(productitem)}>Order Now</button>
               </div>
              </div>
            <div className="pizzalistright col-md-4">
               <img src={productitem.image} alt="tomato pizza" className="pizzalistmg my-4"/>
            </div>
          </div>
          </div>
         
        );
      })
        
    );
  }
  return(
    
    
    
    props.selectedList!=2?(
      <>
           <nav className="navbar2">
             <div className="text-center w-100 text-light d-flex" >
              <div className="w-100 mt-1 mb-1 me-5">
               <h5>{productData.subItemsData.name}</h5>
              </div>
             </div>
           </nav>
           {productList()}
           
           </> ):""
   
  );
}
    
       
     
export default BurgerList;