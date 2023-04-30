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
                dayTitle: "16 May 2022, Thursday",
                statusImg: IMG_CONST.pendingStatusImg,
                statusTitle: "Pending",
                leaveDetails: "Full-day leave",
                appliedDay: "Applied on 12 May 2022",
                LeaveType: "Personal"
            },
            {
                id: 2,
                dayTitle: "16 May 2022, Thursday",
                statusImg: IMG_CONST.pendingStatusImg,
                statusTitle: "Pending",
                leaveDetails: "Full-day leave",
                appliedDay: "Applied on 12 May 2022",
                LeaveType: "Personal"
            },
            {
                id: 3,
                dayTitle: "16 May 2022, Thursday",
                statusImg: IMG_CONST.pendingStatusImg,
                statusTitle: "Pending",
                leaveDetails: "Full-day leave",
                appliedDay: "Applied on 12 May 2022",
                LeaveType: "Personal"
            },
            {
                id: 4,
                dayTitle: "16 May 2022, Thursday",
                statusImg: IMG_CONST.pendingStatusImg,
                statusTitle: "Pending",
                leaveDetails: "Full-day leave",
                appliedDay: "Applied on 12 May 2022",
                LeaveType: "Personal"
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
                style={{ marginTop: Scale(20) }}
                data={this.state.lmsData}
                renderItem={({ item }) => this.renderCancelLeaveCell(item)}
            />
            // </View>
        )
    }

    renderCancelLeaveCell = (item) => {
        return (
            <TouchableOpacity style={styles.mainBtn}>
                <View>
                    <Image source={IMG_CONST.radioSelectImg} style={styles.radioImg} />
                </View>
                <View style={styles.insideView}>
                    <View style={styles.innerTxtView}>
                        <Text style={styles.timeTxt}>{item.dayTitle}</Text>
                        <View style={styles.statusView}>
                            <Image source={item.statusImg} style={styles.statusImg} />
                            <Text style={styles.statusTxt}>{item.statusTitle}</Text>
                        </View>
                    </View>
                    <Text style={styles.titleTxt}>{item.leaveDetails} . {item.appliedDay} . {item.LeaveType}</Text>
                </View>
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
