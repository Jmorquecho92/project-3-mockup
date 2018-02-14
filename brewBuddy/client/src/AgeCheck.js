import React from 'react';
import $ from 'jquery';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export class AgeCheck extends React.Component {
  //  NoAccess()
  // {
  //   $("#clickEnter").html("You are not permitted to view the contents of this site.");  
  //   $("#clickEnter").css("color", "red");
  //   $("#clickEnter").css("font-weight", "bold");
  //   $("#age-footer").css("display", "none");
  // }
  constructor(props, context) {
  super(props, context);

  this.state = {
    modalVisible: true
  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
  }


  open() {
    this.setState({modalVisible: true});
  }

  close() {
    this.setState({modalVisible: false});
  }

  render() {
    return (   
  <div className="static-modal">
  <Modal show={this.state.modalVisible} onHide={this.close}>
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Are you 21?</Modal.Title>
    </Modal.Header>
    <Modal.Body>By clicking yes you confirm you are of age 21 or older.</Modal.Body>
    <Modal.Footer>
      <Button onClick={this.close}>Yes</Button>
      <Button bsStyle="primary">No</Button>
    </Modal.Footer>
  </Modal.Dialog>
  </Modal>
  </div>
    );
  }
};

