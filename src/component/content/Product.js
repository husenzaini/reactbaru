import React, {Component} from 'react';
import axios from 'axios'
import './Product.css'
import Box from './Box'

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
                {['hadi', 'semilu', 'dulu'].map((data, index)=>(
                    <Box product={data} key={index}/>
                ))}
            </div>
        )
    }
}

export default Product