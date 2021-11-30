import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');
socket.emit('start');

function MyTable(){

const [tickers,setTicker ] = useState([{}]);
const [tickerName, setTickerValue] = useState('');
const [tickerExchnge, setTickerExchange] = useState(0);


useEffect(() =>{
    socket.on('ticker',setValue);
},[]);


function setValue(ticker){
    setTicker(ticker);  
} 

//console.log(tickers);
/* tickers.forEach(el=>{
  for (let name in el){
      console.log(name)
  }
}); */


return( 
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
    {tickers.map((t, index) => (
        <th key={index}>{Object.keys(t)[index]}</th>
      ))}
    </tr>
  </thead>
  <tbody>
  
    {tickers.map((t, index) =>{
     // console.log(t);
    //  console.log(index);
      for (let key of Object.values(t)){
          //console.log(Object.values(t)[index]);
      return (
              <tr key={index}>
              {tickers.map((t, index) =>{
              // console.log(t);
             //  console.log(index);
             (
              <td key={index}>{Object.values(t)}</td>
            )
               for (let key of Object.values(t)){
                   console.log(Object.values(t)[1]);
               return (
                       <td key={index}>{Object.values(t)[index]}</td>
                     )
               } 
             } 
             )}</tr>  
            )
      }  
    } 
    )}
  </tbody>
</Table>

)}

export default MyTable;