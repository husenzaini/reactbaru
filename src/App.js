import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import logo from './clipboard.svg'
import forky from './fork.svg'
import addy from './add.svg'
import burger from './burger.svg'
import { searchProduct } from '../src/redux/actions'



class App extends Component {
    render(){
        return(
            <div className='main-app'>
               <nav className='navbar'>
                   <ul>
                    <li>
                      <img src={burger} className= 'burger' alt='menu'/>
                    </li>
                    <li>
                        <div className='navbar_logo'>Akal Buku</div> 
                    </li>
                    <li>
                       <input type='text' name='' className='search' placeholder='cari apa..' onChange={this.props.searchProduct}></input>
                    </li>
                   </ul>
                </nav>
                <div id='left-sidebar'>
                    <div className='toggle-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li><img src={logo} alt='menuu'/></li>
                        <li><img src={forky} alt='menuu'/></li>
                        <li><img src={addy} alt='menuu'/></li>
                    </ul>
                </div>
                <div id='right-sidebar'>
                <nav className='navbar_cart'>
                    <div className='navbar_keranjang'>cart</div>
                </nav>
                </div>
               
                
            </div>
        
            
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      searchProduct: q => {
        dispatch(searchProduct(q.target.value))
      }
    }
  }
export default connect(null, mapDispatchToProps)(App)