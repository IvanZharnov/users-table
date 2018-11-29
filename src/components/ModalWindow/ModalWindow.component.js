import React, { PureComponent as Component} from 'react';
import PropTypes from 'prop-types';
import {
  ModalWindow,
  ModalContent,
  ModalHeader,
  ModalMain,
  ModalMainText,
  ModalMainInput,
  ModalFooter,
  ModalFooterButton,
} from './ModalWindow.styled';

const CREATE_USER = 'Create User';
const UPDATE_USER = 'Update User';

class Modal extends Component {
  render(){
    return (
      <ModalWindow>
        <ModalContent>
          <ModalHeader>
            {this.props.isCreate ? CREATE_USER : UPDATE_USER}
          </ModalHeader>
          <ModalMain>
            <ModalMainText>
              First name
            </ModalMainText>
            <ModalMainInput
              name="firstNameValue"
              type="text"
              required
              autoFocus
              placeholder="John"
              value={this.props.firstNameValue}
              onChange={this.props.changeFirstName}
            >
            </ModalMainInput>
            <ModalMainText>
              Last name
            </ModalMainText>
            <ModalMainInput
              name="lastNameValue"
              type="text"
              required
              placeholder="Doe"
              value={this.props.lastNameValue}
              onChange={this.props.changeLastName}
            >
            </ModalMainInput>
          </ModalMain>
          <ModalFooter>
            <ModalFooterButton onClick={this.props.closeModal}>
              Cancel
            </ModalFooterButton>
            <ModalFooterButton onClick={() => this.props.saveData(
              this.props.id,
              this.props.firstNameValue,
              this.props.lastNameValue
            )}>
              Save
            </ModalFooterButton>
          </ModalFooter>
        </ModalContent>
      </ModalWindow>
    );
  };
};

Modal.propTypes = {
  saveData: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  isCreate: PropTypes.bool.isRequired,
  id: PropTypes.number,
  firstNameValue: PropTypes.string.isRequired,
  lastNameValue: PropTypes.string.isRequired
};

export default Modal;
