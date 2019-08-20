import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  margin-top: 10px;
`;

export const MeetupImage = styled.Image`
  width: auto;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
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
