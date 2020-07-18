import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

import {Container, 
        Logo, 
        Content, 
        Title, 
        Description, 
        SelectContainer,
        Footer, 
        Button,
        ButtonIcon,
        ButtonText } from './styles';

interface OptionsSelect {
    label: string;
    value: string;
}

interface ibgeUFs {
  sigla: string;
}

interface ibgeCities {
  nome: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [ufs, setUfs] = useState<OptionsSelect[]>([]);
  const [selectedUf, setSelectedUf] = useState<string | null>();
  const [cities, setCities] = useState<OptionsSelect[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>();

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity,
    });
  }

  useEffect(() => {
     axios.get<ibgeUFs[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => {
          const ufsInitials = response.data.map(uf => (
            {
              label: uf.sigla,
              value: uf.sigla
            }
          )).sort((a,b) => {
            if(a.label > b.label) {
              return 1;
            } 
            if(a.label < b.label) {
              return -1;
            }
            return 0;
          })
          setUfs(ufsInitials);
        });
  },[]);

  useEffect(() => {
    if(selectedUf !== undefined && selectedUf) {
      axios.get<ibgeCities[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        setCities(
          response.data.map( city => (
            {
              label: city.nome,
              value: city.nome
            }
          )).sort((a,b) => {
            if(a.label > b.label) {
              return 1;
            } 
            if(a.label < b.label) {
              return -1;
            }
            return 0;
          })
        )
      })
    }

    
    
  },[selectedUf]);

  return (
  <>
    <Container
      source={require('../../assets/home-background.png')}
      imageStyle={{ width: 274, height: 368}}
    >
      <Content>
        <Logo
          source={require('../../assets/logo.png')}
        />
        <Title>Seu marketplace de coleta de resíduos</Title>
        <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma
          eficiente
        </Description>
               
      </Content>
    </Container>
    <SelectContainer>
        <RNPickerSelect
                    onValueChange={(value) => setSelectedUf(value)}
                    items={ufs}  
                    placeholder={{
                      label: 'Selecione o estado',
                      fontSize: 14,
                      color: '#A0A0B2',
                    }} 
                    style={{
                      viewContainer: {
                        top: 20,
                        backgroundColor: '#fff',
                        borderRadius: 8,
                      },
                      

                    }}         
            />

            <RNPickerSelect
                    onValueChange={(value) => setSelectedCity(value)}
                    items={cities}  
                    placeholder={{
                      label: 'Selecione a cidade',
                      fontSize: 14,
                      color: '#A0A0B2',
                    }} 
                    style={{
                      viewContainer: {
                        top: 20,
                        backgroundColor: '#fff',
                        marginTop: 10,
                        borderRadius: 8,
                      },
                      
                    }}                
            />
    </SelectContainer>
    <Footer>
        <Button 
          onPress={handleNavigateToPoints}
        >
          <ButtonIcon>
            <Icon name="arrow-right" color="#FFF" size={24} />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
  </Footer>
  </>
  )
}

export default Home;
