import { read } from 'fs'
import React from 'react'

const Login = () => {
    const [input,setInput] = new useState(

        {
            
            "email": "",
            "pssword": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

const read = () => {
    console.log(input)
    axios.post("http://localhost:3006/api/signin",input).then(
        (Response) => {
            console.log(Response.data)
            if (Response.data.status == "success") {
                alert("success")
                setInput({

                    
                    "email":"",
                    "pssword":""
                })

            } else {

            }
        }
    )
    }   
  return (
    <div>
         
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name='email' value={input.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">password</label>
                            <input type="password" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={read}>login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login