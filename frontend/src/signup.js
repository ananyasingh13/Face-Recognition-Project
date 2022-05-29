import React, {Component} from 'react';
import './app.css'
import './signup.css'


export default class SignUp extends Component{
render() {
    return (

        <div className='sign-up'>
            <h1 className='title'>SIGN UP</h1>
            
                
                    <div className='wrapper'>                
                        <div>
                            <p className='formtitle'> Create Account </p>
                        </div>
                        <form className='form-wrapper'>
                            <div className='name'>
                                <label className='label'>Name</label>
                                <input className='input' placeholder='   First Name' type='text'/>
                                <input className='input' placeholder='   Middle Name' type='text'/>
                                <input className='input' placeholder='   Last Name' type='text'/>
                            </div>

                            <div className='number'>
                                <label className='label'>Phone Number</label>
                                <input className='input' placeholder='   10 digit' type='tel'/>                                
                            </div>

                            <div className='email'>
                                <label className='label'>Email</label>
                                <input className='input' placeholder='   Email Id' type='email'/>                                
                            </div>

                            <div className='password'>
                                <label className='label'>Password</label>
                                <input className='input' placeholder='   password' type='password'/>                                
                            </div>

                            <div>
                                <button className='submit'>
                                    Sign Up
                                </button>
                            </div>

                        </form>
                        
                    </div>

                    
              
        

    
        </div>
    );
}
}