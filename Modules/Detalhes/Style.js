import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
    },
    caixas: {
        borderWidth: 0.5,
        borderColor: '#0a85ff',
        marginHorizontal: 10,
        borderRadius: 20,
        marginBottom: 15,
        padding: 20,
        textAlign: 'left',
        backgroundColor: '#dedede',
        flexDirection: "row",
        flexWrap: "wrap",
    },
    textonome: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        color: '#585858'
    },
    
})

export default styles;