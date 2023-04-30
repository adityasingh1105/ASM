import { StyleSheet } from "react-native";
import Scale from "../../Scale";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F6FB"
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
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
        flex: 1,
        marginRight: Scale(25),
        // fontFamily: FONTS.SourceSansProBlack
    },

    bottomView: {
        justifyContent: "flex-end",
        flex: 1,
        marginBottom: Scale(20)
    },
    checkLeaveBtn: {
        alignSelf: "center"
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
    submitBtn: {
        backgroundColor: "#1CCC7A",
        height: Scale(40),
        marginHorizontal: Scale(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Scale(5),
    },
    mainBtn: {
        marginHorizontal: Scale(20),
        borderRadius: Scale(10),
        height: Scale(80),
        marginBottom: Scale(10),
        padding: Scale(10),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#ffffff"
    },
    radioImg: {
        height: Scale(25),
        width: Scale(25),
        resizeMode: "contain"
    },
    insideView: {
        height: Scale(50),
        width: Scale(315)
    },
    innerTxtView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    statusView: {
        height: Scale(30),
        backgroundColor: "#FEF4E5",
        width: Scale(90),
        borderRadius: Scale(5),
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: Scale(10)
    },
    statusImg: {
        height: Scale(13),
        width: Scale(13),
        resizeMode: "contain",
        marginRight: Scale(10)
    },
    timeTxt: {
        fontSize: Scale(14),
        fontWeight: "600",
        color: "#000"
    },
    statusTxt: {
        fontSize: Scale(12),
        fontWeight: "400",
        color: "#FF970E"
    },
    titleTxt: {
        fontSize: Scale(12),
        fontWeight: "400",
        color: "#000",
        marginTop: Scale(10)

    }
}
)