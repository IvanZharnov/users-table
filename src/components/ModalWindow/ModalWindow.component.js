import React, { PureComponent as Component} from 'react';

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

class Modal extends Component {

  state = {
    firstNameValue: this.props.firstNameValue,
    lastNameValue: this.props.lastNameValue,
  };

  handleChangeFirstName = (event) => {
    this.setState({firstNameValue: event.target.value});
    console.log('MODAL PROPS', this.props);
  };

  handleChangeLastName = (event) => {
    this.setState({lastNameValue: event.target.value});
  };

  handleSubmit = (event) => {
    console.log('SAVED DATA', event.target.value);
    event.preventDefault();
  };

  render(){
    console.log('MODAL STATE', this.state)
    // console.log('MODAL PROPS', this.props)

    return (
      <ModalWindow>
          <ModalContent>
            <ModalHeader>
              Create user
            </ModalHeader>
            <ModalMain>
              <ModalMainText>
                First name
              </ModalMainText>
              <ModalMainInput name="firstNameValue" type="text" required autoFocus placeholder="John" value={this.state.firstNameValue} onChange={this.handleChangeFirstName.bind(this)}>
              </ModalMainInput>
              <ModalMainText>
                Last name
              </ModalMainText>
              <ModalMainInput name="lastNameValue" type="text" required placeholder="Johnson" value={this.state.lastNameValue} onChange={this.handleChangeLastName.bind(this)}>
              </ModalMainInput>
            </ModalMain>
            <ModalFooter>
              <ModalFooterButton onClick={this.props.closeModal}>
                Cancel
              </ModalFooterButton>
              <ModalFooterButton onSubmit={this.handleSubmit.bind(this)}>
                Save
              </ModalFooterButton>
            </ModalFooter>
          </ModalContent>
      </ModalWindow>
    );
  }
}

export default Modal;
