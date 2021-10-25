import React from 'react'
import { useState } from 'react';

function Home() {
    const [Num, setNum] = useState(0)
    return (
        <>



<button onClick={()=>setNum(Num+1)}>INcrment</button>
            <button onClick={()=>setNum(Num-1)}>DEcrment</button>
        </>
    );
};

export default Home;
