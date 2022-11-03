import React from "react";
import { Fragment } from "react";
import {Header,Footer,Spinner} from '../../component'


import { 
    userImage,
} from "../../assets";


function MemberAccount(){


    return (
        <Fragment>
        <Header carousel={
        <div className="container" style={{
            alignItems: "center"}}>    
            <span style={{fontWeight:'bold', fontSize:16}}>Dashboard Member 1 Account 3HU</span>
              <link href="/assets/css/style2.css" rel="stylesheet" stype="text/css" />
                <div className="content"  style={{
               
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>


   
              <div className="tree" style={{width: '300px',overflow: 'auto'}} >
                <ul className="tree" style={{width: '300px'}}>
                  <li>
                    {/* sesuaikan dengan database */}
                    <a href="/SwitchAccount"><div className="card" style={{width: '10rem',backgroundColor : '#FFFFFF'}}>
                        <img className="card-img-top" src={userImage} alt="Card image cap" />
                        <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                        <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                        <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Elite</p>
                      </div></a>
                    <ul>
                      {/* kiri */}
                      <li>
                        {/* sesuaikan dengan database */}
                        <a href="/SwitchAccount"><div className="card" style={{width: '10rem',backgroundColor : '#FFFFFF'}}>
                            <img className="card-img-top" src={userImage} alt="Card image cap" />
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Platinum</p>
                          </div></a>
                       
                      </li>
                      {/* kanan */}
                      <li>
                        {/* sesuaikan dengan database */}
                        <a href="/SwitchAccount"><div className="card" style={{width: '10rem',backgroundColor : '#FFFFFF'}}>
                            <img className="card-img-top" src={userImage} alt="Card image cap" />
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Nama</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>MBR0001</p>
                            <p className="text-info" style={{fontSize: '7px', fontColor: '"#0000FF"', margin: '0px'}}>Platinum</p>
                          </div></a>
                       
                      
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
         
            </div>
      </div>
        } />
          <Footer/>       
      </Fragment>

      
    );
}

export default MemberAccount