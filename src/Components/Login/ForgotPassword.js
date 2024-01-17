import React from 'react'

function ForgotPassword() {
    
  return (
    <div style={{marginLeft:"25%"}}>
      <div className="card text-center" style={{width: "700px"}}>
    <div className="card-header h5 text-white bg-primary">Password Reset</div>
    <div className="card-body px-5">
        <p class="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div className="form-outline">
            <input type="email" id="typeEmail" className="form-control my-3" />
            <label className="form-label" for="typeEmail">Email input</label>
        </div>
        <a href="#" class="btn btn-primary w-100">Reset password</a>
        <div className="d-flex justify-content-between mt-4">
            
        </div>
    </div>
</div>
</div>
  )
}

export default ForgotPassword
