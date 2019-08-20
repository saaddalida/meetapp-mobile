import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import api from '~/services/api';

import {Container, List} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  return (
    <Background>
      <Container>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Meetup data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
