import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { Alert } from 'reactstrap';
import './Login.css'

class Login extends Component{
    
    state = {
        user: {
            user_name: '',
            password: ''
        },
        msg: '',
        isLogin: false,
        show: false
    }

    handleChange = (e) => {
        let newUser = { ...this.state.user };
        newUser[e.target.name] = e.target.value;
        this.setState({
            user: newUser
        })
    }

    handleLogin = () => {
        let data = this.state.user
        axios.post('http://54.164.86.147:8001/api/v1/user/login', data)
            .then(res => {
                if(res.data.status_code !== 200){
                    this.setState({
                        msg: res.data.err,
                        show: true
                    })
                }else {
                    localStorage.setItem('Token', res.data.token);
                    this.setState({ isLogin: true })
                    this.props.history.push('/main')
                }
            })
            .catch(err => {
                console.log("err ", err)
            })
    }
   
    render(){
        if(!localStorage.getItem('Token')){
            return(
                <div>
                    <div className='login_box'>
                    <h1>Login</h1>
                    <div>
                        <Alert color="warning" isOpen={this.state.show} onClose={this.handleClose}>{this.state.msg}</Alert>
                    </div>
                    <div className='textbox'>
                        <input type='text' placeholder='Username' name='user_name' onChange={this.handleChange}></input>
                    </div>

                    <div className='textbox'>
                        <input type='password' placeholder='Password' name='password' onChange={this.handleChange} value={this.state.user.password}></input>
                    </div>

                    <input className='btn_1' type='button' name='' value='Sign in' onClick={() => this.handleLogin()}></input>
                    <input className='btn_2' type='button' name='' value='Sign up'></input>
                    </div>
                </div>
            )
        } else{
            return <Redirect to="/main"/>
        }

    }
}

export default Login