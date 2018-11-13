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
    firstName: '',
    lastName: '',
  };

  componentDidMount() {
    this.props.getUsers();
  };

  handleOpenUpdateModalClick = (first_name, last_name) => {
    console.log('STATE', this.state);
    console.log('PROPS', this.props);
    this.setState({ isModalOpen: !this.state.isModalOpen });
    this.setState({ firstName: first_name });
    this.setState({ lastName: last_name });
  }

  handleDeleteButtonClick = (id) => {
    console.log('ID', id);
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
          <CreateButton onClick={this.handleOpenModalClick}>
            create
          </CreateButton>
          {this.state.isModalOpen && <Modal closeModal={this.handleOpenModalClick}
          firstNameValue={this.state.firstName}
          lastNameValue={this.state.lastName} />}
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
                <UpdateButton onClick={() => this.handleOpenUpdateModalClick(item.first_name, item.last_name)}>
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
