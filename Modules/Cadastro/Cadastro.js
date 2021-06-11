import React, {Component} from 'react';
import styles from './Style';
import {View, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather'

class Cadastro extends Component{

    state = {
        nome: null,
        telefone: null,
        endereco: null
    }

    getNome = (nome) => {
        this.setState({nome:nome});
        console.log(nome);
    }

    getTelefone = (telefone) => {
        this.setState({telefone:telefone});
        console.log(telefone);
    }

    getEndereco = (endereco) => {
        this.setState({endereco:endereco});
        console.log(endereco);
    }

    sairaosalvar = () => {
        this.props.navigation.navigate('Contatos');
    }

    salvar = () => {
        let {nome, telefone, endereco} = this.state;
       
        AsyncStorage.getItem('contatos').then((contatos) => {
            
            if(contatos){
                contatos = JSON.parse(contatos);
            }
            else{
                contatos = [];
            }

            contatos.push({nome:nome, telefone:telefone, endereco:endereco})
            AsyncStorage.setItem('contatos', JSON.stringify(contatos));
                
        })
        
        this.sairaosalvar();
        
    }

    render(){

        let {nome, telefone, endereco} = this.state;

        return(
            <View style={styles.cadastro}>
                
                <View style={styles.caixa}> 
                    <Icon name="user" style={{fontSize:18, color: '#0a85ff', margin: 15}}>      </Icon>
                    <TextInput value={nome} placeholder={'Digite o nome do contato'} onChangeText={this.getNome} />
                </View>
                
                
                <View style={styles.caixa}> 
                    <Icon name="phone" style={{fontSize:18, color: '#0a85ff', margin: 15}}>      </Icon>
                    <TextInput value={telefone} placeholder={'Número de telefone'} keyboardType='numeric' onChangeText={this.getTelefone} />
                </View>
                

                <View style={styles.caixa}> 
                    <Icon name="home" style={{fontSize:18, color: '#0a85ff', margin: 15}}>      </Icon>
                    <TextInput value={endereco} placeholder={'Endereço'} onChangeText={this.getEndereco}/>
                </View>


                <View style={styles.gridbotao}>
                    <TouchableOpacity style={styles.botao} activeOpacity={0.4} onPress={this.salvar} >
                        <Icon name="save" style={styles.salva} ></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoum} activeOpacity={0.4} onPress={()=>this.setState({nome:'', telefone:'', endereco:''})}>
                        <Icon name="delete" style={styles.cancela}></Icon>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
};

export default Cadastro;