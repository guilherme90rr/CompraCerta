import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },

    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda para sua sozinha",
        preco: "R$ 45,00",
        botao: "Comprar",
    },

    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            },
        ]
    }
}

export default cesta;