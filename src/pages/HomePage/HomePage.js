import React, { Component } from 'react';
import { Button, Col, Container, Modal, ModalBody,ModalFooter, ModalHeader, Row, Form, FormGroup, Label, Input, } from "reactstrap";
import Fab from '../../components/Fab';
import Items from '../../components/Items';

export class HomePage extends Component {

    state={
      modal: false,
      pokemonId: "",
      pokemonName: "",
      pokemonIdEdit: "",
      pokemonNameEdit: ""
    }

  onTextChange = (e) =>{
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    const pokemon = {
      pokemonId: this.state.pokemonId,
      pokemonName: this.state.pokemonName
    }
    this.props.addAPokemon(pokemon);
  }

  onSubmitEdit = (e) => {
    e.preventDefault();
    const pokemon = {
      pokemonIdEdit: this.state.pokemonIdEdit,
      pokemonNameEdit: this.state.pokemonNameEdit
    }
    this.props.editPokemon(pokemon)
  }
  

  toggle = (e) => {
        this.setState(prevState => ({
            ...prevState,
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        this.props.getPokemons();
    }
  
  componentDidUpdate(prevProps, prevState) { 
    if (prevProps.pokemonData.id !== this.props.pokemonData.id) { 
      this.setState(prevState => ({
        ...prevState,
        pokemonIdEdit: this.props.pokemonData.id,
        pokemonNameEdit: this.props.pokemonData.name
      }));
    }
  }

    render() {
        const { pokemons, error, message } = this.props;

        if (message && this.state.modal === true) {
          this.setState(prevState => ({
            modal: !prevState.modal
          }), () => {
            alert(message)
          });
        }

      if (message && this.props.isOpen === true) { 
        this.props.closeEditBox();
        alert(message);
      }

       return error ? (
         <Container
           fluid
           style={{
             marginTop: "70px"
           }}
         >
           {" "}
           Error: {`${error}`}
         </Container>
       ) : (
         <Container
           fluid
           style={{
             marginTop: "70px"
           }}
         >
           <Row>
             <Col>
               <Container>
                 <div className="col-lg-12">
                   <Items pokemons={pokemons} />
                 </div>
               </Container>
             </Col>
           </Row>
           <Fab onClick={this.toggle}>+</Fab>
           <Modal isOpen={this.state.modal} toggle={this.toggle}>
               <ModalHeader toggle={this.toggle}>Add Pokemon</ModalHeader>
               <ModalBody>
                  <Form>
                    <FormGroup>
                        <Label for="pokemonId">Pokemon id</Label>
                        <Input name="pokemonId" value={this.state.pokemonId} onChange={this.onTextChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pokemonName">Pokemon name</Label>
                        <Input name="pokemonName" value={this.state.pokemonName} onChange={this.onTextChange} />
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.onSubmit}>Add</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
           </Modal>
           <Modal isOpen={this.props.isOpen} toggle={this.props.closeEditBox}>
               <ModalHeader toggle={this.props.closeEditBox}>Edit Pokemon</ModalHeader>
               <ModalBody>
                  <Form>
                    <FormGroup>
                        <Label for="pokemonIdEdit">Pokemon id</Label>
                        <Input name="pokemonIdEdit" value={this.state.pokemonIdEdit} onChange={this.onTextChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pokemonNameEdit">Pokemon name</Label>
                        <Input name="pokemonNameEdit" value={this.state.pokemonNameEdit} onChange={this.onTextChange} />
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.onSubmitEdit}>Update</Button>
                    <Button color="secondary" onClick={this.props.closeEditBox}>Cancel</Button>
                </ModalFooter>
           </Modal>
         </Container>
       );
    }
}
