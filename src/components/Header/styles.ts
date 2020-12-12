import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Header = styled.View`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: #878787;
`;

export const HeaderTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  line-height: 28px;
`;

export const IconBack = styled(Icon)`
  margin-right: 18px
`;
