import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import DatePicker from '~/components/DatePicker';
import api from '~/services/api';

import {Container, List, EmptyList, EmptyView, TextEmpty} from './styles';

function Dashboard({isFocused}) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {date},
      });

      setMeetups(response.data);
    }

    if (isFocused) {
      loadMeetups();
    }
  }, [date, isFocused]);

  async function handleSubscribe(id) {
    try {
      await api.post(`/meetups/${id}/subscriptions`);

      Alert.alert('Sucesso', 'Inscrição realizada com sucesso');
    } catch (err) {
      const errData = err.response.data;
      Alert.alert('Falha na inscrição', `${errData.error}`);
    }
  }

  return (
    <Background>
      <Container>
        <DatePicker date={date} onChange={setDate} />
        {meetups.length === 0 ? (
          <EmptyView>
            <EmptyList>
              <Icon name="event-busy" size={60} color="#333" />
              <TextEmpty>Nenhum meetup disponível para esta data</TextEmpty>
            </EmptyList>
          </EmptyView>
        ) : (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Meetup
                data={item}
                onSubscribe={() => handleSubscribe(item.id)}
              />
            )}
          />
        )}
      </Container>
    </Background>
  );
}

const tabBarIcon = ({tintColor}) => (
  <Icon name="format-list-bulleted" size={20} color={tintColor} />
);

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon,
};

export default withNavigationFocus(Dashboard);
