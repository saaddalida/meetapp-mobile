import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  margin: 15px 0;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.8 : 1)};
`;

export const MeetupImage = styled.Image`
  height: 150px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Content = styled.View`
  flex: 1;
  height: 200px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333333;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Details = styled.View`
  justify-content: center;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #999999;
  margin-left: 3px;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 25px;
`;
