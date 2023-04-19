import { Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import styles from "./ApplyLeavesStyles";
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
                <Text style={styles.headerTxt}>Apply Leave</Text>
            </View>
        );
    };
    renderLeaveDetails = () => {
        return (
            <View style={styles.mainView}>
                <View>
                    <Text style={styles.txtStyle}>Select Leave Type*</Text>
                    <TouchableOpacity style={styles.leaveType}>
                        <Text></Text>
                        <Image source={IMG_CONST.downArrowImg} style={styles.downArrowImg} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={styles.txtStyle}>Leave From Date*</Text>
                        <TouchableOpacity style={styles.dateView}>
                            <Text></Text>
                            <Image source={IMG_CONST.calendar} style={styles.downArrowImg} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.txtStyle}>Leave To Date*</Text>
                        <TouchableOpacity style={styles.dateView}>
                            <Text></Text>
                            <Image source={IMG_CONST.calendar} style={styles.downArrowImg} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.txtStyle}>Select Project Managers</Text>
                    <TouchableOpacity style={styles.leaveType}>
                        <Text></Text>
                        <Image source={IMG_CONST.downArrowImg} style={styles.downArrowImg} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.txtStyle}>Select Leave Type*</Text>
                    <TextInput style={styles.txtInputReason} />
                </View>
            </View>
        )
    }
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
                {this.renderLeaveDetails()}
                {this.renderSubmitBtn()}
            </SafeAreaView>
        )
    }
}