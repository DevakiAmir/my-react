import {useRef, useState} from "react";
const Login = () => {
    let emailid = useRef("");
    let password = useRef("");
    let [message, setMessage] = useState("Enter Login Details");

    const loginCheck =(obj)=>{
        obj.preventDefault();
        let email = emailid.current.value;
        let pass = password.current.value;
        setMessage("Please Wait Authenticating ...");

        fetch("http://localhost:1234/account")
        .then(response => response.json())
        .then(allaccount =>{
            let success = allaccount.filter((account,index)=>{
                if(account.email === email && account.password === pass){return account;}
                
            })

            if(success.length>0)
            {
                setMessage("Success","Redirecting ...");
                localStorage.setItem("userid",success[0].id);
                localStorage.setItem("usertype",success[0].type);
                localStorage.setItem("name", success[0].fullname);
                window.location.reload();
            }
            else{
                setMessage("Fail ! Invalid Email or Password");
            }
            console.log( success );
        })
    }
    
    return (
        <div className="container" >
            <h6 className="m-4 text-center mt-5"> {message}</h6>
            <div className="card col-sm-4 mx-auto shadow p-3 mb-5">
                <div className="card-header bg-danger text-light">
                    <i className="fa fa-lock">  </i> Login
                </div>
                <div className="card-body">
                    <p>Email Id</p>
                    <input className="form-control" type="text" ref={emailid}></input>
                    <p className="pt-3">Password</p>
                    <input className="form-control " type="text" ref={password}></input>
                </div>
                <div className="card-footer text-center mt-3">
                    <button className="btn btn-info" onClick={loginCheck}>Login <i className="fa fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
};

export default Login;