import React , {useState} from 'react'



const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) =>
    {
        e.preventDefault();
        const newEntry = { email: email , password: password };
        setAllEntry([...allEntry , newEntry]);
        console.log(allEntry);
    }

    return (
       <>
        <div className="container">
            <h1><center>Login Form</center></h1>
            <form action="" onSubmit={submitForm}>
                <div className="mb-3">
                <label htmflFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
                autoComplete= "off" value={email}
                onChange = {(e) => setEmail(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="password" autoComplete= "off" value={password}
                onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
       

        <div class="d-flex justify-content-center">
            {
                allEntry.map((curElem) => 
                {
                    return(
                        <div className="container" className="ms-1">
                            <br/><br/>
                            <h3><b>User Details</b></h3>
                            <h4>Username :- {curElem.email}</h4>
                            <h4>Password :- {curElem.password}</h4>
                        </div>
                    )

                })
            }
        </div>
       

       </>
    )
}

export default BasicForm
