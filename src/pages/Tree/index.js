import React, { useEffect,useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Fragment } from "react";
import {Header,Footer,Spinner} from '../../component'
import Table from 'react-bootstrap/Table';

import { 
    userImage,
} from "../../assets";
import { IconButton, Tooltip} from "@mui/material";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Tree(){

  // function untuk hover
  const textHover =(name, code,status)=>{
    return <div style={{whiteSpace: 'pre-line', fontSize:12,}}>{'Name : '+name+' \n Code :'+code+'\n Status :'+status}</div>;
  }

    return (
        <Fragment>
        <Header/>


        <div className="container align-items-center justify-content-center" style={{
            alignItems: "center"}}>  
            <span style={{fontWeight:'bold', fontSize:16}}>Visualisasi Pohon Jaringan Dari Level Ke-0(Level 3)</span>  
            
              <link href="/assets/css/style2.css" rel="stylesheet" stype="text/css" />
                <div className="content"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
              <div className="tree" style={{width: '900px', overflow: 'auto'}} >
                <ul className="tree" style={{width: '900px'}}>
                <li>
                  {/* aksi Button Row Up */}
                <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-up"></i>
                                       </div></a>
                    <ul>
                  <li>

               {/*  value untuk hover */}   
                  <Tooltip title={textHover("nama1","MBR0001","Elite")}>
                   {/* sesuaikan dengan database */}
                    <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                        <img className="card-img-top" src={userImage} alt="Card image cap" />
                        <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                        <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                        <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Elite</p>
                      </div></a>
                      </Tooltip>
                    <ul>
                      {/* kiri */}
                    
                   {/*  value untuk hover */}
                   <li>
                      <Tooltip title={textHover("nama1","MBR0001","Platinum")}>
                       {/* sesuaikan dengan database */}
                        <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                            <img className="card-img-top" src={userImage} alt="Card image cap" />
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Platinum</p>
                          </div></a>
                          </Tooltip>
                        <ul>
                        
                       {/*  value untuk hover */}
                       <li>
                          <Tooltip title={textHover("nama2","MBR0002","gold")}>
                           {/* sesuaikan dengan database */}
                            <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <img className="card-img-top" src={userImage} alt="Card image cap" />
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0002</p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Gold</p>
                              </div></a>
                              </Tooltip>
                            <ul>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nama5","MBR0005","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0005</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
      
                              {/* aksi Button Row Down*/}
                              <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                                
                                  </li>
                                  </ul>
                              </li>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nam6","MBR0006","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0006</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
                          
                              {/* aksi Button Row Down*/}
                              <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                              
                                  </li>
                                  </ul>
                              </li>
                            </ul>
                          </li>
                        
                       {/*  value untuk hover */}
                       <li>
                          <Tooltip title={textHover("nama3","MBR0003","Gold")}>
                           {/* sesuaikan dengan database */}
                            <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <img className="card-img-top" src={userImage} alt="Card image cap" />
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0003</p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Gold</p>
                              </div></a>
                              </Tooltip>
                            <ul>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nama4","MBR0004","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0004</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
                          
                              {/* aksi Button Row Down*/}
                              <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                         
                                  </li>
                                  </ul>
                              </li>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nama8","MBR0008","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0008</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
                            
                              {/* aksi Button Row Down*/}
                              <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                               
                                  </li>
                                  </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      {/* kanan */}
                    
                   {/*  value untuk hover */}
                   <li>
                      <Tooltip title={textHover("nama2","MBR0001","platinum")}>
                       {/* sesuaikan dengan database */}
                        <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                            <img className="card-img-top" src={userImage} alt="Card image cap" />
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Platinum</p>
                          </div></a>
                          </Tooltip>
                        <ul>
                        
                       {/*  value untuk hover */}
                       <li>
                          <Tooltip title={textHover("nama2","MBR0002","Gold")}>
                           {/* sesuaikan dengan database */}
                            <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <img className="card-img-top" src={userImage} alt="Card image cap" />
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0002</p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Gold</p>
                              </div></a>
                              </Tooltip>
                            <ul>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nama5","MBR0005","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0005</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
                            
                                {/* aksi Button Row Down*/}
                                <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                                
                                  </li>
                                  </ul>
                              </li>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nama6","MBR0006","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0006</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
                           
                              {/* aksi Button Row Down*/}
                              <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                              
                                  </li>
                                  </ul>
                              </li>
                            </ul>
                          </li>
                        
                       {/*  value untuk hover */}
                       <li>
                          <Tooltip title={textHover("nama3","MBR0003","Gold")}>
                           {/* sesuaikan dengan database */}
                            <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <img className="card-img-top" src={userImage} alt="Card image cap" />
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0003</p>
                                <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Gold</p>
                              </div></a>
                              </Tooltip>
                            <ul>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nama4","MBR0004","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0004</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
                        
                              {/* aksi Button Row Down*/}
                              <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                            
                                  </li>
                                  </ul>
                              </li>
                            
                           {/*  value untuk hover */}
                           <li>
                              <Tooltip title={textHover("nama8","MBR0008","Silver")}>
                               {/* sesuaikan dengan database */}
                                <a><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                    <img className="card-img-top" src={userImage} alt="Card image cap" />
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama </p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0008</p>
                                    <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Silver</p>
                                  </div></a>
                                  </Tooltip>
                                  <ul>
                                  <li>
                            
                              {/* aksi Button Row Down*/}
                              <a href="#"><div className="card" style={{width: '5rem',backgroundColor : '#FFFFFF'}}>
                                <i style={{ fontSize : 30, marginBottom : 30 }} className="fa fa-arrow-down"></i>
                                       </div></a>
                              
                                  </li>
                                  </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                </li>
                </ul>
              </div>
         
            </div>
<br></br>
<div className="container">
<span style={{fontWeight:'bold', fontSize:16}}>Info Jaringan</span>
            <Table striped bordered hover>
      <thead>
        <tr>
        <td colSpan={2}><p style={{fontWeight:'bold', fontSize:24, textAlign : 'center'}}>Info Jaringan</p></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jaringan :</td>
          <td>Mark</td>
         
        </tr>
        <tr>
          <td>Type :</td>
          <td>Jacob</td>
       
        </tr>
        <tr>
          <td>Total Level :</td>
          <td>Jacob</td>
        
        </tr>
        <tr>
          <td>Member (Kiri) :</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>Member (Kanan) :</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>Member (Generasi 1) :</td>
          <td>Jacob</td>
        </tr>
      </tbody>
    </Table>
    </div>

    <br></br>
<div className="container">
<span style={{fontWeight:'bold', fontSize:16}}>Pairing Tunggu</span>
            <Table striped bordered hover>
      <thead>
        <tr>
        <td>Kanan</td>
          <td>Kiri</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><button>165 BV</button></td>
          <td><button>0 BV</button></td>
         
        </tr>
        <tr>
          <td>Total Pairing :</td>
          <td>Jacob</td>
       
        </tr>
        <tr>
          <td>Total Nilai :</td>
          <td>Jacob</td>
        
        </tr>
        <tr>
          <td>Total Hari Ini :</td>
          <td>Jacob</td>
        </tr>
       
      </tbody>
    </Table>
    </div>


      </div>



       
          <Footer/>       
      </Fragment>

      
    );
}

export default Tree