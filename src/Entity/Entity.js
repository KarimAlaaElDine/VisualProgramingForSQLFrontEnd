import React from 'react';
import {useContext} from 'react';
import globalContext from '../GlobalState';
import Properties from './Properties';
const Entity = (props)=>{
    const [gl,setGl]=useContext(globalContext);
    const operation=props.operation;
    console.log(`operation: ${JSON.stringify(operation)}`)
    return (
    <div>
        {operation.name}
        {operation.properties.map((e,i)=>{
            return(
                <li><Properties property={e} entity={operation.name} /></li>
            );
        })}

    </div>
    )
}

export default Entity;