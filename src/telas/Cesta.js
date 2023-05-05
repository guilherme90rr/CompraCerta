import React from 'react';
import { Image, StyleSheet , View, Dimensions, Text} from 'react-native';
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width

export default function Cesta(){
  return<> 
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe da cesta</Text>
    <View  style={estilos.cesta}>
      <Text style={estilos.nome}>Cesta de verduras</Text>
      <Text>Jenny Jack Farm</Text>
      <Text>Uma cesta com produtos selecionados cuidadosamente da fazenda para sua sozinha</Text>
      <Text>R$40,00</Text>
    </View>
  </>  
}
const estilos = StyleSheet.create ({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
  },

  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold"


  }
})
  