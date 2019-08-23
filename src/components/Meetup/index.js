import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Info,
  InfoText,
  Title,
  MeetupImage,
  ItemButton,
} from './styles';

export default function Meetup({data, onSubscribe}) {
  const dateFormatted = useMemo(
    () => format(parseISO(data.date), "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [data.date],
  );

  return (
    <Container past={data.past}>
      {data.File.url ? (
        <MeetupImage
          source={{
            uri: data.File.url
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
          <InfoText>{dateFormatted}</InfoText>
        </Info>
        <Info>
          <Icon name="place" size={14} color="#999" />
          <InfoText>{data.location}</InfoText>
        </Info>
        <Info>
          <Icon name="person" size={14} color="#999" />
          <InfoText>{data.User.name}</InfoText>
        </Info>

        <ItemButton onPress={onSubscribe}>Realizar inscrição</ItemButton>
      </Content>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    past: PropTypes.bool.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    File: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onSubscribe: PropTypes.func,
};

Meetup.defaultProps = {
  onSubscribe: null,
};
