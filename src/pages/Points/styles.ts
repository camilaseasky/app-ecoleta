import styled, { css }  from 'styled-components/native';
import  MapView  from 'react-native-maps';

interface ItemProps {
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 0;
  height: 100%;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-top: 42px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-family: 'Roboto_500Medium';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #322153;
`;

export const Description = styled.Text`
  font-family: 'Roboto_400Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #6C6C80;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
   width: 100%;
   height: 100%;
`;

export const ItemsContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;
    margin-bottom: 16px;
`;


export const Item = styled.TouchableOpacity<ItemProps>`
    background-color: #fff;
    border-width: 2px;
    border-color: #eee;
    height: 120px;
    width: 120px;
    border-radius: 8px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 20px;
    padding-bottom: 16px;
    margin-right: 8px;
    align-items: center;
    justify-content: space-between;
  
    ${(props) =>
    props.isSelected &&
    css`
      border-color: #34CB79;
    `}
`;

export const ItemText = styled.Text`
  font-family: 'Roboto_400Regular';
  text-align: center;
  font-size: 13px;
`;

export const MarkerImageContainer = styled.View`
    width: 90px;
    height: 70px;
    background-color: #34CB79;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;
`;

export const MarkerImage = styled.Image`
    width: 90px;
    height: 45px;
`;

export const MarkerText = styled.Text`
    flex: 1;
    font-family: 'Roboto_400Regular';
    color: #FFF;
    font-size: 13px;
    line-height: 23px;
`;

