import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from '../Modules/Cadastro/Cadastro';
import Detalhes from '../Modules/Detalhes/Detalhes';
import Contatos from '../Modules/Contatos/Contatos';
import Edicao from '../Modules/Edicao/Edicao';

const Stack = createStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen  options={optionsContato} name={'Contatos'} component={Contatos}/>
                <Stack.Screen  options={optionsCadastro} name={'Cadastro'} component={Cadastro}/>
                <Stack.Screen  options={optionsDetalhe} name={'Detalhes'} component={Detalhes}/>
                <Stack.Screen  options={optionsEdit} name={'Edicao'} component={Edicao}/>    

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const optionsCadastro = {
    headerTitle: 'Novo Contato',
    headerStyle:{
        backgroundColor: '#dedede'
    },
    headerTitleStyle:{
        color: '#0a85ff'
    }
}

const optionsDetalhe = {
    headerTitle: 'Detalhes do Contato',
    headerStyle:{
        backgroundColor: '#dedede'
    },
    headerTitleStyle:{
        color: '#0a85ff'
    }
}

const optionsContato = {
    headerTitle: 'Contatos',
    headerStyle:{
        backgroundColor: '#dedede'
    },
    headerTitleStyle:{
        color: '#0a85ff'
    }
}

const optionsEdit = {
    headerTitle: 'Editar Contato ',
    headerStyle:{
        backgroundColor: '#dedede'
    },
    headerTitleStyle:{
        color: '#0a85ff'
    }
}


export default Navigator;