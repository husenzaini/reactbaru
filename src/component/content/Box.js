import React, {Component} from 'react';
import './Box.css'

class Box extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
   
    render(){
        return(
            <div className='main'>
                {this.state.products.map((data, index)=>(
                    <div className='box' key={index}>
                    <p className='boxmini'>{data.name}</p>
                    {/* <b className='boxharga'>{data.price}</b> */}
                </div>
                ))}
            </div>
        )
    }
}

export default Box