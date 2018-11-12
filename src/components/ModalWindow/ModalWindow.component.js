import React, { PureComponent as Component} from 'react';
import { connect } from 'react-redux';
import {
  showModal,
  hideModal
 } from '../../resources/action';
 import {
   ModalWindow,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Close,
 } from './ModalWindow.styled';


class Modal extends Component {

  onOverlayClose(e){
    if(e.target.id === 'modal')
      this.props.closeModal();
  }

  render(){
    return (
      <ModalWindow onClick={(e)=>this.onOverlayClose(e)}>
          <ModalContent>
            <ModalHeader>
              <Close onClick={this.props.closeModal}>&times;</Close>
              <h2>Modal Header</h2>
            </ModalHeader>
            <ModalBody>
              <p>This is a modal</p>
            </ModalBody>
            <ModalFooter>
              <button onClick={this.props.closeModal}>
                Close
              </button>
            </ModalFooter>
          </ModalContent>
      </ModalWindow>
    );
  }
}

/***React+Redux***/
const mapStateToProp = (state) => {
  return {
    modalIsActive: state.modalIsActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () =>{
      return dispatch(showModal());
    },
    closeModal: () =>{
      return dispatch(hideModal());
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Modal);
