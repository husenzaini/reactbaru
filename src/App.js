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
            <div>
               <nav className='navbar'>
                   <div className='navbar_logo'>Akal Buku</div>
                   <li>
                       <input type='text' name='' className='search' placeholder='cari apa..' onChange={this.props.searchProduct}></input>
                     <img src={burger} className= 'burger' alt='menu'/>
                   </li>
                </nav>
               <nav className='navbar_cart'>
                   <div className='navbar_keranjang'>cart</div>
               </nav>
                <div id='sidebar'>
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