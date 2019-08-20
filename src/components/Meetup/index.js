import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Info,
  InfoText,
  Title,
  MeetupImage,
  SubscribeButton,
} from './styles';

export default function Meetup({data}) {
  return (
    <Container>
      {data.File.url ? (
        <MeetupImage
          source={{
            uri: 'https://api.adorable.io/avatars/244/abott@adorable.png',
          }}
          resizeMode="cover"
        />
      ) : null}

      <Content>
        <Info>
          <Title>{data.title}</Title>
        </Info>
        <Info>
          <InfoText>25 de novembro</InfoText>
        </Info>
        <Info>
          <InfoText>{data.location}</InfoText>
        </Info>
        <Info>
          <Icon name="person" size={14} color="#999" />
          <InfoText>{data.User.name}</InfoText>
        </Info>

        <SubscribeButton>Realizar inscrição</SubscribeButton>
      </Content>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape().isRequired,
};
