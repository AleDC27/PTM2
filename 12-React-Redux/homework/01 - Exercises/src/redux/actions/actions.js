import {ADD_PRODUCT,DELETE_PRODUCT,GET_STORE_NAME} from './types.js'
import axios from 'axios';
import { get } from '@11ty/eleventy/src/TemplateCache.js';

export const addProduct=(product)=>({
type:ADD_PRODUCT,
payload:product
})

export const deleteProduct=(id)=>({
type:DELETE_PRODUCT,
payload:id
});

export function getStoreName(){
    return (dispatch) => {
        return axios.get('http://localhost:3001/store')
          .then((results) => results.data.name
            .then((d) => dispatch({
                type:GET_STORE_NAME,
                payload:d
            }))
            .catch(err => console.log(err)))
}
}