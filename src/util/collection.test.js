import  { orderData} from "./collection";
import {ORDER} from "./constants";


test('orderData can order collection by a property ascending ', async () => {
    const data = [
        {id:134, department:"sales", name:"john", age:25},
        {id:202, department:"technology", name:"ali", age:34},
        {id:202, department:"risk", name:"joseph",age:65},
        {id:202, department:"audit", name:"Alina",age:22},
    ];

    const ascendingByage = [
        {id:202, department:"audit", name:"Alina",age:22},
        {id:134, department:"sales", name:"john", age:25},
        {id:202, department:"technology", name:"ali", age:34},
        {id:202, department:"risk", name:"joseph",age:65},
    ];

    const orderBy = { age:ORDER.ASC};
    const orderedData = orderData({data,orderBy});
    expect(orderedData).toStrictEqual( ascendingByage );
});




test('orderData can order collection by a property descending', async () => {
     const data = [
         {id:134, department:"sales", name:"john", age:25},
         {id:202, department:"technology", name:"ali", age:34},
         {id:202, department:"risk", name:"joseph",age:65},
         {id:202, department:"audit", name:"Alina",age:22},
        ];

    const descendingByAge = [
        {id:202, department:"risk", name:"joseph",age:65},
        {id:202, department:"technology", name:"ali", age:34},
        {id:134, department:"sales", name:"john", age:25},
        {id:202, department:"audit", name:"Alina",age:22},
    ];

     const orderBy = { age:ORDER.DESC};
     const orderedData = orderData({data,orderBy});
     expect(orderedData).toStrictEqual(descendingByAge);
});


test('orderData can order collection by a custom order array', async () => {
    const data = [
        {id:134, department:"sales", name:"john", age:25},
        {id:202, department:"technology", name:"ali", age:34},
        {id:202, department:"risk", name:"joseph",age:65},
        {id:202, department:"audit", name:"Alina",age:22},
    ];

    const custom = [
        {id:202, department:"audit", name:"Alina",age:22},
        {id:202, department:"risk", name:"joseph",age:65},
        {id:134, department:"sales", name:"john", age:25},
        {id:202, department:"technology", name:"ali", age:34},
    ];

    const orderBy = { department:["audit","risk","sales","technology"]};
    const orderedData = orderData({data,orderBy});
    expect(orderedData).toStrictEqual(custom);
});




test('orderData can order collection by multiple order by', async () => {
    const data = [
        {id:134, department:"sales", name:"john", age:25},
        {id:202, department:"technology", name:"ali", age:34},
        {id:202, department:"risk", name:"joseph",age:65},
        {id:1, department:"sales", name:"julie", age:25},
        {id:202, department:"audit", name:"Alina",age:22},
        {id:11, department:"technology", name:"mike", age:34},
    ];

    const custom = [
        {id:202, department:"audit", name:"Alina",age:22},
        {id:202, department:"risk", name:"joseph",age:65},
        {id:1, department:"sales", name:"julie", age:25},
        {id:134, department:"sales", name:"john", age:25},
        {id:11, department:"technology", name:"mike", age:34},
        {id:202, department:"technology", name:"ali", age:34},
    ];

    const orderBy = { department:["audit","risk","sales","technology"], id:ORDER.ASC};
    const orderedData = orderData({data,orderBy});
    expect(orderedData).toStrictEqual(custom);
});
