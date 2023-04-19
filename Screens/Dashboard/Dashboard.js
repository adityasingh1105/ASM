import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './DashboardStyle'
import * as IMG_CONST from './assets'
import Scale from "../../Scale";
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            remdArray: [{
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
            lmsView: false,
            lmsData: [
                {
                    id: 1, nameValue: "Apply Leave",
                },
                {
                    id: 2, nameValue: "Leave Balance",
                },
                {
                    id: 3, nameValue: "Leave History",
                },
                {
                    id: 4, nameValue: "Cancel Leave",
                },
                {
                    id: 5, nameValue: "Holiday",
                },
            ],
            compOffData: [
                {
                    id: 1, nameValue: "Comp Off List",
                },
                {
                    id: 2, nameValue: "Apply Comp Off",
                },
                {
                    id: 3, nameValue: "Cancel Comp Off",
                },

            ],
            compOffView: false,
            wfhData: [
                {
                    id: 1, nameValue: "WFH History",
                },
                {
                    id: 2, nameValue: "Apply WFH",
                },
                {
                    id: 3, nameValue: "Cancel WFH",
                },

            ],
            wfhView: false
        };
    }
    onLmsPress = (item) => {
        item.id == 1 ?
            this.props.navigation.navigate("ApplyLeaves") :
            item.id == 2 ?
                this.props.navigation.navigate("LeaveBalance") :
                item.id == 3 ?
                    this.props.navigation.navigate("LeavesHistory") :
                    item.id == 4 ?
                        this.props.navigation.navigate("CancelLeave") :
                        item.id == 5 ?
                            this.props.navigation.navigate("LeavesHistory") :
                            null

    }

    renderTopBar = () => {
        return (
            <View style={styles.topBarView}>
                <Text style={styles.topTxt}>ASM</Text>
                <TouchableOpacity>
                    <Image source={IMG_CONST.notificationsCount}
                        style={styles.notificationImg} />
                </TouchableOpacity>
            </View >
        )
    }
    renderProfie = () => {
        return (
            <View style={styles.profileView}>
                <View style={styles.profileInnerView}>
                    <View style={styles.profileTopView}>
                        <TouchableOpacity style={styles.profileImgView}>
                            <Image style={styles.profileImg} source={IMG_CONST.profileImg} />
                        </TouchableOpacity>
                        <View style={styles.profileTxtView}>
                            <Text style={styles.userTxt}>John Williams</Text>
                            <Text style={styles.empTxt}> Employee ID: <Text style={styles.idTxt}>001</Text></Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("EmailLogin")}>
                            <Image source={IMG_CONST.logout} style={styles.logoutImg} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.timeView}>
                        <Text style={styles.punchInTxt}>Today's Punch In Time:</Text>
                        <View style={styles.timeImgView}>
                            <Image source={IMG_CONST.timer} style={styles.timerImg} />
                            <Text style={styles.timeTxt}>10:00 AM</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    renderWeeklyRecord = () => {
        return (
            <View style={styles.weeklyRecordView}>
                {/* <Image source={IMG_CONST.demo} style={styles.weeklyRecordImg} /> */}
                <ImageBackground source={IMG_CONST.timeBgImg} >
                    <View style={styles.weeklynnerView}>
                        <View style={styles.weeklyInnerTopView}>
                            <Text style={styles.weeklyTxt}>Weekly Recorded Hours</Text>
                            <Text style={styles.weeklyHrsTxt}>37.6/47.5 hrs</Text>
                        </View>
                        <View style={styles.weeklyInnerBottomView}>
                            <Text style={styles.dateTxt}>From 02-05-2022 to 06-05-2022</Text>
                            <TouchableOpacity style={styles.hrsCountBtn}>
                                <Text style={styles.hrsCountTxt}>-9.5 hrs</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    renderReminderFlatlist = () => {
        return (
            <View>
                <FlatList
                    style={{
                        marginVertical: Scale(10),
                        marginHorizontal: Scale(20),
                        height: Scale(150),
                    }}
                    data={this.state.remdArray}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => this.renderReminderFlatlistCell(item)}
                />
            </View>
        )
    }

    renderReminderFlatlistCell = (item) => {
        return (
            <TouchableOpacity style={styles.remdSingleBlock}>
                <View style={styles.countIcon}>
                    <Text style={styles.countTxt}>1</Text>
                </View>
                <Image style={styles.remdImg} source={item.eventImg} />
                <Text style={styles.remdTxt}>{item.event}</Text>
            </TouchableOpacity>
        )
    }
    renderOption = () => {
        return (
            <View style={{ marginHorizontal: Scale(20) }}>
                <TouchableOpacity style={styles.optionBtn}
                    onPress={() => this.props.navigation.navigate("HrPolicies")}>
                    <Image style={styles.optionImg} source={IMG_CONST.hrPoliciesImg} />
                    <Text style={styles.optionTxt}>HR Policies</Text>
                    <View style={styles.arrowImgBtn}>
                        <Image style={styles.arrowImg} source={IMG_CONST.arrowImg} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={this.state.lmsView ? styles.lmsBTnSecond : styles.optionBtn}
                    onPress={() => this.setState({ lmsView: !this.state.lmsView })}>
                    <Image style={styles.optionImg} source={IMG_CONST.LmsImg} />
                    <Text style={styles.optionTxt}>LMS</Text>
                    <View style={styles.addImgBtn}>
                        <Image style={styles.arrowImg} source={IMG_CONST.addImg} />
                    </View>
                </TouchableOpacity>
                {
                    this.state.lmsView ?
                        this.rednerLmsFlatlist()
                        : null
                }

                <TouchableOpacity style={styles.optionBtn}>
                    <Image style={styles.optionImg} source={IMG_CONST.resetPswrd} />
                    <Text style={styles.optionTxt}>Reset Password</Text>
                    <View style={styles.arrowImgBtn}>
                        <Image style={styles.arrowImg} source={IMG_CONST.arrowImg} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    <Image style={styles.optionImg} source={IMG_CONST.InOutImg} />
                    <Text style={styles.optionTxt}>In/Out Summary</Text>
                    <View style={styles.arrowImgBtn}>
                        <Image style={styles.arrowImg} source={IMG_CONST.arrowImg} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={this.state.compOffView ? styles.lmsBTnSecond : styles.optionBtn}
                    onPress={() => this.setState({ compOffView: !this.state.compOffView })}>
                    <Image style={styles.optionImg} source={IMG_CONST.campOff} />
                    <Text style={styles.optionTxt}>Comp Off</Text>
                    <View style={styles.addImgBtn}>
                        <Image style={styles.arrowImg} source={IMG_CONST.addImg} />
                    </View>
                </TouchableOpacity>
                {
                    this.state.compOffView ?
                        this.rednerCompOffDataFlatlist()
                        : null
                }

                <TouchableOpacity
                    style={this.state.wfhView ? styles.lmsBTnSecond : styles.optionBtn}
                    onPress={() => this.setState({ wfhView: !this.state.wfhView })}>
                    <Image style={styles.optionImg} source={IMG_CONST.WfhImg} />
                    <Text style={styles.optionTxt}>WFH</Text>
                    <View style={styles.addImgBtn}>
                        <Image style={styles.arrowImg} source={IMG_CONST.addImg} />
                    </View>
                </TouchableOpacity>
                {
                    this.state.wfhView ?
                        this.rednerWfhFlatlist()
                        : null
                }
            </View >
        )
    }

    rednerLmsFlatlist = () => {
        return (
            <View style={styles.lmsMainView}>
                <FlatList
                    style={{}}
                    data={this.state.lmsData}
                    renderItem={({ item }) => this.rednerLmsFlatlistCell(item)}
                />
            </View>
        )
    }

    rednerLmsFlatlistCell = (item) => {
        return (
            <TouchableOpacity
                style={styles.lmsInnerBtn}
                onPress={() => this.onLmsPress(item)}
            >
                <Text>{item.nameValue}</Text>
                <View style={styles.lmsInnerArrowBtn}>
                    <Image style={styles.lmsInnerArrowBtnImg} source={IMG_CONST.arrowImg} />
                </View>
            </TouchableOpacity >
        )
    }
    rednerCompOffDataFlatlist = () => {
        return (
            <View style={styles.lmsMainView}>
                <FlatList
                    style={{}}
                    data={this.state.compOffData}
                    renderItem={({ item }) => this.rednerCompOffDataFlatlistCell(item)}
                />
            </View>
        )
    }

    rednerCompOffDataFlatlistCell = (item) => {
        return (
            <TouchableOpacity
                style={styles.lmsInnerBtn}>
                <Text>{item.nameValue}</Text>
                <View style={styles.lmsInnerArrowBtn}>
                    <Image style={styles.lmsInnerArrowBtnImg} source={IMG_CONST.arrowImg} />
                </View>
            </TouchableOpacity>
        )
    }
    rednerWfhFlatlist = () => {
        return (
            <View style={styles.lmsMainView}>
                <FlatList
                    style={{}}
                    data={this.state.wfhData}
                    renderItem={({ item }) => this.rednerWfhFlatlistCell(item)}
                />
            </View>
        )
    }

    rednerWfhFlatlistCell = (item) => {
        return (
            <TouchableOpacity
                style={styles.lmsInnerBtn}>
                <Text>{item.nameValue}</Text>
                <View style={styles.lmsInnerArrowBtn}>
                    <Image style={styles.lmsInnerArrowBtnImg} source={IMG_CONST.arrowImg} />
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={IMG_CONST.background} style={styles.imgBg} >
                    <ScrollView style={{ flex: 1,  }}>
                        {this.renderTopBar()}
                        {this.renderProfie()}
                        {this.renderWeeklyRecord()}
                        {this.renderReminderFlatlist()}
                        {this.renderOption()}
                    </ScrollView >
                </ImageBackground >
            </SafeAreaView>

        )
    }
}
