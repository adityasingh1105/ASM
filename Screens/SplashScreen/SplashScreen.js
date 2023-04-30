import { Text, View, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import styles from './SplashScreenStyle'

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("ChatsID")
        }, 1000)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={styles.imgBg}
                    source={require('./assets/background.png')}>
                    <Text style={styles.centerTxt}>A S M</Text>
                </ImageBackground>
            </View>
        )
    }
}