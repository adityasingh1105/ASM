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
    txtStyle: {
        color: "#673AB7",
        fontSize: Scale(14),
        fontWeight: "500",

    },
    mainView: {
        margin: Scale(20)
    },
    leaveType: {
        backgroundColor: "#EFEEF2",
        height: Scale(40),
        borderRadius: Scale(10),
        paddingHorizontal: Scale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginVertical: Scale(5)
    },
    dateView: {
        backgroundColor: "#EFEEF2",
        height: Scale(40),
        borderRadius: Scale(10),
        paddingHorizontal: Scale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginVertical: Scale(5),
        width: Scale(180)
    },
    downArrowImg: {
        height: Scale(18),
        width: Scale(18),
        resizeMode: "contain",
    },
    txtInputReason: {
        height: Scale(100),
        backgroundColor: "#EFEEF2",
        borderRadius: Scale(10),
        marginVertical: Scale(5),
        padding: Scale(10)
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
    }
}
)