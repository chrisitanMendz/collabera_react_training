import { connect } from 'react-redux';
import Register from './register.';

const mapDispatchToProps = dispatch => ({
  register: values => {
    dispatch({
      type: 'REGISTER_REQUEST',
      payload: values,
      meta: {
        loadingId: -1,
      },
    });
  },
  resetError: () => {
    dispatch({
      type: 'LOGIN_RESET',
      meta: {
        loadingId: -1,
      },
    });
  },
});

export default connect(null, mapDispatchToProps)(Register);
