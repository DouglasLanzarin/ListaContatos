import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    caixa: {
        borderColor: '#0a85ff',
        borderWidth: 0.5,
        marginHorizontal: 5,
        marginTop: 15,
        padding:5,
        backgroundColor: '#e6e6e6',
        borderRadius: 15,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    cadastro: {
        flex: 1,
        backgroundColor: '#d1d1d1'
    },
 
    botao: {
        backgroundColor: '#0a85ff',
        borderColor: '#58D3F7',
        borderWidth: 2,
        padding: 10,
        marginTop: 30,
        borderRadius:20,
        alignSelf: 'center',
        width: 100,
        marginRight: 5

        
    },
   
    salva:{
        textAlign: 'center',
        color: 'white',
        fontSize:20
    }
});

export default styles;