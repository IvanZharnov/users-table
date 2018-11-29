import React, { PureComponent as Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
} from '../../resources/action';
import { usersIcon } from './icons';
import * as userSelector from '../../resources/selector';
import Modal from '../ModalWindow/ModalWindow.component';
import {
  Wrapper,
  Header,
  TitleText,
  Title,
  Icon,
  CreateButton,
  CreateIcon,
  Table,
  TableHeader,
  Main,
  MainRow,
  DeleteButton,
  UpdateButton,
  TableIcon
} from './Table.styled';

class UsersTable extends Component {

  state = {
    isModalOpen: false,
    isCreateModal: true,
    firstName: '',
    lastName: '',
    id: null
  };

  componentDidMount() {
    this.props.getUsers();
    console.log(this.props);
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
          <Title onClick={this.props.getUsers}>
            <Icon width="512px" height="512px" viewBox="0 0 80 80">
              <path d={usersIcon.users} />
            </Icon>
            <TitleText>
              Users
            </TitleText>
          </Title>
          <CreateButton onClick={this.handleOpenCreateModalClick}>
            create
            <CreateIcon
              width="325pt"
              height="325pt"
              viewBox="0 0 325 325"
            >
              <path d={usersIcon.add} />
            </CreateIcon>
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
            <Fragment key={item.id}>
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
                <UpdateButton onClick={() => this.handleOpenUpdateModalClick(
                  item.id, item.first_name, item.last_name
                )}>
                  Update
                  <TableIcon
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                  >
                    <path d={usersIcon.updateTop} />
                    <path d={usersIcon.updateBottom} />
                  </TableIcon>
                </UpdateButton>
                <DeleteButton onClick={() => this.handleDeleteButtonClick(item.id)}>
                  Delete
                  <TableIcon
                    width="47.971px"
                    height="47.971px"
                    viewBox="0 0 47.971 47.971"
                  >
                    <path d={usersIcon.trash} />
                  </TableIcon>
                </DeleteButton>
              </MainRow>
            </Fragment>
          )}
          </Main>
        }
        </Table>
      </Wrapper>
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
