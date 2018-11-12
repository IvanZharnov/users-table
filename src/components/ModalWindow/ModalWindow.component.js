import React, { PureComponent as Component} from 'react';

import {
  ModalWindow,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Close,
} from './ModalWindow.styled';

class Modal extends Component {

  render(){
    return (
      <ModalWindow onClick={this.props.closeModal}>
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

export default Modal;
