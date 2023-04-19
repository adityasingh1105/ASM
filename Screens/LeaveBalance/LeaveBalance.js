import { Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import styles from "./LeaveBalanceStyles";
import * as IMG_CONST from "./assets";
import Scale from '../../Scale';


export default class ApplyLeaves extends Component {
    renderTopBar = () => {
        return (
            <View style={styles.topBarMainView}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Image source={IMG_CONST.BackImg} style={styles.backImg} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Leave Balance</Text>
            </View>
        );
    };
    renderProfile = () => {
        return (
            <View style={styles.profileMainView}>
                <View style={styles.userTxtView}>
                    <Text style={styles.userTxt}>Josephine Williams</Text>
                    <View style={styles.txtView}>
                        <Text style={styles.empIdTxt}>Employee ID: </Text>
                        <Text>001</Text>
                    </View>
                </View>
                <View style={styles.circleView}>
                    <Text style={styles.leaveBalanceTxt}>05</Text>
                    <Text style={styles.leaveTxt}>Leaves Available</Text>
                </View>
            </View >
        )
    }
    renderSubmitBtn = () => {
        return (
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitTxt}>APPLY LEAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkLeaveBtn} >
                    <Text style={styles.checkLeaveTxt}>Leave History</Text>
                </TouchableOpacity>
            </View >
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderTopBar()}
                {this.renderProfile()}
                {this.renderSubmitBtn()}
            </SafeAreaView>
        )
    }
}