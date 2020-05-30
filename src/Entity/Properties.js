import React, { useState } from 'react';
import {useContext} from 'react';
import globalContext from '../GlobalState';
const Property= (props)=>{
    let entity=props.entity;
    let property=props.property;
    const [cont,setCont]= useContext(globalContext);

    const [value, setValue]=useState('');
    const [used, setUsed]=useState(false);

    let handleChange=(event) =>{
        setValue(event.target.value);
        let nw=cont.Push
        var Ent = Object.keys(nw)
                       .filter(userName => nw[userName]===entity)
        
        console.log(`nw: ${JSON.stringify({...entity.value,[property]:value})}`)
        let pre={...cont, Push:{...nw,[entity]:{...[entity.value],[property]:value}}};

        setCont(pre);
        console.log(JSON.stringify(pre));
        console.log(JSON.stringify(cont));
       // nw={...nw,[property]:event.target.value};
        //nw={...nw,[property]:"30"}
      //  console.log(nw);
      // setCont(...cont,Push[0]);
    }
    let Checkbox= (event) =>{
        
        setUsed(!used);
        console.log(`checkbox value: ${event.target.value}`);
    }

    return(
        <form>
        <label>
          {property+': \n'}
          <input style={{width:"30%"}} type="text" value={value} onChange={handleChange} />
        </label>
        <input type="checkbox" value={used} onChange={Checkbox} />
      </form>
    )
}
export default Property;