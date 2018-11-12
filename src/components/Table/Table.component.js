import React, { PureComponent as Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {
  getUsers,
  deleteUser
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

  componentWillMount() {
    this.props.getUsers();
  };

  handleClick(e){
    console.log(this.props.modal);
    e.preventDefault();
    if (this.props.modalIsActive)
      this.props.closeModal();
    else
      this.props.openModal();
  }

  handleDeleteButtonClick = (id) => {
    console.log('ID', id);
    const { deleteUser } = this.props;
    deleteUser(id);
  };

  render() {
    console.log(this.props);
    return (
      <Wrapper>
        <Header>
          <ReloadButton>
            reload
          </ReloadButton>
          <Title>
            Users
          </Title>
          <CreateButton onClick={(e)=>this.handleClick(e)}>
            create
          </CreateButton>
          {this.props.modalIsActive && <Modal closeModal={this.props.closeModal}/>}
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
          {this.props.users.length &&
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
                <UpdateButton>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
