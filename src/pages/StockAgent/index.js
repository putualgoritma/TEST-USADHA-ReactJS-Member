import React, { Fragment, useEffect, useState } from 'react'
import {FaCreditCard, FaRegCreditCard} from "react-icons/fa";
import { useHistory } from 'react-router';
import { Footer, Header, Spinner } from '../../component';
import { Rupiah } from '../../helper/Rupiah';
import API from '../../services';
import { Source } from '../../services/Config';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';


import { 
    userImage,
} from "../../assets";
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

  
//   const Input = () => {
//     const [qty, setQty] = useState(1)
//     const [show, setShow] = useState(true)
    
//     var myloop = [];
//     for (let index = 0; index < qty; index++) {
//         myloop.push(
//         <tr>
//         <td>{index+1}</td>
//         <td><input type="text" /></td>
//         <td><input type="text" /></td>
//         </tr>
//         )
        
//     }

//     return <div>
//                      <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>No</th>
//           <th>Produk</th>
//           <th>Quantity</th>
//         </tr>
//       </thead>
//       <tbody>
//         {myloop}
       
//       </tbody>
//     </Table>
   
//     <button onClick={() => { setQty(qty + 1); setShow(true) }}>Add input</button>
//     {qty>1 &&
//     <button onClick={() => { if(qty>1){setQty(qty - 1); setShow(true)} }}>delete input</button>
// }
//     </div>
//   };
  
//   const Form = () => {
//     const [inputList, setInputList] = useState([]);
  
//     const onAddBtnClick = event => {
//       setInputList(inputList.concat(<Input key={inputList.length} />));
//     };
//     <button onClick={onAddBtnClick}>Add input</button>

//     return(
//         <inputList/>
//     )
    
//   };

