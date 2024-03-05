'use client';
import React ,{useState}from 'react';
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from "./item.json";

const page=()=>{
    const [items, setItems] = useState(ItemData);

    const handleAddItem = (newItem) => {
        setItems(OldItems=>[...OldItems, newItem]); 
      };

   return( <main className='container p-4'>
    <NewItem onAddItem={handleAddItem} />
    <ItemList items={items} />
    </main>)
}
export default page;
