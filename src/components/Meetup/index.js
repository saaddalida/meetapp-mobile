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
    <Container past={data.past}>
      {data.File.url ? (
        <MeetupImage
          source={{
            uri:
              'https://www.austrianstartups.com/wp-content/uploads/2017/12/react.jpg',
          }}
          resizeMode="cover"
        />
      ) : null}

      <Content>
        <Info>
          <Title>{data.title}</Title>
        </Info>
        <Info>
          <Icon name="event" size={14} color="#999" />
          <InfoText>{data.formattedDate}</InfoText>
        </Info>
        <Info>
          <Icon name="place" size={14} color="#999" />
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
