import _ from 'lodash';
import {ORDER} from "./constants";


const transformOrder = ({key,order})=>{
    if(Array.isArray(order)){
        return { key: item => {
                if(!item.hasOwnProperty(key)){
                    throw new Error(`object: ${item} can not be compared as it does not includes key ${key}`);
                }
                return order.findIndex(value=>value.toLowerCase()===item[key].toLowerCase());
            }, order:ORDER.ASC}
    }else{
        return {key,order}
    }
}


export const orderData = ({data, orderBy}) =>{
    if(!orderBy){
        return data;
    }
    const transformedOrderBy = orderBy.map(item=> transformOrder(item));
    return  _.orderBy(  data,
                        transformedOrderBy.map(item=>item.key),
                        transformedOrderBy.map(item=>item.order));
}


export default {orderData};
