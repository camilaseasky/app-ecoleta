import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;

export const Content = styled.View`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 132px;
  height: 32px;
`;

export const Title = styled.Text`
  font-family:'Ubuntu_700Bold';
  max-width: 260px;
  margin-top: 60px;
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  color: #322153;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  line-height: 24px;
  color: #6C6C80;
  margin-top: 16px;
  max-width: 260px;
`;

export const SelectContainer = styled.View`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
`;

export const Button = styled(RectButton)`
    width: 100%;
    height: 60px;
    background-color: #34CB79;
    margin-top: 8px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

export const ButtonIcon = styled.View`
   background-color: #2FB86E;
   width: 60px;
   height: 60px;  
   justify-content: center;
   align-items: center; 
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 0;
   border-top-left-radius: 10px;
   border-top-right-radius: 0;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  flex: 1;
  justify-content: center;
  text-align: center;
`;




