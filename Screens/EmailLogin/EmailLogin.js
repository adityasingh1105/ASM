import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import styles from './EmailLoginStyle'
import * as IMG_CONST from './assets'
import Dashboard from '../Dashboard/Dashboard'


export default class EmailLogin extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { pswrdShow: false };
        // this.handleClick = this.handleClick.bind(this);
    }

    renderLogin = () => {
        return (
            <View style={styles.LoginMainView}>
                <Image source={IMG_CONST.LoginImg} style={styles.logImg} />
                <View style={styles.emailInput}>
                    <Text style={styles.emailTxt}>Email Address</Text>
                    <View style={styles.emailTxtInputView}>
                        <TextInput placeholder='Email' />
                    </View>
                    <Text style={styles.emailTxt}>Passworuud</Text>
                    <View style={styles.emailTxtInputView}>
                        <TextInput placeholder='Password' secureTextEntry={this.state.pswrdShow ? false : true} />
                        <TouchableOpacity
                            onPress={() => this.setState({ pswrdShow: !this.state.pswrdShow })}>
                            {this.state.pswrdShow ?
                                <Image source={IMG_CONST.LoginImg} style={styles.PswrdView} /> :
                                <Image source={IMG_CONST.PswrdView} style={styles.PswrdView} />
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate("Dashboard")}
                    >
                        <Text style={styles.loginBtnTxt}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }


    render() {
        return (
            <SafeAreaView
                style={styles.container}
            >
                <ImageBackground
                    style={styles.imgBg}
                    source={require('./assets/background.png')}>
                    {this.renderLogin()}
                </ImageBackground>
            </SafeAreaView>
        )
    }
}