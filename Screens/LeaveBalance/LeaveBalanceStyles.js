import { StyleSheet } from "react-native";
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
        flex: 1,
        marginRight: Scale(25),
        // fontFamily: FONTS.SourceSansProBlack
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
    checkLeaveTxt: {
        color: "#1CCC7A",
        fontSize: Scale(14),
        fontWeight: "500",
        marginTop: Scale(10)
    },
    bottomView: {
        justifyContent: "flex-end",
        flex: 1,
        marginBottom: Scale(20)
    },
    checkLeaveBtn: {
        alignSelf: "center"
    },
    profileMainView: {
        height: Scale(100),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        margin: Scale(20)
    },
    circleView: {
        backgroundColor: "#673AB7",
        height: Scale(90),
        width: Scale(90),
        borderRadius: Scale(50),
        justifyContent: "center",
        alignItems: "center"
    },
    leaveTxt: {
        color: "#fff",
        fontSize: Scale(13),
        textAlign: "center"
    },
    leaveBalanceTxt: {
        color: "#fff",
        fontSize: Scale(19),
        fontWeight: "800"
    }, userTxt: {
        color: "#673AB7",
        fontWeight: "800",
        fontSize: Scale(20)
    },
    empIdTxt: {
        color: "#3F3F3F",
        fontWeight: "500",
        fontSize: Scale(15)
    },
    txtView: {
        flexDirection: "row"
    },
    userTxtView: {
        height: Scale(50),
        justifyContent: "space-between"
    }
}
)