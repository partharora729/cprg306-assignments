'use client';
import React ,{useState}from 'react';
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from "./item.json";
import MealIdeas from './meal-ideas';

const page=()=>{
    const [items, setItems] = useState(ItemData);
    const handleAddItem = (newItem) => {
        setItems(OldItems=>[...OldItems, newItem]); 
      };
    const [selectItemName,SetSelectItemName] =useState('chicken');

    const handleItemSelect = (itemName) => {
        if (typeof itemName === 'string') {
            const cleanedItemName = itemName.split(", ")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
            SetSelectItemName(cleanedItemName);
        } else {
            console.error('Item name is not a string:', itemName);
        }
    };
    



    return (
        <main className='container p-4'>
            <div className='flex'>
                <div className='flex-1'>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList onItemSelect={handleItemSelect} items={items} />
                </div>
                <div className>
                    <MealIdeas ingredient={selectItemName} />
                </div>
            </div>
        </main>
    );
    
}
export default page;
