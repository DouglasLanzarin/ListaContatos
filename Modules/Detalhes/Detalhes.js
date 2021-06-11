import React, {Component} from 'react';
import styles from './Style';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

class Detalhes extends Component{

    constructor(props){
        super(props);
    }
    
    render(){

        let params = this.props.route.params;

        return(

            <View style={styles.container}>
                
                <View style={{flex: 1.3}}>
                    <Text style={styles.textonome}>{params.nome}</Text>
                </View>
                <View style={{flex:0.4}}>               
                    <Text style={styles.caixas}> <Icon name="phone" style={{fontSize:18, color: '#0a85ff'}}>      </Icon>{params.telefone}</Text>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.caixas}> <Icon name="home" style={{fontSize:18, color: '#0a85ff'}}>      </Icon>{params.endereco}</Text>
                </View>
                
            </View>
        );
    }
}

export default Detalhes;