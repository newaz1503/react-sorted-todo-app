import { useState } from 'react';
import './assets/styles/Global.css';
import Fruits from './components/Fruits';
function App() {
  const [fruit, setFruit] = useState("");
  const [fruits, setFruits] = useState(['apple', 'orange', 'banana', 'mango', 'jackfruit']);

  const addFruits = () => {
    setFruits([...fruits, fruit]);
    setFruit('');
  }

  return (
    <div className="container">
      <h2 className='head'>Add items with ascending order</h2>
       <div className='wrapper'>
            <Fruits fruits={fruits}  />
        <div className='input-field'>
            <input type='text' placeholder='Enter fruit name' value={fruit} onChange={(e) => setFruit(e.target.value)} required />
            <button type='button' className='btn' onClick={addFruits}>Add Item</button>
        </div>
       </div>
    </div>
  );
}

export default App;
