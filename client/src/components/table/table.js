import { Table } from 'react-bootstrap';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');
socket.emit('start');
socket.on('ticker', ticker => getResponse(ticker));


function getResponse(response) {
    response.map((item, i) => {
        console.log(item);
    });
    
};





function MyTable({item}){
  return(
  <Table responsive>
  <thead>
    <tr>
      <th>{item}</th>
        <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>
)}
export default MyTable;