import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import {Container, 
        ButtonIcon,
        ImageContainer,
        PointImage,
        PointName,
        PointItemsDescription,
        PointAddress,
        AddressTitle,
        AddressDescription,
        ButtonsContainer,
        ContactButton,
        ButtonText
       } from './styles';
import { Linking } from 'react-native';

interface RouteParams {
  point_id: string;
}



interface Data {
  point: {
    name: string;
    image_url: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState<Data>({} as Data);

  const routeParams = route.params as RouteParams;

  function handleNavigateBack() {
    navigation.goBack();
  }

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`)
      .then((response) => {
        setData(response.data);
      })
  })

  if(!data.point) {
    return null;
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [data.point.email],
    })
  }

  function handleWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse na coleta de resíduos!`)
  }

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
    <ImageContainer>
        <PointImage source={{
            uri: data.point.image_url
        }} />
    </ImageContainer>

    <PointName>Colectoria</PointName>
    <PointItemsDescription>
        {data.items.map(item => item.title).join(', ')}
    </PointItemsDescription>
    
    <PointAddress>
        <AddressTitle>Endereço</AddressTitle>
        <AddressDescription>{data.point.city}, {data.point.uf}</AddressDescription>
    </PointAddress>
  </Container>

  <ButtonsContainer>
      <ContactButton onPress={handleWhatsapp}>
          <FontAwesome 
              name="whatsapp" 
              size={20} 
              color="#fff"
            />
          <ButtonText>Whatsapp</ButtonText>
      </ContactButton>
      <ContactButton onPress={handleComposeMail}>
        <Icon 
            name="mail" 
            size={20} 
            color="#fff"
          />
        <ButtonText>E-mail</ButtonText>
      </ContactButton>
  </ButtonsContainer>
</>
)}

export default Detail;