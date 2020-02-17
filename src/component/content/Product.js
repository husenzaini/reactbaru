import React, {Component} from 'react';
import './Product.css'
import axios from 'axios'
class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4002/api/v1/product')
        .then(res => {
            this.setState({
                products:res.data.result.result
            })
      })
        .catch(err => {
          console.log(err)
      })      
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