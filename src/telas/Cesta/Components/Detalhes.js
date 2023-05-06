import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome}>Cesta de verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda para sua sozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({
    imagemFazenda: {
        width: 32,
        height: 32,

    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,   
        fontWeight: "bold"
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,

    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 19,
        lineHeight: 26,
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
   

})