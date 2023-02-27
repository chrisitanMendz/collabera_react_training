import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* login({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'POST',
      url: 'login',
      data: payload,
    });
    yield put({
      type: 'LOGIN_SUCCESS',
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: 'LOGIN_FAIL',
      payload: error,
      meta,
    });
  }
}

function* register({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'POST',
      url: 'register',
      data: payload,
    });
    yield put({
      type: 'LOGIN_SUCCESS',
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: 'LOGIN_FAIL',
      payload: error,
      meta,
    });
  }
}

function* changePassword({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'POST',
      url: 'login',
      data: payload,
    });

    const update = yield call(axiosInstance, {
      method: 'PUT',
      url: `users/${res.user.id}`,
      data: {
        email: payload.email,
        password: payload.newPassword,
      },
    });

    yield put({
      type: 'LOGIN_SUCCESS',
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: 'LOGIN_FAIL',
      payload: error,
      meta,
    });
  }
}

function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', login);
}

function* registerRequest() {
  yield takeLatest('REGISTER_REQUEST', register);
}

function* changePasswordRequest() {
  yield takeLatest('CHANGE_REQUEST', changePassword);
}

export default function* rootAuthSaga() {
  yield all([
    fork(loginRequest),
    fork(registerRequest),
    fork(changePasswordRequest),
  ]);
}
