import React, {useState} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Tela = styled.View`
  flex: 1;
`

const Cabecalho = styled.View`
  background-color: #1827AC;
  height: 85px;
  padding: 0 30px;
  padding-top: 20px;
;
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
const Destaque = styled.View`
  background-color: black;
  align-items: center;
`
const Poster = styled.Image`
  height: 400px;
  width: 300px;
`

const Info = styled.View`
  background-color: #fff;
`

const Titulo = styled.Text`
  font-size: 28px;
  margin: 0 auto;
`
const Linha1 = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`
const Linha2 = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`
const Linha3 = styled.View`
  padding: 0 25px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Texto = styled.Text`
  font-size: 15px;
`

export default function App() {
  const [nome, alteraNome] = useState('')
  const [filme, alteraFilme] = useState({})

  const buscarFilme = async () => {
    const requisicao = await fetch(`https://www.omdbapi.com/?apikey=36944858&t=${nome}`, );
    const resposta = await requisicao.json()
    alteraFilme(resposta);
  }

  return (
    <Tela >
      <Cabecalho>
        <Busca placeholder="Digite o nome do filme..." value={nome} onChangeText={ (filme) => {alteraNome(filme)}} placeholderTextColor="#cecece"/>
        <Botao activeOpacity={0.3} onPress={buscarFilme}>
          <BuscaImagem source={require('./assets/icons8-pesquisar-50.png')}/>
        </Botao>
      </Cabecalho>
      <Destaque>
        <Poster source={{uri: filme.Poster}} />
      </Destaque>     
      <Info>
        <Titulo>{filme.Title}</Titulo>
        <Linha1>
          <Texto>Ano: {filme.Year}</Texto>
          <Texto>Duração: {filme.Runtime}</Texto>
          <Texto>País: {filme.Country}</Texto>
        </Linha1>
        <Linha2>
          <Texto>Gênero: {filme.Genre}</Texto>
          <Texto>Pontuação: {filme.imdbRating}</Texto>
        </Linha2>
        <Linha3>
          <Texto>Enredo: {filme.Plot}</Texto>
        </Linha3>
      </Info>
    </Tela>
  );
}