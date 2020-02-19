import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions'
import './Box.css'

class Box extends Component{
    constructor(props){
        super(props)
        this.state = {
            isClicked: false
        }
    }

    handleClickBox(){
        this.setState({
            isClicked: !this.state.isClicked
        })

        this.props.addToCart(this.props.product.id)
    }
   
    render(){
        return(
        
            <div className='box' onClick={() => this.handleClickBox()} style={{ opacity: this.state.isClicked ? '50%' : '100%'}}>
                <img className='image-product' alt={this.props.product.name} src={this.props.product.image}/>
                {/* <img alt="check icon" src="https://image.flaticon.com/icons/svg/1828/1828640.svg" style={{ height: '50px', width: '50px'}}/> */}
                <p className='boxmini'>{this.props.product.name}</p>
                <b className='boxharga'>Rp. {this.props.product.price}</b>
                <div className='tombol'>
            <div>
            <button className='btn_btn1' onClick={this.props.isOpen}>Edit</button>
            <button className='btn_btn2' onClick={this.props.clickConfirmDelete}>Delete</button>
            </div>
        </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => { dispatch(addToCart(id)) }
    }
}
  
  
export default connect(null, mapDispatchToProps)(Box)
