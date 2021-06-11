import React, {Component} from 'react';
import {View} from 'react-native';
import Navigator from '../../Navigator/Navigator';
import styles from './Style';

class Index extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Navigator/>
            </View>
        );
    }
};

export default Index;