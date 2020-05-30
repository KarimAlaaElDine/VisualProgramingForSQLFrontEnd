import {createContext} from 'react';

const globalContext= createContext([{
    available:[],
    databases:[],
    Entities:[],
    Push:{}
},
obj => obj]);


export default globalContext;