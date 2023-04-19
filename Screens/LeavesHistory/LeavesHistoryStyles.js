import { SectionList, StyleSheet } from "react-native";
import Scale from "../../Scale";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    imgBg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    centerTxt: {
        fontSize: 60,
        color: "#fff",
        fontWeight: "900"
    },
    topBarMainView: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Scale(20),
        backgroundColor: "#673AB7",
        height: Scale(50),
        justifyContent: 'space-between'
    },

    backImg: {
        height: Scale(25),
        width: Scale(25),
        resizeMode: "contain",
    },
    headerTxt: {
        fontSize: Scale(17),
        color: "#FFFFFF",
        fontWeight: "600",
        textAlign: "center",
    },

    submitTxt: {
        color: "#fff",
        fontSize: Scale(14),
        fontWeight: "500",
    },
    checkLeaveTxt: {
        color: "#1CCC7A",
        fontSize: Scale(14),
        fontWeight: "500",
        marginTop: Scale(10)
    },
    bottomView: {
        justifyContent: "flex-end",
        flex: 0.12,
        marginBottom: Scale(20)
    },
    checkLeaveBtn: {
        alignSelf: "center"
    },
    submitBtn: {
        backgroundColor: "#1CCC7A",
        height: Scale(40),
        marginHorizontal: Scale(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Scale(5),
    },
    submitTxt: {
        color: "#fff",
        fontSize: Scale(14),
        fontWeight: "500",
    },
    flatListView: {
        marginHorizontal: Scale(20),
        borderRadius: Scale(10),
        height: Scale(70),
        marginBottom: Scale(10),
        borderWidth: Scale(0.5),
        padding: Scale(10),
        justifyContent: "space-between"
    },
    dayTxt: {
        fontWeight: '700',
        fontSize: Scale(15)
    },
    reasonTxt: {
        fontWeight: '300',
        fontSize: Scale(12)
    },
    flatListStyle: {
        marginTop: Scale(15),
        flex: 1
    },
    dayTxtView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    statusApprovedBtn: {
        backgroundColor: "#1CCC7A",
        height: Scale(28),
        borderRadius: Scale(5),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Scale(10),
        flexDirection: 'row',
        width: Scale(100)
    },
    statusPendingBtn: {
        backgroundColor: "#FF9100",
        height: Scale(28),
        borderRadius: Scale(5),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Scale(10),
        flexDirection: 'row',
        width: Scale(100)
    },
    statusRejectedBtn: {
        backgroundColor: "#FE517A",
        height: Scale(28),
        borderRadius: Scale(5),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Scale(10),
        flexDirection: 'row',
        width: Scale(100)
    },
    statusCancelledBtn: {
        backgroundColor: "#673AB7",
        height: Scale(28),
        borderRadius: Scale(5),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Scale(10),
        flexDirection: 'row',
        width: Scale(100)
    },

    statusApprovedBtnTxt:
    {
        color: "#fff",
        fontSize: Scale(14)
    },
    statusImg: {
        height: Scale(20),
        width: Scale(20),
        resizeMode: "contain"
    },
    modalView: {
        flex: 1,
        backgroundColor: "#00000090",
        justifyContent: "flex-end"
    },
    innerMainView: {
        backgroundColor: "#fff",
        height: Scale(500),
        borderTopLeftRadius: Scale(10),
        borderTopRightRadius: Scale(10)
    },
    filterTxtView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        margin: Scale(20)
    },
    closeImg: {
        height: Scale(37),
        width: Scale(37)
    },
    filterTxt: {
        color: "#673AB7",
        fontSize: Scale(25),
        fontWeight: "600"
    },
    calenderFlatListView: {

    },
    calenderBtn: {
        height: Scale(100),
        width: Scale(100),
        justifyContent: "center",
        marginTop: Scale(10),
        alignItems: 'center',
    },
    calenderImg: {
        height: Scale(90),
        width: Scale(90),
        justifyContent: "center",
        alignItems: 'center'
    },
    flatListMainView: {
        marginLeft: Scale(15)
    },
    yearsFlatListMainView: {
        marginLeft: Scale(15),
        marginTop: Scale(15),
    },

    yearsBtn: {
        height: Scale(40),
        width: Scale(70),
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: Scale(1),
        borderRadius: Scale(10),
        borderColor: "#E5E5E5",
        marginRight: Scale(7),
        marginTop: Scale(10),

    },
    yearsBtnSecond: {
        height: Scale(40),
        width: Scale(70),
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: Scale(1),
        borderRadius: Scale(10),
        borderColor: "#673AB7",
        marginRight: Scale(7),
        marginTop: Scale(10),

    },
    yearTxt: {
        fontSize: Scale(14),
        color: "#000",
        fontWeight: "400",
        textAlign: "center",
    },
    selectTxt: {
        fontSize: Scale(14),
        color: "#000",
        fontWeight: "600",
    },
    checkBoxImg: {
        height: Scale(20),
        width: Scale(20),
        resizeMode: "contain",
        marginRight: Scale(10)
    },
    checkBoxBtn: {
        flexDirection: 'row',
        justifyContent: "space-between",
        // backgroundColor: "#fff"
        marginTop: Scale(15),

    },
    checkBoxView: {
        width: Scale(130),
        flexDirection: 'row',
        // justifyContent: "center"
        alignItems: "center",
        // backgroundColor: "#fff"
    },
    statusTxt: {
        fontSize: Scale(14),
        color: "#000",
        fontWeight: "400",
    },
    statusFlatListMainView: {
        marginLeft: Scale(15),
        marginTop: Scale(15),
    },
    clearBtn: {
        height: Scale(50),
        width: Scale(180),
        borderWidth: Scale(1),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "#1CCC7A",
        borderRadius: Scale(5)

    },
    applyBtn: {
        height: Scale(50),
        width: Scale(180),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1CCC7A",
        borderRadius: Scale(5)

    },
    bottomMainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: Scale(20)
    },
    clearTxt: {
        fontSize: Scale(15),
        color: "#1CCC7A",
        fontWeight: "500",
    },
    applyTxt: {
        fontSize: Scale(15),
        color: "#fff",
        fontWeight: "500",
    }
}
)