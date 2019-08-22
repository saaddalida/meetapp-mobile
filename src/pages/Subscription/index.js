import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import Background from '~/components/Background';
import Unsubscribe from '~/components/Unsubscribe';
import api from '~/services/api';

import {Container, List, EmptyList, EmptyView, TextEmpty} from './styles';

function Subscription({isFocused}) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('subscriptions');

      setMeetups(response.data);
    }

    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused]);

  async function handleCancellation(id) {
    try {
      await api.delete(`/subscriptions/${id}`);

      setMeetups(meetups.filter(item => item.id !== id));

      Alert.alert('Sucesso', 'Você cancelou a inscrição no meetup');
    } catch (err) {
      const errData = err.response.data;
      Alert.alert('Falha no cancelamento', `${errData.error}`);
    }
  }

  return (
    <Background>
      <Container>
        {meetups.length === 0 ? (
          <EmptyView>
            <EmptyList>
              <Icon name="assignment-turned-in" size={60} color="#333" />
              <TextEmpty>Você não está inscrito em nenhum meetup</TextEmpty>
            </EmptyList>
          </EmptyView>
        ) : (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Unsubscribe
                data={item}
                onCancel={() => handleCancellation(item.id)}
              />
            )}
          />
        )}
      </Container>
    </Background>
  );
}

const tabBarIcon = ({tintColor}) => (
  <Icon name="assignment" size={20} color={tintColor} />
);

Subscription.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon,
};

export default withNavigationFocus(Subscription);
