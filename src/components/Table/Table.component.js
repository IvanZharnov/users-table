import React, { PureComponent as Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
} from '../../resources/action';
import { usersIcon } from './icons';
import * as userSelector from '../../resources/selector';
import * as notify from './helpers';
import Modal from '../ModalWindow/ModalWindow.component';
import {
  Container,
  Button,
  Table,
  Row,
  Col
} from 'reactstrap';
import './Table.css';

class UsersTable extends Component {

  state = {
    isNotifyOpen: false,
    isModalOpen: false,
    isCreateModal: true,
    firstName: '',
    lastName: '',
    id: null
  };

  componentDidMount() {
    this.props.getUsers();
  };

  handleOpenUpdateModalClick = (id, first_name, last_name) => {
    this.setState({
      isModalOpen: true,
      isCreateModal: false,
      firstName: first_name,
      lastName: last_name,
      id: id
    });
  };

  handleOpenCreateModalClick = () => {
    this.setState({
      isModalOpen: true,
      isCreateModal: true
    });
  }

  handleChangeFirstName = (event) => {
    this.setState({firstName: event.target.value});
  };

  handleChangeLastName = (event) => {
    this.setState({lastName: event.target.value});
  };

  handleSave = (id, first_name, last_name) => {
    (this.state.isCreateModal) ?
    this.props.createUser(first_name, last_name) :
    this.props.updateUser(id, first_name, last_name)
    this.handleCloseModalClick();
    this.setState({
      isNotifyOpen: true
    })
    notify.successCreateUserNotify();
  };

  handleCloseModalClick = () => {
    this.setState({
      isModalOpen: false,
      isCreateModal: '',
      firstName: '',
      lastName: '',
      id: null,
    });
  };

  handleDeleteButtonClick = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    return (
      <Fragment>
      {
        this.state.isNotifyOpen &&
        <ToastContainer
          position="bottom-right"
          autoClose={30000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover
        />
      }
      <Container className="Wrapper">
        <Row className="Title">
          <Col>
            <Button
              className="Button TitleButton"
              onClick={this.props.getUsers}
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 80 80"
              >
                <path d={usersIcon.users} />
              </svg>
              Users
            </Button>
          </Col>
          <Col sm="4">
            <Button
              className="Button CreateButton"
              onClick={this.handleOpenCreateModalClick}
            >
              create
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 325 325"
              >
                <path d={usersIcon.add}/>
              </svg>
            </Button>
          </Col>
          {
            this.state.isModalOpen &&
            <Modal
              closeModal={this.handleCloseModalClick}
              changeFirstName={this.handleChangeFirstName}
              changeLastName={this.handleChangeLastName}
              firstNameValue={this.state.firstName}
              lastNameValue={this.state.lastName}
              id={this.state.id}
              saveData={this.handleSave}
              isCreate={this.state.isCreateModal}
            />
          }
        </Row>
        <Row>
          <Table className="TableWrapper">
            <thead>
              <tr className="TableHeader">
                <th className="TableHeaderColumn">id</th>
                <th className="TableHeaderColumn">first name</th>
                <th className="TableHeaderColumn">last name</th>
                <th className="TableHeaderColumn">update</th>
                <th className="TableHeaderColumn">delete</th>
              </tr>
            </thead>
            {!!this.props.users.length &&
            <tbody className="TableMain">
            {this.props.users.map(item =>
              <Fragment key={item.id}>
              {console.log(item)}
                <tr className="TableMainRow">
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <Button
                      onClick={() => this.handleOpenUpdateModalClick(
                        item.id, item.first_name, item.last_name
                      )}
                      className="Button UpdateButton"
                    >
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 512 512"
                      >
                        <path d={usersIcon.updateTop} />
                        <path d={usersIcon.updateBottom} />
                      </svg>
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => this.handleDeleteButtonClick(item.id)}
                      className="Button DeleteButton"
                    >
                      <svg
                        width="13px"
                        height="13px"
                        viewBox="0 0 47.971 47.971"
                      >
                        <path d={usersIcon.trash} />
                      </svg>
                    </Button>
                  </td>
                </tr>
              </Fragment>
            )}
            </tbody>
          }
          </Table>
        </Row>
      </Container>
    </Fragment>
    );
  };
};

UsersTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  paymentHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired
  }))
};

const mapStateToProps = state => ({
  users: userSelector.getUsers(state),
});

const mapDispatchToProps = {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
