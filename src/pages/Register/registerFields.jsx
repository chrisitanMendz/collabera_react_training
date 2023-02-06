import Input from '../../global/Input';

export const registerFields = [
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    // autoComplete: 'email',
    placeholder: 'Email...',
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
    // autoComplete: 'current-password',
    placeholder: 'Password...',
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
    id: 'confirmPassword',
    type: 'password',
    'data-value': '',
    // autoComplete: 'current-password',
    placeholder: 'Confirm Password...',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const registerInitialValues = registerFields.reduce((p, c) => ({ ...p, [c.name]: c['data-value'] }), {});
