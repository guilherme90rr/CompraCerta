import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";
import logo from '../../../../assets/logo.png';


export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco}) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
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