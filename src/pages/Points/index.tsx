import React, { useEffect, useState, useCallback } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation,  useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import { Marker } from 'react-native-maps';
import api from '../../services/api';
import * as Location from 'expo-location';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, 
        ButtonIcon, 
        Title, 
        Description,
        MapContainer,
        Map,
        ItemsContainer,
        Item,
        ItemText,
        MarkerImageContainer,
        MarkerImage,
        MarkerText } from './styles';
import { Alert } from 'react-native';

interface ItemResponse {
  id: string;
  title: string;
  url_image: string;
}

interface Point {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  image_url: string;
}

interface RouteParams {
  uf: string;
  city: string;
}

const Points: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<ItemResponse[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);
  const [points, setPoints] = useState<Point[]>([]);

  const route = useRoute();

  const {uf, city} = route.params as RouteParams;

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail(id: string) {
    navigation.navigate('Detail', {point_id: id});
  }

  useEffect(() => {
    api.get<ItemResponse[]>('items').then((response) => {
        setItems(response.data);
    })
  },[])

  useEffect(() => {
    async function loadPosition(){
      const { status } = await Location.requestPermissionsAsync();
      
      if(status !== 'granted'){
        Alert.alert('Oooops...', 'Precisamos de sua permissão para obter a localização!')
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setInitialPosition([
        latitude,
        longitude
      ])
    }

    loadPosition();
  })

  useEffect(() => {
    if(selectedItems.length > 0) {
      api.get('points', {
        params: {
          uf,
          city,
          items: selectedItems,
        },
      }).then((response) => {
        setPoints(response.data);
      })
    }
  },[selectedItems])

  function handleSelectedItem(id: string) {
     const alreadySelected = selectedItems.findIndex(item => item === id);
     if(alreadySelected >= 0) {
       const filteredItems = selectedItems.filter(item => item !== id);
       setSelectedItems(filteredItems);
     } else {
       setSelectedItems([...selectedItems, id]);
     }
  }; 
  
  
  
  return (
  <>
      <Container>
        <ButtonIcon onPress={handleNavigateBack}>
          <Icon 
            name="arrow-left" 
            size={20} 
            color="#34CB79"
          />
        </ButtonIcon>
        <Title>Bem vindo!</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>
      
        <MapContainer>
          { initialPosition[0] !== 0 &&(
              <Map  
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map((point) => (
                  <Marker 
                    key={point.id}
                    onPress={() => handleNavigateToDetail(point.id)}
                    coordinate={{
                      latitude: Number(point.latitude),
                      longitude: Number(point.longitude),
                    }}
                  >
                      <MarkerImageContainer>
                          <MarkerImage source={{
                              uri: point.image_url
                            }} />
                          <MarkerText>{point.name}</MarkerText>
                      </MarkerImageContainer>
                  </Marker>
              ))}
            </Map>
          )}
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20}}
        >          
          {items.map(item => (
            <Item key={item.id} 
                  onPress={() => handleSelectedItem(item.id)}
                  activeOpacity={0.6}
                  isSelected={ selectedItems.includes(item.id) }
                >
                  <SvgUri width={42}  height={42} uri={item.url_image} />
                  <ItemText>{item.title}</ItemText>
              </Item>
          ))}
           
        </ScrollView>
  
      </ItemsContainer>
</>
)}

export default Points;