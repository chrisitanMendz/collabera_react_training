import Input from '../../components/Input';

export const changePasswordFields = [
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    placeholder: 'Email',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'old-password',
    type: 'password',
    'data-value': '',
    autoComplete: 'old-password',
    placeholder: 'Old-Password',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'newPassword',
    id: 'new-password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'New-Password',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'confirmPassword',
    id: 'confirm-password',
    type: 'password',
    'data-value': '',
    autoComplete: 'confirm-password',
    placeholder: 'Confirm-Password',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const changePasswordInitialValues = changePasswordFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
