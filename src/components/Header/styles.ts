import styled from 'styled-components/native';
// import Icon from 'react-native-vector-icons/Feather';

export const Header = styled.View`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: #878787;
`;

export const HeaderProfile = styled.View`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #878787;
`;

export const HeaderTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  line-height: 28px;
`;

export const LogoutButton = styled.Text`
  color: #999;
  font-family: 'RobotoSlab-Regular';
  font-size: 15px;
  line-height: 28px;
  text-align: right;
`;

// export const IconBack = styled(Icon)`
//   margin-right: 18px
// `;
