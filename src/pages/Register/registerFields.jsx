import Input from '../../global/Input';
import Select from '../../global/Select';
import Radio from '../../global/Radio';
import Checkbox from '../../global/Checkbox';

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
    component: Select,
    name: 'Gender',
    id: 'gender',
    type: 'select',
    'data-value': '',
    placeholder: 'choose gender',
    options: [
      {
        name: 'Male',
        value: 'male',
      },
      {
        name: 'Female',
        value: 'female',
      },
    ],
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  // {
  //   component: Radio,
  //   label: 'Gender',
  //   name: 'gender1',
  //   'data-value': '',
  //   options: [
  //     {
  //       id: 'male',
  //       text: 'Male',
  //     },
  //     {
  //       id: 'female',
  //       text: 'Female',
  //     },
  //     {
  //       id: 'other',
  //       text: 'Other',
  //     },
  //   ],
  //   validate: value => {
  //     if (!value) {
  //       return 'Required...';
  //     }
  //     return '';
  //   },
  // },
  {
    component: Checkbox,
    label: 'Hobies',
    name: 'hobies',
    'data-value': [],
    options: [
      {
        id: 'basketball',
        text: 'Basketball',
      },
      {
        id: 'volleyball',
        text: 'Volleyball',
      },
      {
        id: 'egames',
        text: 'Egames',
      },
    ],
    validate: value => {
      if (value.length === 0) {
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
