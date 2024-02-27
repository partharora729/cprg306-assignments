'use client';

import React , {useState} from "react";
import Items from "./items.json";
import Item from "./item";


const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    // const [items, setItems] = useState(itemsData);
    // //  help of chatgpt was used in this. This is the explanation provided When you import data from a JSON file using import itemsData from './items.json';, you are essentially importing the entire content of the JSON file into a variable named itemsData. The JSON data becomes accessible through this variable.
        const sortedItems = [...Items].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
    

    return (
        <div>
            <div className="mr-2"> 
                <button onClick={() => setSortBy('name')} style={{ backgroundColor: sortBy === 'name' ? 'orange' : '' }}>Sort by Name</button>
                <button onClick={() => setSortBy('category')} style={{ backgroundColor: sortBy === 'category' ? 'orange' : '' }}>Sort by Category</button>
            </div>
            <div className="flex">
            <ul className=" w-3/10 mt-5 me-5">
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
            </div>
        </div>
    );
};

export default ItemList;
