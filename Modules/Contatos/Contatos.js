import React, {Component} from 'react';
import styles from './Style';
import {View, ScrollView, Text, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

class Contatos extends Component{

    state = {
        contatos: []
    }

    constructor(props){
        super(props);
        this.getContatos();
        
    }

    getContatos = () => {
        AsyncStorage.getItem('contatos').then((contatos)=>{
            if(contatos){
                contatos = JSON.parse(contatos);
            }else{
                contatos = [];
            }
            this.setState({contatos});
        })  
    }

    ircadastro = () => {
        this.props.navigation.navigate('Cadastro')
    }

    deletarcontato = (indicador,contato) => {
        
        Alert.alert(
            "Ações do Contato",
            "O que deseja fazer com o contato?",
            [
            
              {
                text: "Editar Contato",
                
                
                onPress: () => {
                    let {contatos} = this.state;
                    this.props.navigation.navigate('Edicao',  {contato,indicador, contatos})
                }
              },
              {
                text: "Excluir Contato",
                onPress: () => {
                    Alert.alert(
                        "Excluir Contato",
                        "Deseja realmente excluir o contato?",
                        [
                          {
                            text: "Não",
                            onPress: () => {},
                          },
                          { 
                            text: "Sim", onPress: () => {
                            let {contatos} = this.state;
                            contatos.splice(indicador, 1);
                            AsyncStorage.setItem('contatos', JSON.stringify(contatos));
                            AsyncStorage.removeItem('contatos[indicador]');
                            this.setState({contatos});
                          } }
                        ]
                      );
                },
              },
             
            ]
          );
    }

    render(){
        this.getContatos();
        let {contatos} = this.state;
        return(
            
            <View style={styles.container} >
               
                <ScrollView>
                <View>
                    <TouchableOpacity style={styles.novocontato} activeOpacity={0.4} onPress={this.ircadastro}>
                        <Text style={styles.textobotao}> <Icon name="user-plus" style={{fontSize:18, color: 'white'}}> </Icon>ADICIONAR CONTATO</Text>
                    </TouchableOpacity>
                </View>
                    <View>
                        {   
                            contatos.map((contato,indicador)=>
                            <Text 
                                  onLongPress={()=>this.deletarcontato(indicador,contato)}
                                  onPress={()=> this.props.navigation.navigate('Detalhes', contato)} 
                                  key={indicador} style={styles.caixacontato}>
                            {contato.nome}</Text> )
                        }
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default Contatos;