import { Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, Modal, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import styles from "./LeavesHistoryStyles";
import * as IMG_CONST from "./assets";
import Scale from '../../Scale';
import CheckBox from 'react-native-check-box'




export default class LeavesHistory extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            leaveArray: [
                {
                    id: 1,
                    event: "16 May 2022, Thursday",
                    status: "Approved"
                },
                {
                    id: 2,
                    event: "16 May 2022, Thursday",
                    status: "Pending"
                },
                {
                    id: 3,
                    event: "16 May 2022, Thursday",
                    status: "Rejected"
                },
                {
                    id: 4,
                    event: "16 May 2022, Thursday",
                    status: "Cancelled"
                },
                {
                    id: 5,
                    event: "16 May 2022, Thursday",
                    status: "Approved"
                },
                {
                    id: 6,
                    event: "16 May 2022, Thursday",
                    status: "Pending"
                },
                {
                    id: 7,
                    event: "16 May 2022, Thursday",
                    status: "Rejected"
                },
                {
                    id: 8,
                    event: "16 May 2022, Thursday",
                    status: "Cancelled"
                },
                {
                    id: 9,
                    event: "16 May 2022, Thursday",
                    status: "Approved"
                },
                {
                    id: 10,
                    event: "16 May 2022, Thursday",
                    status: "Pending"
                },
                {
                    id: 11,
                    event: "16 May 2022, Thursday",
                    status: "Rejected"
                },
                {
                    id: 12,
                    event: "16 May 2022, Thursday",
                    status: "Cancelled"
                }
            ],
            calenderArray: [
                {
                    id: 1,
                    monthName: "January",
                },
                {
                    id: 2,
                    monthName: "February",
                },
                {
                    id: 3,
                    monthName: "March",
                },
                {
                    id: 4,
                    monthName: "April",
                },
                {
                    id: 5,
                    monthName: "May",
                },
                {
                    id: 6,
                    monthName: "June",
                },
                {
                    id: 7,
                    monthName: "July",
                },
                {
                    id: 8,
                    monthName: "August",
                },
                {
                    id: 9,
                    monthName: "September",
                },
                {
                    id: 10,
                    monthName: "October",
                },
                {
                    id: 11,
                    monthName: "November",
                },
                {
                    id: 12,
                    monthName: "December",
                },
            ],
            yearsData: [
                {
                    id: 1,
                    years: 2020
                }, {
                    id: 2,
                    years: 2021
                }, {
                    id: 3,
                    years: 2022
                }, {
                    id: 4,
                    years: 2023
                }, {
                    id: 5,
                    years: 2024
                },
            ],
            statusData: [
                { id: 1, valueName: "All" },
                { id: 2, valueName: "Approved" },
                { id: 3, valueName: "Pending" },
                { id: 4, valueName: "Rejected" },
                { id: 5, valueName: "Cancelled" },
            ],
            filterModal: false
        }
    }
    // MultipleSelect = (items, index) => {
    //     const some = this.state.calenderArray
    //     const someIndex = this.state.calenderArray.findIndex((item) =>
    //         item.id === items.id
    //     )
    //     some[someIndex].selected = !some[someIndex].selected
    //     this.setState({ calenderArray: some })
    // }

    onClickbookingListSelect = (items) => {
        let check = this.state.calenderArray;
        let newIndex = this.state.calenderArray.findIndex((item) => item.id === items.id);
        check[newIndex].checked = !check[newIndex]?.checked;
        let date = check.map((element) => {
            if (element.id != items?.id) {
                element.checked = false
            }
            return element
        })
        this.setState({ calenderArray: date, selectedCollapse: -1 })
    };

    onYearsClick = (items) => {
        let check = this.state.yearsData;
        let newIndex = this.state.yearsData.findIndex((item) => item.id === items.id);
        check[newIndex].checked = !check[newIndex]?.checked;
        let date = check.map((element) => {
            if (element.id != items?.id) {
                element.checked = false
            }
            return element
        })
        this.setState({ yearsData: date, selectedCollapse: -1 })
    };
    statusCheckBox = (items) => {
        let check = this.state.statusData;
        let newIndex = this.state.statusData.findIndex((item) => item.id === items.id);
        check[newIndex].checked = !check[newIndex]?.checked;
        let date = check.map((element) => {
            if (element.id != items?.id) {
                element.checked = false
            }
            return element
        })
        this.setState({ statusData: date, selectedCollapse: -1 })
    };

    renderTopBar = () => {
        return (
            <View style={styles.topBarMainView}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Image source={IMG_CONST.BackImg} style={styles.backImg} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Leaves History</Text>
                <TouchableOpacity onPress={() => { this.setState({ filterModal: true }) }}>
                    <Image source={IMG_CONST.filterImg} style={styles.backImg} />
                </TouchableOpacity>

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
    renderContentFlatlist = () => {
        return (
            <FlatList
                style={styles.flatListStyle}
                showsVerticalScrollIndicator={false}
                data={this.state.leaveArray}
                renderItem={({ item }) => this.contentFlatListCell(item)}
            />
        )
    }
    contentFlatListCell = (item) => {
        return (
            <View style={styles.flatListView}>
                <View style={styles.dayTxtView}>
                    <Text style={styles.dayTxt}>16 May 2022, Thursday</Text>
                    <TouchableOpacity
                        style={
                            item.status == "Approved" ?
                                styles.statusApprovedBtn :
                                item.status == "Pending" ?
                                    styles.statusPendingBtn :
                                    item.status == "Rejected" ?
                                        styles.statusRejectedBtn :
                                        item.status == "Cancelled" ?
                                            styles.statusCancelledBtn : null
                        }>
                        <Image source={

                            item.status == "Approved" ?
                                IMG_CONST.approvedImg :
                                item.status == "Pending" ?
                                    IMG_CONST.pendingImg :
                                    item.status == "Rejected" ?
                                        IMG_CONST.rejectedImg :
                                        item.status == "Cancelled" ?
                                            IMG_CONST.canclledImg : null} style={styles.statusImg} />
                        <Text style={styles.statusApprovedBtnTxt}>{item.status}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.reasonTxt}>Full-day leave • Applied on 12 May 2022 • Personal</Text>
                </View>
            </View >
        )
    }
    renderContentFlatlist = () => {
        return (
            <FlatList
                style={styles.flatListStyle}
                showsVerticalScrollIndicator={false}
                data={this.state.leaveArray}
                renderItem={({ item }) => this.contentFlatListCell(item)}
            />
        )
    }
    contentFlatListCell = (item) => {
        return (
            <View style={styles.flatListView}>
                <View style={styles.dayTxtView}>
                    <Text style={styles.dayTxt}>16 May 2022, Thursday</Text>
                    <TouchableOpacity
                        style={
                            item.status == "Approved" ?
                                styles.statusApprovedBtn :
                                item.status == "Pending" ?
                                    styles.statusPendingBtn :
                                    item.status == "Rejected" ?
                                        styles.statusRejectedBtn :
                                        item.status == "Cancelled" ?
                                            styles.statusCancelledBtn : null
                        }>
                        <Image source={

                            item.status == "Approved" ?
                                IMG_CONST.approvedImg :
                                item.status == "Pending" ?
                                    IMG_CONST.pendingImg :
                                    item.status == "Rejected" ?
                                        IMG_CONST.rejectedImg :
                                        item.status == "Cancelled" ?
                                            IMG_CONST.canclledImg : null} style={styles.statusImg} />
                        <Text style={styles.statusApprovedBtnTxt}>{item.status}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.reasonTxt}>Full-day leave • Applied on 12 May 2022 • Personal</Text>
                </View>
            </View >
        )
    }

    renderCalenderFlatlist = () => {
        return (
            <View style={styles.flatListMainView}>
                <Text style={styles.selectTxt}>Select Month</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.calenderArray}
                    horizontal={true}
                    renderItem={({ item, index }) => this.calenderFlatListCell(item, index)}
                />
            </View>

        )
    }
    calenderFlatListCell = (item, index) => {
        return (
            <View style={styles.calenderFlatListView}>
                <TouchableOpacity style={styles.calenderBtn}
                    onPress={() => this.onClickbookingListSelect(item)}>
                    <ImageBackground source={item.checked == true ? IMG_CONST.calenderImg : IMG_CONST.calenderUnselect} style={styles.calenderImg} >
                        <Text>{item.monthName}</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </View >
        )
    }

    renderYearsFlatlist = () => {
        return (
            <View style={styles.yearsFlatListMainView}>
                <Text style={styles.selectTxt}>Select Year</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.yearsData}
                    horizontal={true}
                    renderItem={({ item }) => this.yearsFlatListCell(item)}
                />
            </View>

        )
    }
    yearsFlatListCell = (item) => {
        return (
            <View style={styles.calenderFlatListView}>
                <TouchableOpacity style={item.checked == true ? styles.yearsBtnSecond : styles.yearsBtn}
                    onPress={() => this.onYearsClick(item)}>
                    <Text style={styles.yearTxt}>{item.years}</Text>
                </TouchableOpacity>

            </View >
        )
    }
    renderStatusFlatlist = () => {
        return (
            <View style={styles.statusFlatListMainView}>
                <Text style={styles.selectTxt}>Select Status</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.statusData}
                    numColumns={3}
                    renderItem={({ item }) => this.statusFlatListCell(item)}
                />
            </View>

        )
    }
    statusFlatListCell = (item) => {
        return (
            <View style={styles.checkBoxView}>
                <TouchableOpacity style={styles.checkBoxBtn}
                    onPress={() => this.statusCheckBox(item)}>
                    <Image source={item.checked == true ? IMG_CONST.checkedImg : IMG_CONST.unCheckImg} style={styles.checkBoxImg} />
                    <Text style={styles.statusTxt}>{item?.valueName}</Text>
                </TouchableOpacity>

            </View >
        )
    }

    renderModal = () => {
        return (
            <Modal
                transparent={true}
                animationType="none"
                visible={this.state.filterModal}
            >
                <View style={styles.modalView}>
                    <View style={styles.innerMainView}>
                        <View style={styles.filterTxtView}>
                            <Text style={styles.filterTxt} >Filters</Text>
                            <TouchableOpacity onPress={() => { this.setState({ filterModal: false }) }}  >
                                <Image source={IMG_CONST.closeImg} style={styles.closeImg} />
                            </TouchableOpacity>
                        </View>
                        {this.renderCalenderFlatlist()}
                        {this.renderYearsFlatlist()}
                        {this.renderStatusFlatlist()}
                        {this.renderFilterBottom()}
                    </View>
                </View>
            </Modal>
        )
    }
    renderFilterBottom = () => {
        return (
            <View style={styles.bottomMainView}>
                <TouchableOpacity style={styles.clearBtn} onPress={() => { this.setState({ filterModal: true }) }}    >
                    <Text style={styles.clearTxt}>CLEAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.applyBtn} onPress={() => { this.setState({ filterModal: true }) }} >
                    <Text style={styles.applyTxt}>APPLY</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderTopBar()}
                {this.renderContentFlatlist()}
                {this.renderModal()}
                {this.renderSubmitBtn()}
            </SafeAreaView>
        )
    }
}