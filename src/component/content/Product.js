import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import './Product.css'
import Box from './Box'
import { resetIsSearch } from '../../redux/actions'


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
        axios.get('http://localhost:4002/api/v1/product', {
            params: {
              name: this.props.query
            }
        })
        .then(res => {
            this.setState({
                products:res.data.result.result
            })

            this.props.resetIsSearch()
      })
        .catch(err => {
          console.log(err)
      })
    }
    render(){
        if(this.props.query && this.props.isSearching){
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

const mapDispatchToProps = (dispatch) => {
    return {
      searchProduct: () => {
        dispatch(resetIsSearch())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Product)