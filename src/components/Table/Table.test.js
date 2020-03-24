import React from "react";
import {render, waitForElement, act} from '@testing-library/react'
import {Table} from "./Table";
import renderer from "react-test-renderer";



const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        isUniqueId: true,
        width: 200,
        unit: 4

    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 50,
        unit:6
    },
];

const data = [ {id:1, name:"Ali Haydar Detmer Acar"}];

test('it does not render if column information not provided', async () => {
    expect( ()=>render(<Table />)).toThrowError("Empty or null table column data, can not render table");
});


test('it creates table when column and data provided as property', async () => {
    const table = renderer.create( <Table data={data} columns={columns}/>)
        .toJSON();
    expect(table).toMatchSnapshot();
});



