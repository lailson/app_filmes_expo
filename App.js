import React, {useState} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Tela = styled.View`
  flex: 1;
`

const Cabecalho = styled.View`
  background-color: #1827AC;
  height: 65px;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Busca = styled.TextInput`
  color: #fff;
  font-size: 20px;
`

const Botao = styled.TouchableOpacity``

const BuscaImagem = styled.Image`
  width: 30px;
  height: 30px;
`


export default function App() {
  const [nome, alteraNome] = useState('')

  return (
    <Tela >
      <Cabecalho>
        <Busca placeholder="Digite o nome do filme..." value={nome} onChangeText={ (filme) => {alteraNome}} placeholderTextColor="#cecece"/>
        <Botao>
          <BuscaImagem source={require('./assets/icons8-pesquisar-50.png')}/>
        </Botao>
      </Cabecalho>
      
    </Tela>
  );
}