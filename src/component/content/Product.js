import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import './Product.css'
// import Box from './Box'
import Modal from './Modal'
// import ModalDelet from './ModalDelet'
// import Box from './Box'
import { resetIsSearch, setProducts } from '../../redux/actions'


class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('http://ec2-54-159-180-139.compute-1.amazonaws.com/api/v1/product')
        .then(res => {
            this.setState({
                products:res.data.result.result
            })

            // set all products in redux
            this.props.setProducts(this.state.products)

            // reset isSeacrh to false
            this.props.resetIsSearch()

      })
        .catch(err => {
          console.log(err)
      })      
    }

    searchProducts(){
        axios.get('http://ec2-54-159-180-139.compute-1.amazonaws.com/api/v1/product', {
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
        } else if(this.props.query === "" && this.props.isSearching){
            this.componentDidMount()
        }
        if(this.props.isRefresh){
          this.componentDidMount()
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
    isSearching: state.products.isSearching,
    allProducts: state.products.allProducts,
    isRefresh: state.products.isRefresh
  })

const mapDispatchToProps = (dispatch) => {
    return {
      resetIsSearch: () => {
        dispatch(resetIsSearch())
      },
      setProducts: (data) => {
        dispatch(setProducts(data))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Product)