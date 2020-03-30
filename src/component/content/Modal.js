import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Box from './Box'
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';
import { setIsRefresh } from '../../redux/actions';
import {connect} from 'react-redux'
const ModalExample = (props) => {
  const {
    className,
    product,
    setIsRefresh 
  } = props;

  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);

useEffect(()=>{
    Axios.get('http://ec2-54-159-180-139.compute-1.amazonaws.com/api/v1/category')
    .then(res => {
        setCategories(res.data.result
        )
  })
    .catch(err => {
      console.log(err)
  })      
}, [])
const [values, setValues] = useState({
  name:product.name,
  description: product.description,
  price:product.price,
  stock:product.stock,
  id_category: 1
});
const handleChange = props => event => {
  setValues({...values, [props]: event.target.value});
};
const patchProduct = () => {
  Axios.put('http://ec2-54-159-180-139.compute-1.amazonaws.com/api/v1/product/' +product.id, values,{
    headers:{
      "Access-Control-Allow-Origin": "PUT"
    }
  })
  .then(res =>{
    setIsRefresh()
  })
  .catch(err=>{
    console.log(err)
  })
}
const deleteProduct =()=>{
  Axios.delete('http://ec2-54-159-180-139.compute-1.amazonaws.com/api/v1/product/' + product.id)
  .then(res=>{
    setIsRefresh()
  })
  .catch(err=>{
    console.log(err)
  })
}

  const handleClickOpenConfirmDelete = () =>{
    setConfirmDelete(true);
  };

  const handleCloseConfirmDelete =() =>{
    setConfirmDelete(false);
  }

  const handleClickOpen = () =>{
    setModal(true);
  };

  const handleClose =()=>{
    setModal(false);
  }

  return (
      <>
        <Box product={product} isOpen={handleClickOpen} clickConfirmDelete={handleClickOpenConfirmDelete}/>
      <Modal isOpen={modal} toggle={handleClickOpen} className={className}>
        <ModalHeader toggle={handleClose}>Edit Product</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="name" id="exampleEmail" value={values.name} onChange={handleChange('name')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input type="email" name="description" id="exampleEmail" value={values.description} onChange={handleChange('description')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Price</Label>
        <Input type="email" name="price" id="exampleEmail" value={values.price} onChange={handleChange('price')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Stock</Label>
        <Input type="email" name="stock" id="exampleEmail" value={values.stock} onChange={handleChange('stock')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="category" id="exampleSelect" onChange={handleChange('id_category')}>
          {categories.map(data=>(
              <option key={data.id}>{data.name}</option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Image</Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
    </Form> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{handleClose();patchProduct()}}>Edit</Button>{' '}
          <Button color="secondary" onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={confirmDelete} className={className}>
        <ModalHeader>Delete</ModalHeader>
        <ModalBody>
          Are you sure want to delete this product?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{handleCloseConfirmDelete(); deleteProduct()}}>Delete</Button>{' '}
          <Button color="secondary" onClick={handleCloseConfirmDelete}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setIsRefresh: () => { dispatch(setIsRefresh()) }
  }
}

export default connect(null, mapDispatchToProps) (ModalExample);