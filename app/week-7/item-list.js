'use client';

import React , {useState} from "react";
import Item from "./item";


const ItemList = ({items, onItemSelect}) => {
    
    const [sortBy, setSortBy] = useState('name');
    // const [items, setItems] = useState(itemsData);
    // //  help of chatgpt was used in this. This is the explanation provided When you import data from a JSON file using import itemsData from './items.json';, you are essentially importing the entire content of the JSON file into a variable named itemsData. The JSON data becomes accessible through this variable.
        const sortedItems = items.slice().sort((a, b) => {
            if (sortBy === 'name' && a && b && a.name && b.name) {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'category'  && a && b && a.name && b.name) {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
        const handleItemClick = (itemName) => {
            onItemSelect(itemName); 
        };
    

    return (
        <div>
            <div className="flex items-center mt-4 mb-0">
            <p className="mr-2"> Sort By :</p>
            <div className> 
                <button className="mr-2 p-3" onClick={() => setSortBy('name')} style={{ backgroundColor: sortBy === 'name' ? 'orange' : '' }}>Sort by Name</button>
                <button className="p-3"onClick={() => setSortBy('category')} style={{ backgroundColor: sortBy === 'category' ? 'orange' : '' }}>Sort by Category</button>
            </div>
            </div>
            <div className="flex">
            <ul className="mt-5 me-5" style={{ width: '45%' }}>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}  onSelect={() => handleItemClick(item.name)} />
                ))}
            </ul>
            </div>
        </div>
    );
};

export default ItemList;
