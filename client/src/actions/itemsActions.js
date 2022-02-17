import res from 'express/lib/response';
import {GET_ITEMS,ADD_ITEMS,DELETE_ITEM}from '../actions/types';

export const getITems = () =>{
    return {
        type:GET_ITEMS,
        
    }
}