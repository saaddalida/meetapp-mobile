import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso');
  } catch (err) {
    yield put(updateProfileFailure());
    Alert.alert(
      'Erro na atualização',
      'Houve um erro ao atualizar seu perfil, verifique seus dados',
    );
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
