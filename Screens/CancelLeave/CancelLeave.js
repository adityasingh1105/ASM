import { Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import styles from "./CancelLeaveStyles";
import * as IMG_CONST from "./assets";
import Scale from '../../Scale';


export default class CancelLeave extends Component {
    renderTopBar = () => {
        return (
            <View style={styles.topBarMainView}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Image source={IMG_CONST.BackImg} style={styles.backImg} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Cancel Leave</Text>
            </View>
        );
    };
    renderSubmitBtn = () => {
        return (
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitTxt}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkLeaveBtn} >
                    <Text style={styles.checkLeaveTxt}>Check Leave Balance</Text>
                </TouchableOpacity>
            </View >
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderTopBar()}
                {this.renderSubmitBtn()}
            </SafeAreaView>
        )
    }
}