import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import './Product.css'
// import Box from './Box'
import { resetIsSearch } from '../../redux/actions'
import Modal from './Modal'
// import ModalDelet from './ModalDelet'

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
                    <Modal product={data} key={index}/>
                ))}
                {/* <ModalDelet/> */}
               
            </div>
        )
    }
}

const mapStateToProps = state => ({
    query: state.products.query,
    isSearching: state.products.isSearching
  })

const mapDispatchToProps = (dispatch) => {
    return {
      resetIsSearch: () => {
        dispatch(resetIsSearch())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Product)