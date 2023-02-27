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
    id: 'password',
    type: 'password',
    'data-value': '',
    autoComplete: 'current-password',
    placeholder: 'Password',
    // className: 'rounded-b-md',
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
    id: 'newPassword',
    type: 'password',
    'data-value': '',
    autoComplete: 'current-password',
    placeholder: 'newPassword',
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
