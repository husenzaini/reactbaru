import React, {Component} from 'react';
import './Product.css'
class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    render(){
        return(
            <div className='main'>
                <div className='box'>
                    
                    <p className='boxmini'>gerrr</p>
                    <b className='boxharga'>Rp 10.000</b>
                </div>
            </div>
        )
    }
}

export default Product