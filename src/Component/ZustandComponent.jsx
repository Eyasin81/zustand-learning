import React from 'react';
import useStore from './useStore';
const ZustandComponent = () => {
   const {count,increase,decrease,reset}=useStore()
   return (
      <div>
         <h1>{count}</h1>
         <button onClick={increase}>Increment</button>
         <button onClick={decrease}>Decrement</button>
         <button onClick={reset}>Reset</button>
      </div>
   );
};

export default ZustandComponent;