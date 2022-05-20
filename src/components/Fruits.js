import React from 'react';
import Fruit from './Fruit';
const Fruits = ({fruits}) => {
    return (
        <ul className='items'>
           {fruits.sort().map((fruit, index) => (
               <Fruit fruit={fruit.toLowerCase()} key={Math.random()} />
            ))}
        </ul>
    );
};
export default Fruits;