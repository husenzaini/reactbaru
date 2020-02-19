import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import logo from './clipboard.svg'
import forky from './fork.svg'
import addy from './add.svg'
import burger from './burger.svg'
import { searchProduct, editQty } from '../src/redux/actions'
import Product from './component/content/Product'
import { Badge, Button } from 'reactstrap'


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
                        <li><img src={logo} className='board' alt='menuu'/></li>
                        <li><img src={forky} className='fork' alt='menuu'/></li>
                        <li><img src={addy} className='add' alt='menuu'/></li>
                    </ul>
                </div>
               
                <Product />
        
            
                <div id='right-sidebar'>
                <nav className='navbar_cart'>
                    <div className='navbar_keranjang'>
                        cart <Badge color="info" pill>{this.props.addedItems.length}</Badge>
                    </div>
                </nav>
                <div className='cart-content'>
                    {this.props.addedItems.map((element, index) => (
                        <div className="added-products" key={index}>
                            <img alt="product-item" src={element.image} style={{ height: '50px', width: '50px'}}/>
                            <Button color="success" id='plus-cart' onClick={() => this.props.editQty(element.id, true)}>+</Button>
                            {element.quantity}
                            <Button color="success" id='minus-cart' onClick={() => this.props.editQty(element.id, false)}>-</Button>
                            {element.quantity * element.price}
                        </div>
                    ))}
                    <p>Total : Rp. {this.props.total}</p>
                </div>
                </div>
            </div>   
        )
    }
}

const mapStateToProps = state => ({
    addedItems: state.products.addedItems,
    total: state.products.total
})

const mapDispatchToProps = (dispatch) => {
    return {
      searchProduct: q => {
        dispatch(searchProduct(q.target.value))
      },
      editQty: (id, isIncrement)=> {
        dispatch(editQty(id, isIncrement))
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(App)