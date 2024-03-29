import React, { useState } from 'react';
import { connect } from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import {addProduct} from '../../redux/actions/actions.js'

console.log(Date.now())

function Form({addProduct}) {
   const [product, setProduct] = useState({ name: '', price: '', id: '' });

   function handleInputChange(e) {
      e.preventDefault();
      setProduct({ ...product, [e.target.name]: e.target.value });
   }

   const handleSubmit=()=>{
      addProduct({...product,id:Date.now()})
   }

   return (
      <div className='formBg'>
         <div className='inputBox'>
            <label>Nombre: </label>
            <input
               name='name'
               onChange={handleInputChange}
               value={product.name}
            />
         </div>
         <div className='inputBox'>
            <label>Precio:</label>
            <input
               type='number'
               name='price'
               onChange={handleInputChange}
               value={product.price}
            />
         </div>
         <button className='formBtn' onClick={handleSubmit}>¡ADD!</button>
         <img src={Caja} alt='' className='logo' />
      </div>
   );
}

export function mapDispatchToProps(dispactch) {
   return {
      addProduct:function (product) {
         dispactch(addProduct(product))
      }
   }
}

export default connect(null, mapDispatchToProps)(Form);