function StockAgent(){
    const history = useHistory()
    const [USER, setUSER] = useState(null)
    const [accountCash, setAccountCash] = useState(null);
    const [loading, setLoading] = useState(true);
    const [point, setPoint] = useState(0);
    const [page, setPage] = useState('1');
    const [TOKEN, setTOKEN] = useState(null);
    const [agentName, setAgentName] = useState("");

    const { SearchBar } = Search;
 const [product, setProduct] = useState([]);
 const [quantity, setQuantity] = useState([]);

//  data Agent
 const agents = [{'id':'1','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart'},{'id':'2','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'3','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'4','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'5','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'6','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'7','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'8','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' }
,{'id':'9','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'10','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'11','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'12','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'13','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'14','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'15','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },
{'id':'16','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'17','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'18','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'19','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'20','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'21','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'22','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'23','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },
{'id':'24','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'25','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'26','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'27','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'28','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'29','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'30','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' },{'id':'31','code' : 'CST0000', 'name' : 'budi', 'adress':'tabanan', 'type':'mart' }
];

//setting kolom
const columns = [{
  dataField: 'no',
  text: 'No.',
  formatter: (cell, row, rowIndex, formatExtraData) => {
    return rowIndex + 1;}
  }, 
{
  dataField: 'code',
  text: 'Code',
},

{
  dataField: 'name',
  text: 'Nama',
  searchable : false,
},
{
  dataField: 'adress',
  text: 'Alamat',
  searchable : false,
}, {
  dataField: 'type',
  text: 'Type',
  searchable : false,
}, {
  dataField: 'add',
  text: 'Select',
  formatter: (rowContent, row) => {
    return (    
      <td> <Button variant="primary" onClick={()=>{setPage('1'); onChangeForm('agent_id', row.id); setAgentName(row.name)}}>select</Button></td>
    )
  },
  searchable : false,
}];

// data form data sementara
  const [form, setForm] = useState({
        register : "2022-10-14",
        USER_ID : null,
        code : "TRS0001",
        agent_id : null,
  })

  // proses pengiriminan
  const inputHandler =()=>{
    let checkArray = true;
    for(let i =0; i< qty ;i++){
      if(quantity[i] == null){
        checkArray = false;
      }
      else if(quantity[i] == ""){
        checkArray = false;
      }
      if(product[i] == null){
        checkArray = false;
      }
      else if(product[i] == ""){
        checkArray = false;
      }
    }

 
    if(form.register == "" || form.USER_ID == "" || form.code =="" || form.agent_id == ""){
      Swal.fire(
        'Data Tidak Lengkap',
        'Cek kelengkapan data terlebih dahulu',
        'warning'
      )
    }

    if(checkArray == false){
      Swal.fire(
        'Data Tidak Lengkap',
        'Cek kelengkapan data terlebih dahulu',
        'warning'
      )
    }
    
    else{
    const data =[{
      register : form.register,
      USER_ID : form.USER_ID,
      code : form.code,
      agent_id : form.agent_id,
      quantity : quantity,
      product : product,
    }
    ];
    console.log(data);
  }

  }
  const onChangeForm = (name, value) => {
    setForm({
          ...form,
          [name] : value
    })
 console.log(form.register)
}
const [qty, setQty] = useState(1)
const [show, setShow] = useState(true)

var myloop = [];
for (let index = 0; index < qty; index++) {
    myloop.push(
    <tr key= {index} >
    <td>{index+1}</td>
    {/* data Product */}
    <Form.Group>
        <Form.Control
          as="select"
          onChange={e => {
            console.log("e.target.value", e.target.value);
            onchangeProduct(e.target.value,index)
          }}
        >
         <option value="">Pilih Produk</option>
          <option value="1">Minyak Belog 20ml</option>
          <option value="2">Minyak Belog 30ml</option>
          <option value="3">Minyak Belog 100ml</option>
        </Form.Control>
      </Form.Group>

    <td><input type="number"  onChange={(value) => {onchangeQty(value,index);}}/></td>
    </tr>
    )
    
}
// menampung data product sementara
  const onchangeProduct = (val, index) => {
    let temp = product;
    temp[index] = val;
    setProduct(temp);
    console.log(temp);
  };
  // menampung data quantity sementara
  const onchangeQty = (val, index) => {
    let temp = quantity;
    temp[index] = val.target.value;
    setQuantity(temp);
    console.log(temp);
  };
    return (
      <Fragment>
            <Header/>
                  {/* ketika memilih Agent maka page = 2 dan page = 1 ketika menginput data */}
      {page == '1' &&

            <div id="sns_content" className="wrap layout-m">
                <div className="container">
                    <div className="post-title">
                        <h3 style={{color: 'black'}}>
                            <strong>
                                <a>Transfer Stok Agen</a>
                            </strong>
                        </h3>
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <div className ="col-md-2"></div>
                            <div className ="col-md-8">
                            <span style={{fontWeight:500, fontSize:13}}>Register</span>
                                <div className="mb-3">
                                    <input className="form-control" type="date" style={{padding:20}}  value={typeof form.register !== 'object' ? form.register :0}  onChange={(value) => {onChangeForm('register', value.target.value);}}/>
                                </div>
                            </div>
                            <div className ="col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className ="col-md-2"></div>
                            <div className ="col-md-8">
                            <span style={{fontWeight:500, fontSize:13}}>Kode</span>
                                <div className="mb-3">
                                    <input className="form-control" type="text" style={{padding:20}}  value={typeof form.code !== 'object' ? form.code :0}  onChange={(value) => {onChangeForm('code', value.target.value);}}/>
                                </div>
                            </div>
                            <div className ="col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className ="col-md-2"></div>
                            <div className ="col-md-8">
                            <span style={{fontWeight:500, fontSize:13}}>Agen Yang DItuju</span>
                                <div className="mb-3">
                                    <input className="form-control" readOnly type="text" style={{padding:20}}  value={typeof form.agent_id !== 'object' ? form.agent_id+" | "+agentName :""}  onChange={(value) => {onChangeForm('agent_id', value.target.value);}}/>
                                </div>
                            </div>
                            <div className ="col-md-2"></div>
                        </div>
                    </div>
                   
      
                    <div className="col-md-12">
                    <div style={{   display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', }}>
                            <Button variant="success" className="button1" onClick={()=>{setPage('2')}} type="button">Cari Agent</Button>
                        </div>  
                        <br/>
              
                    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th style={{ paddingRight : 50 }}>Produk</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {myloop}
       
      </tbody>
    </Table>
    
   
    <button onClick={() => { setQty(qty + 1); setShow(true) }}>Add input</button>
    {qty>1 &&
    <button onClick={() => { if(qty>1){setQty(qty - 1); setShow(true); quantity.splice(qty-1, 1); product.splice(qty-1, 1);} }}>delete input</button>
}
</div>
    

                    <div className="login">
                        <div className="mb-3">
                            <button  className="button1" type="button" onClick={()=>{inputHandler()}}>Transfer</button>
                        </div>     
                    </div>
                </div>
            </div>
              
         
      }


      {/* ketika memilih Agent maka page = 2 dan page = 1 ketika menginput data */}
      {page == '2' &&
                  <div id="sns_content" className="wrap layout-m">
                <div className="container">

              
                        
                            <Button variant="danger" className="button1" type="button" onClick={()=>{setPage('1')}}>Kembali</Button>
                     
         




        
 <ToolkitProvider
//  bisa diganti asalkan unik
  keyField="id"
  data={ agents }
  columns={ columns }
  search

>
  {
    props => (
      <div>
        <h3>Cari :</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
          // expandRow={ expandRow }
          keyField='id'pagination={ paginationFactory() }
        />
      </div>
    )
  }
</ToolkitProvider>
      </div>
    
  



 </div>

      }
        

        <Footer/>
        </Fragment>
    );
}
export default StockAgent