import SimpleToast from 'react-native-simple-toast';
import {ERRORS} from 'src/labels/error';

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CODE_REGEX = /^[0-9]{1,6}$/;

export const isValidatedSignin = ({email = '', password = ''}) => {
  if (!email) {
    SimpleToast.show(ERRORS.enterEmail);
    return false;
  }

  if (!password) {
    SimpleToast.show(ERRORS.enterPassword);
    return false;
  }

  return true;
};
export const isValidatedSignup = ({
  name = '',
  email = '',
  password = '',
  confirmPassword = '',
}) => {
  if (!name) {
    SimpleToast.show(ERRORS.enterName);
    return false;
  }
  if (!email || EMAIL_REGEX.test(email) === false) {
    SimpleToast.show(ERRORS.enterEmail);
    return false;
  }

  if (!password) {
    SimpleToast.show(ERRORS.enterPassword);
    return false;
  }

  if (password !== confirmPassword) {
    SimpleToast.show(ERRORS.confirmPassword);
    return false;
  }

  return true;
};

export const isValidatedEmail = ({email = ''}) => {
  if (!email) {
    SimpleToast.show(ERRORS.enterEmail);
    return false;
  }
  return true;
};

export const isValidatedChangePassword = ({
  newPassword = '',
  currentPassword = '',
  confirmPassword = '',
  isForgot = false,
}) => {
  if (!isForgot && !currentPassword) {
    SimpleToast.show(ERRORS.enterCurrentPassword);
    return false;
  }

  if (newPassword.length < 8) {
    SimpleToast.show(ERRORS.passwordValidation);
    return false;
  }

  if (newPassword !== confirmPassword) {
    SimpleToast.show(ERRORS.confirmPassword);
    return false;
  }

  return true;
};
