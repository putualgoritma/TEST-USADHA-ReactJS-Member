import React, { useEffect,useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Fragment } from "react";
import {Header,Footer,Spinner} from '../../component'


import { 
    userImage,
} from "../../assets";


function SwitchAccount(){


    return (
        <Fragment>
        <Header carousel={
        <div className="container" style={{
            alignItems: "center"}}>    
            <span style={{fontWeight:'bold', fontSize:16}}>Member Account (Switch Profile)</span>
              <link href="/assets/css/style3.css" rel="stylesheet" stype="text/css" />
                <div className="content"  style={{
               
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>


   
              <div className="tree" style={{width: '300px',overflow: 'auto'}} >
                <ul className="tree" style={{width: '300px'}}>
                    <ul>
                      {/* kiri */}
                      <li>
                        {/* sesuaikan dengan database */}
                        <a href="#"><div className="card" style={{width: '10rem',backgroundColor : '#FFFFFF'}}>
                            <img className="card-img-top" src={userImage} alt="Card image cap" />
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Platinum</p>
                          </div></a>
                       
                      </li>
                      {/* kanan */}
                      <li>
                        {/* sesuaikan dengan database */}
                        <a href="#"><div className="card" style={{width: '10rem',backgroundColor : '#FFFFFF'}}>
                            <img className="card-img-top" src={userImage} alt="Card image cap" />
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Platinum</p>
                          </div></a>
                       
                      
                      </li>
                    </ul>
                 
                </ul>
              </div>
            
            </div>
            <br/>
            <span style={{fontWeight:'bold', fontSize:16}}>Member Account (Edit Profile)</span>
      </div>
        } />
          <Footer/>       
      </Fragment>

      
    );
}

export default SwitchAccount