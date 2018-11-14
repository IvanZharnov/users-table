import React, { PureComponent as Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
 } from '../../resources/action';
import * as userSelector from '../../resources/selector';
import Modal from '../ModalWindow/ModalWindow.component';
import {
  Wrapper,
  Header,
  ReloadButton,
  Title,
  CreateButton,
  Table,
  TableHeader,
  Main,
  MainRow,
  DeleteButton,
  UpdateButton
} from './Table.styled';

class UsersTable extends Component {

  state = {
    isModalOpen: false,
    isCreateModal: true,
    firstName: '',
    lastName: '',
    id: null,
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
      id: id,
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
  }

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
      <Wrapper>
        <Header>
          <ReloadButton onClick={this.props.getUsers}>
            reload
          </ReloadButton>
          <Title>
            Users
          </Title>
          <CreateButton onClick={this.handleOpenCreateModalClick}>
            create
          </CreateButton>
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
        </Header>
        <Table>
          <TableHeader>
            <span>
              id
            </span>
            <span>
              first name
            </span>
            <span>
              last name
            </span>
            <span>
              update
            </span>
            <span>
              delete
            </span>
          </TableHeader>
          {!!this.props.users.length &&
          <Main>
          {this.props.users.map(item =>
            <Fragment>
              <MainRow>
                <span>
                  {item.id}
                </span>
                <span>
                  {item.first_name}
                </span>
                <span>
                  {item.last_name}
                </span>
                <UpdateButton onClick={() => this.handleOpenUpdateModalClick(item.id, item.first_name, item.last_name)}>
                  update
                </UpdateButton>
                <DeleteButton onClick={() => this.handleDeleteButtonClick(item.id)}>
                  delete
                </DeleteButton>
              </MainRow>
            </Fragment>
          )}
          </Main>
        }
        </Table>
      </Wrapper>
    );
  }
}

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
