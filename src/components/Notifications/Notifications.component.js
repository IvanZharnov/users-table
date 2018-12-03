import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification extends Component {

  notifyConfig = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  }

  successCreateUserNotify = () => toast.success(
    'User successfully created! 😀', this.notifyConfig
  );
  errorCreateUserNotify = () => toast.error(
    'User is not created! 😣', this.notifyConfig
  );
  successDeleteUserNotify = () => toast.success(
    'User successfully deleted! 😀', this.notifyConfig
  );
  errorDeleteUserNotify = () => toast.error(
    'User is not deleted! 😣', this.notifyConfig
  );
  successUpdateUserNotify = () => toast.success(
    'User successfully updated! 😀', this.notifyConfig
  );
  errorUpdateUserNotify = () => toast.error(
    'User is not updated! 😣', this.notifyConfig
  );

  render(){
    return (
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover
      />
    );
  }
}
export default Notification;
