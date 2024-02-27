import React from 'react';
import ItemList from "./item-list";

const page=()=>{
   return( <main className='container p-4'>
    <h1 className ='text-3xl font-bold'>Shopping List</h1>
    <ItemList/>
    </main>)
}
export default page;