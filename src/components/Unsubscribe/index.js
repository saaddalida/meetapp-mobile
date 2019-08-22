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

export default function Unsubscribe({data, onCancel}) {
  const dateFormatted = useMemo(
    () =>
      format(parseISO(data.Meetup.date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    [data.Meetup.date],
  );

  return (
    <Container past={data.Meetup.past}>
      {data.Meetup.File.url ? (
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
          <Title>{data.Meetup.title}</Title>
        </Info>
        <Info>
          <Icon name="event" size={14} color="#999" />
          <InfoText>{dateFormatted}</InfoText>
        </Info>
        <Info>
          <Icon name="place" size={14} color="#999" />
          <InfoText>{data.Meetup.location}</InfoText>
        </Info>
        <Info>
          <Icon name="person" size={14} color="#999" />
          <InfoText>{data.Meetup.User.name}</InfoText>
        </Info>

        <ItemButton onPress={onCancel}>Cancelar inscrição</ItemButton>
      </Content>
    </Container>
  );
}

Unsubscribe.propTypes = {
  data: PropTypes.shape({
    Meetup: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      past: PropTypes.bool,
      User: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      File: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
  onCancel: PropTypes.func,
};

Unsubscribe.defaultProps = {
  onCancel: null,
};
