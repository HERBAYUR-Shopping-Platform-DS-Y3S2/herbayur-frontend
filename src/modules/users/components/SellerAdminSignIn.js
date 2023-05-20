import React from 'react'
import './SellerAdminSignIn.css'
import axios from 'axios';
import { useEffect } from 'react';

export default function SellerAdminSignIn() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [decodedUserType, setDecodedUserType] = React.useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const encodedUserType = queryParams.get('data');
    const decodedUserType = decodeURIComponent(encodedUserType);
    console.log(decodedUserType);
    setDecodedUserType(decodedUserType);
    
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // JavaScript for disabling form submissions if there are invalid fields
    (() => {
      'use strict'
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      })
    })()

    const userData = {
      email,
      password
    }
    axios.post('http://localhost:5008/api/users/login', userData).then((response) => {
      setEmail('')
      setPassword('')

      //success
      alert('Successfully logged in');
      if(decodedUserType === 'Seller') {
        window.location.replace("/seller-dashboard");
      }
      else {
        window.location.replace("/admin-dashboard");
      }

    }).catch((error) => {
      alert('Please check your email or password');
    })

  }
  return (
    <div style={{margin:"auto", width:'100%'}}>
      <main className="form-signin">
        <form>
          {/* <img className="mb-4" src="" alt="" width="72" height="57" style={{margin: 'auto', display: 'block'}}/> */}
          <div className="site-logo mt-5 mb-5" style={{textAlign:'center'}}>
                <a href="index.html" className="js-logo-clone" style={{textDecoration: 'none'}}>HerbAyur</a>
          </div>
          <h1 className="h3 mb-3 fw-normal" style={{textAlign:'center'}}>Please sign in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign In</button>
        </form>
      </main>
    </div>
  )

}
