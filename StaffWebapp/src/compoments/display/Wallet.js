import Table from 'react-bootstrap/Table';

function Wallet(){
    return(
        <>
         <Table striped bordered hover variant="dark">
      <thead >
        <tr>
          <th>รายได้ทั้งหมด</th>
          <th>จำนวนงานเสร็จสิ้นทั้งหมด</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h1>895.40</h1></td>
          <td><h1>10</h1></td>
         
        </tr>
     
      </tbody>
    </Table>
                    
         
        </>
    )
}
export default Wallet;