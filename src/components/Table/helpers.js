import { toast } from 'react-toastify';
import { css } from 'glamor'
import 'react-toastify/dist/ReactToastify.css';

const customSuccessNotify = {
  className: css({
    background: "#3acf49",
    borderRadius: '8px',
    color: "#fff",
    boxShadow: "0 1px 10px #9d9d9d",
    paddingLeft: "20px"
  }),
  progressClassName: css({
    background: "#cbedd0"
  })
};

const customErrorNotify = {
  className: css({
    background: "#ed5e5e",
    borderRadius: '8px',
    color: "#fff",
    boxShadow: "0 1px 10px #9d9d9d",
    paddingLeft: "20px"
  }),
  progressClassName: css({
    background: "#edcbd0"
  })
};

const notifyConfig = {
  position: "bottom-right",
  autoClose: 30000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
}

export const successCreateUserNotify = () => toast(
  'User successfully created!', customSuccessNotify, notifyConfig
);
export const errorCreateUserNotify = () => toast(
  'User is not created!', customErrorNotify, notifyConfig
);
export const successDeleteUserNotify = () => toast(
  'User successfully deleted!', customSuccessNotify, notifyConfig
);
export const errorDeleteUserNotify = () => toast(
  'User is not deleted!', customErrorNotify, notifyConfig
);
export const successUpdateUserNotify = () => toast(
  'User successfully updated!', customSuccessNotify, notifyConfig
);
export const errorUpdateUserNotify = () => toast(
  'User is not updated!', customErrorNotify, notifyConfig
);
