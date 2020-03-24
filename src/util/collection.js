import _ from 'lodash';
import {ORDER} from "./constants";

const transformOrder = ([key,value])=>{
    if(Array.isArray(value)){
        return  {
                key: item => {
                    if(!item.hasOwnProperty(key)){
                        throw new Error(`object: ${item} can not be compared as it does not includes key ${key}`);
                    }
                    return value.findIndex(orderValue=>orderValue.toLowerCase()===item[key].toLowerCase());
                 },
                value}
    }else{
        return {key,value}
    }
}


export const orderData = ({data, orderBy}) =>{
    if(!orderBy){
        return data;
    }
    const transformedOrderBy = Object.entries(orderBy).map(item => transformOrder(item));
    return  _.orderBy(  data,
                        transformedOrderBy.map(item=>item.key),
                        transformedOrderBy.map(item=>item.value));
}


export default {orderData};
