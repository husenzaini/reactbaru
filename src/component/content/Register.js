import React, {Component} from 'react';
import './Register.css'

class Register extends Component{
    state={
        user:{
            name:'',
            username:'',
            password:''
        },
        msg:'',
        isRegister:false,
        show:false
    }
    handleChange = (e) =>{
        let newUser = {...this.state.user};
        newUser[e.target.name] = e.target.value;
        this.setState({
            user: newUser
        })
    }
   
    render(){
        return(
            <div>
                <div className='register_box'>
                <h1>Register</h1>
                <div className='textbox'>
                    <input type='text' placeholder='Name' name='' value=''></input>
                </div>
                <div className='textbox'>
                    <input type='text' placeholder='Username' name='' value=''></input>
                </div>
                <div className='textbox'>
                    <input type='password' placeholder='Password' name='' value=''></input>
                </div>

                <input className='btn_reg' type='button' name='' value='Sign up'></input>
                </div>
            </div>
        )
    }
}

export default Register