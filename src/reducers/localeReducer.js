const initialState = 'English';

const localeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LOCALE':
      return state === 'English' ? 'Filipino' : 'English';
    default:
      return state;
  }
};

export default localeReducer;
