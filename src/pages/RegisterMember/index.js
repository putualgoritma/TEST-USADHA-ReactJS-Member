import React, { Fragment, useState } from 'react'
import { Footer, Header } from '../../component'
import Swal from 'sweetalert2'


function RegisterMember() {
   
      // form data sementara
      const [form, setForm] = useState({
            name : null,
            phone : null,
            email : null,
            address : null,
            register : '2022-10-14',
      })

      // proses pengiriman data
const inputHandler = () =>{
      if(form.name == null || form.phone == null || form.email === null || form.address == null || form.register == null)
      {
            Swal.fire(
                  'Data Tidak Lengkap',
                  'Cek kelengkapan data terlebih dahulu',
                  'warning'
                )
      }
      else{
      const data = [
            {  name : form.name,
                  phone : form.phone,
                  email : form.email,
                  address : form.address,
                  register : form.register,}
      ]
      console.log(data);
}
}
      const onChangeForm = (name, value) => {
        setForm({
              ...form,
              [name] : value
        })
     console.log(form)
    }
 
      return (
            <Fragment>
                  <Header/>
                    <div className="container">
                        <div className="post-title">
                            <h3 style={{color: 'black'}}>
                                <strong>
                                    <a>Register Member</a>
                                </strong>
                            </h3>
                        </div>
                                         
                        <div className="col-md-12">
                              <div className="row">
                                    <div className="col-md-2">
                                    </div>
                                    <div className="col-md-8">
                               
                                          <div className="col-md-12">
                                        
                                          <div className="mb-3">
                                                      <label htmlFor="exampleFormControlInput2" className="form-label">Register</label>
                                                      <input type="date" className="form-control" id="exampleFormControlInput2" value={typeof form.register !== 'object' ? form.register :0} onChange={(value) => onChangeForm('register', value.target.value)}/>
                                                </div>       
                                                <div className="mb-3">
                                                      <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
                                                      <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Your name" onChange={(value) => onChangeForm('name', value.target.value)}/>
                                                </div>
                                                <div className="mb-3">
                                                      <label htmlFor="exampleFormControlTextarea6" className="form-label">Address</label>
                                                      <textarea className="form-control" id="exampleFormControlTextarea6" rows="3" onChange={(value) => onChangeForm('address', value.target.value)} ></textarea>
                                                </div>
                                                <div className="mb-3">
                                                      <label htmlFor="exampleFormControlInput5" className="form-label">Phone number</label>
                                                      <input type="number" className="form-control" id="exampleFormControlInput5" placeholder="082xxxxx" onChange={(value) => onChangeForm('phone', value.target.value)} />
                                                </div>
                                            
                                                <div className="mb-3">
                                                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(value) => onChangeForm('email', value.target.value)} />
                                                </div>
                                                <div className="login">
                                                      <div className="mb-3">
                                                      <button   className="button1" type="submit" onClick={()=>{inputHandler()}} >Register</button>
                                                      </div>     
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-2">
                                    </div>
                                    </div>
                                    </div>                         
                            
                              </div>
             
                  <Footer/>
            </Fragment>
      )
}

export default RegisterMember
