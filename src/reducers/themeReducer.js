const initialState = 'dark';

const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_THEME':
      return state === 'dark' ? 'light' : 'dark';
    default:
      return state;
  }
};

export default themeReducer;
