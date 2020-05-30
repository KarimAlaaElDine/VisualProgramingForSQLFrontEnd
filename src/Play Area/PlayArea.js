import React,{useContext,useEffect} from 'react';
import './playarea.css';
import globalContext from '../GlobalState';
import Entity from '../Entity/Entity';

function PlayArea(props){ 
    const [gl,setGl]=useContext(globalContext);
    var onBoard=gl.available;
    console.log(onBoard);
    let up=false;
    useEffect(() => {
        let l=gl.Push
   onBoard.forEach(e => {
        
    
        
         // l={...l,[i]:{}}
         // setGl(...gl,{Push:{}});
         console.log(JSON.stringify(e));
         l={...l,[e.name]:{}};
         
    });
    setGl({...gl,Push:l});

        
    }, [])
    
    if(onBoard){
        console.log(JSON.stringify(gl.Push));
        
    return(
        <div id="playarea">
        <ul>{
            onBoard.map((e,i) =>{
             up=!up;
             //console.log(`this is the store: ${gl}`)
              return  <li className="onBoardList"><Entity operation={e} id={i}/></li>
            })
        }</ul>
        <li style={{background:'blue'}} className="function"> Run!</li>
        </div>
    );}
    else{
        return <div></div>
    }
}

export default PlayArea;