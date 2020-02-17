import React, {Component} from 'react';
import { connect } from 'react-redux'
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

    searchProducts(){
        console.log("kepanggil coyy")
        axios.get('http://localhost:4002/api/v1/product', {
            params: {
              name: this.props.query
            }
        })
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
        console.log("this props ", this.props)
        if(this.props.query){
            this.searchProducts()
        }
        return(
            <div className='main'>
                {this.state.products.map((data, index)=>(
                    <Box product={data} key={index}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    query: state.products.query
  })

export default connect(mapStateToProps)(Product)