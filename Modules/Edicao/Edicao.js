import React, {Component} from 'react';
import styles from './Style';
import {View, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather'

class Edicao extends Component{

    constructor(props){
        super(props);  
            this.state = {
                nome: this.props.route.params.contato.nome,
                telefone: this.props.route.params.contato.telefone,
                endereco: this.props.route.params.contato.endereco,
            }
    }
 
    setNovoNome = (novonome) => {
        this.setState({nome:novonome});
        
    }

    setTelefone = (novotelefone) => {
        this.setState({telefone:novotelefone});
        
    }
    
    setEndereco = (novoendereco) => {
        this.setState({endereco:novoendereco});
        
    }

    salvar = () => {
     
        let indicador = this.props.route.params.indicador;
        let nome,endereco,telefone = this.state;
        let contatos = this.props.route.params.contatos
        
        if(contatos[indicador]){
            contatos[indicador] = {nome,endereco,telefone}
            contatos[indicador] = this.state;
            AsyncStorage.setItem('contatos', JSON.stringify(contatos));
            this.setState({contatos});
        }
        
        this.props.navigation.navigate('Contatos')
            
    }

    render(){

        return(
            <View style={styles.cadastro}>
                
                <View style={styles.caixa}> 
                    <Icon name="user" style={{fontSize:18, color: '#0a85ff', margin: 15}}>      </Icon>
                    <TextInput   defaultValue={this.props.route.params.contato.nome} placeholder={'Digite o nome do contato'}  onChangeText={this.setNovoNome}/>
                </View>
                               
                <View style={styles.caixa}> 
                    <Icon name="phone" style={{fontSize:18, color: '#0a85ff', margin: 15}}>      </Icon>
                    <TextInput defaultValue={this.props.route.params.contato.telefone} placeholder={'Número de telefone'} keyboardType='numeric' onChangeText={this.setTelefone} />
                </View>
            
                <View style={styles.caixa}> 
                    <Icon name="home" style={{fontSize:18, color: '#0a85ff', margin: 15}}>      </Icon>
                    <TextInput defaultValue={this.props.route.params.contato.endereco} placeholder={'Endereço'} onChangeText={this.setEndereco}/>
                </View>
          
                <View >
                    <TouchableOpacity style={styles.botao} activeOpacity={0.4}  onPress={() => this.salvar()}>
                        <Icon name="save" style={styles.salva}  ></Icon>
                    </TouchableOpacity>
                </View>
                           
            </View>
        );
    }
};
    

export default Edicao;

