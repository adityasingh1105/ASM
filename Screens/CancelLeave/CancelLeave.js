import { Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from "./CancelLeaveStyles";
import * as IMG_CONST from "./assets";
import Scale from '../../Scale';


export default class CancelLeave extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            lmsData: [{
                id: 1,
                event: "Today's Birthday",
                eventImg: IMG_CONST.birthdayImg
            },
            {
                id: 2,
                event: "Upcoming Birthdays",
                eventImg: IMG_CONST.upcomingBirthdayImg
            },
            {
                id: 3,
                event: "Three Years Completion",
                eventImg: IMG_CONST.threeYearsImg
            },
            {
                id: 4,
                event: "Five Years Completion",
                eventImg: IMG_CONST.threeYearsImg
            }
            ],
        }
    }
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
    renderCancelLeave = () => {
        return (
            // <View style={styles.lmsMainView}>
            <FlatList
                style={{}}
                data={this.state.lmsData}
                renderItem={({ item }) => this.renderCancelLeaveCell(item)}
            />
            // </View>
        )
    }

    renderCancelLeaveCell = (item) => {
        return (
            <TouchableOpacity style={styles.mainBtn}>
                <View><Image source={IMG_CONST.radioSelectImg} style={styles.radioImg} /></View>
                <View></View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderTopBar()}
                {this.renderCancelLeave()}
                {this.renderSubmitBtn()}
            </SafeAreaView>
        )
    }
}
