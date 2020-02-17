import React, {Component} from 'react';
import './Box.css'

class Box extends Component{
    // constructor(props){
    //     super(props)
    // }
   
    render(){
        return(
            <div className='box'>
                <img className='product-image' src="https://1.bp.blogspot.com/-v7t5jFmXtSo/VgR7yxxiM8I/AAAAAAAACN4/m0_RIIVuWL8/s1600/Resep%2BCara%2BMembuat%2BPuding%2BCake%2BCoklat%2Byang%2BNikmat.jpg"/>
                <p className='boxmini'>nama</p>
                <b className='boxharga'>harga</b>
            </div>
        )
    }
}

export default Box