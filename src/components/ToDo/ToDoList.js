import React, {useState} from 'react';

const ToDoList = () => {

    const [currentItem, setCurrentItem] = useState(null);
    const [itemList, setItemList] = useState([]);

    const handleChange = (e) => {
        setCurrentItem(e.target.value);
    };

    const addItemToList = (e) => {
        setItemList([...itemList, {item: currentItem, key: Date.now()}]);
        setCurrentItem("");
    };

    return (
        <div className='App-header'>
            <div className='wrapper'>
                <div className='Input-wrapper'>
                    <input value={currentItem} onChange={handleChange}/>
                    <button onClick={addItemToList}>Add</button>
                </div>
                
                <div>
                    {itemList.map(itemObj => {
                    return <p className='border'>{itemObj.item}</p>
                    })}
                </div>

            </div>
        </div>
    );
};

export default ToDoList;