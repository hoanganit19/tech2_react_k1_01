import React from "react";

class FormLogin extends React.Component{
    constructor(){
        super();
    }

    handleSubmit(e){

        e.preventDefault();

        const errors = {};
        
        let email = e.target.querySelector('input[name="email"]').value;
        
        let password = e.target.querySelector('input[name="password"]').value;

        if (email.trim()===''){
            errors.email = 'Vui lòng nhập địa chỉ email';
        }

        if (password.trim()===''){
            errors.password = 'Vui lòng nhập mật khẩu';
        }

        const errorsObj = document.querySelectorAll('.error');
        errorsObj.forEach((error)=>{
            error.innerText = '';
        });

        Object.keys(errors).forEach((fieldName)=>{
            var error = errors[fieldName];
            
            document.querySelector(`.error-${fieldName}`).innerText = error;
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1 className="text-center">Login</h1>
                        <form method="post" onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" placeholder="Email..." />
                                <span className="text-danger error error-email"></span>
                            </div>

                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Password..." />
                                <span className="text-danger error error-password"></span>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormLogin;