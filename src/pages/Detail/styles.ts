import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 32px;
    background-color: #fff;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ImageContainer = styled.View`
  border-radius: 8px;

`;

export const PointImage = styled.Image`
  width: 100%;
  height: 185px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const PointName = styled.Text`
  margin-top: 20px;
  font-family: 'Ubuntu_700Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 34px;
  color: #3D3D4D;
`;

export const PointItemsDescription = styled.Text`
  font-family: 'Roboto_400Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #34CB79;
  margin-top: 10px;
`;


export const PointAddress = styled.View`
  margin-top: 30px;
`;

export const AddressTitle = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #322153;
`;

export const AddressDescription = styled.Text`
  font-family: 'Roboto_400Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  color: #6C6C80;
`;

export const ButtonsContainer = styled.View`
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #F0F0F5;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactButton = styled.TouchableOpacity`
  width: 48%;
  height: 50px;
  background: #34CB79;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-family: 'Roboto_400Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  margin-left: 8px;
  
`;