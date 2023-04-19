import { ScrollViewBase, StyleSheet } from "react-native";
import Scale from "../../Scale";
export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F8F6FB",
        // justifyContent: "center
    },
    topBarView: {
        marginHorizontal: Scale(20),
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        marginTop: Scale(10)
    },
    notificationImg: {
        height: Scale(30),
        width: Scale(30),
        resizeMode: "contain"
    },
    topTxt: {
        fontSize: Scale(18),
        fontWeight: "700",
        color: "#fff"
    },
    profileView: {
        backgroundColor: "#fff",
        marginHorizontal: Scale(20),
        borderRadius: Scale(10),
        marginTop: Scale(20),

    },
    profileInnerView: {
        margin: Scale(20),

    },
    profileTopView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"

    },
    profileImg: {
        height: Scale(70),
        width: Scale(70),
        resizeMode: "contain"
    },
    profileImgView: {
        height: Scale(75),
        width: Scale(75),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderWidth: Scale(0.5),
        borderColor: "#00000029",
    },
    logoutImg: {
        height: Scale(45),
        width: Scale(45),
        resizeMode: "contain"
    },
    profileTxtView: {
        flex: 1,
        marginHorizontal: Scale(10),
        justifyContent: "space-between",
        height: Scale(50),
    },
    empTxt: {
        fontSize: Scale(15),
        fontWeight: "500",
        color: "#000000"
    },
    userTxt: {
        fontSize: 18,
        fontWeight: "700",
        color: "#673AB7"
    },
    idTxt: {
        fontSize: Scale(15),
        fontWeight: "700",
        color: "#000000"
    },
    line: {
        backgroundColor: "#2D16571A",
        height: Scale(1),
        marginVertical: Scale(15)
    },
    timerImg: {
        height: Scale(20),
        width: Scale(20),
        resizeMode: "contain",
        marginRight: Scale(5)
    },
    timeView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    timeImgView: {
        flexDirection: "row"
    },
    timeTxt: {
        fontSize: Scale(15),
        fontWeight: "700",
        color: "#1CCC7A"
    },
    punchInTxt: {
        fontSize: Scale(15),
        fontWeight: "600",
        color: "#000000"

    },
    weeklyRecordView: {
        marginHorizontal: Scale(20),
        height: Scale(110),
        backgroundColor: "#6538B6",
        borderRadius: Scale(8),
        marginTop: Scale(20)
    },
    weeklyRecordImg: {
        height: Scale(200),
        width: Scale(200),
        resizeMode: "contain",
        backgroundColor: "#fff"
    },

    weeklynnerView: {
        padding: Scale(20),
        justifyContent: "space-between",
        height: "100%"

    },
    weeklyInnerTopView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    weeklyTxt: {
        fontSize: Scale(17),
        fontWeight: "700",
        color: "#fff"
    },
    weeklyHrsTxt: {
        fontSize: Scale(17),
        fontWeight: "700",
        color: "#fff"

    },
    weeklyInnerBottomView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateTxt: {
        fontSize: Scale(13),
        fontWeight: "500",
        color: "#fff"
    },
    hrsCountBtn: {
        // width: Scale(50),
        // height: scale(20),
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: Scale(5),
        borderRadius: Scale(5)
    },
    hrsCountTxt: {
        fontSize: Scale(13),
        fontWeight: "500",
        color: "#FF2467"
    },
    remdSingleBlock: {
        backgroundColor: "#fff",
        height: Scale(140),
        width: Scale(130),
        borderRadius: Scale(15),
        marginRight: Scale(10),
        padding: Scale(10),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    countIcon: {
        backgroundColor: "#673AB7",
        justifyContent: "center",
        alignItems: "center",
        height: Scale(30),
        width: Scale(30),
        borderRadius: Scale(50),
        alignSelf: "flex-end"
    },
    countTxt: {
        fontSize: Scale(13),
        fontWeight: "700",
        color: "#fff"
    },
    remdImg: {
        height: Scale(40),
        width: Scale(40),
        resizeMode: "contain",
        marginBottom: Scale(10)
    },
    remdTxt: {
        fontSize: Scale(16),
        fontWeight: "500",
        color: "#000",
        width: Scale(90)
    },
    imgBg: {
        flex: 1,
        height: Scale(180)
    },
    optionBtn: {
        paddingHorizontal: Scale(10),
        flexDirection: "row",
        padding: Scale(10),
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: Scale(10),
        borderColor: "#673AB780",
        borderWidth: Scale(0.5),
        marginBottom: Scale(15),
        // backgroundColor: "red"

    },
    lmsBTnSecond: {
        paddingHorizontal: Scale(10),
        flexDirection: "row",
        padding: Scale(10),
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#673AB71A",
        // borderRadius: Scale(10),
        borderColor: "#673AB780",
        borderWidth: Scale(0.5),
        borderTopStartRadius: Scale(10),
        borderTopEndRadius: Scale(10)


    },
    optionImg: {
        height: Scale(30),
        width: Scale(30),
        resizeMode: "contain",
    },
    optionTxt: {
        fontSize: Scale(16),
        fontWeight: "600",
        color: "#000",
        textAlign: "left",
        flex: 1,
        marginLeft: Scale(10)
    },
    arrowImg: {
        height: Scale(25),
        width: Scale(25),
        resizeMode: "contain",
    },
    arrowImgBtn: {
        height: Scale(40),
        width: Scale(40),
        justifyContent: "center",
        alignItems: "center",
    },
    addImgBtn: {
        backgroundColor: '#EFE5FE',
        justifyContent: "center",
        alignItems: "center",
        height: Scale(40),
        width: Scale(40),
        borderRadius: Scale(50)
    },
    lmsMainView: {
        borderWidth: Scale(0.5),
        borderColor: "#673AB780",
        marginBottom: Scale(15),
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: Scale(10),
        borderBottomLeftRadius: Scale(10),
        backgroundColor: "#fff",
        borderTopWidth: 0
    },
    lmsInnerBtn: {
        paddingHorizontal: Scale(15),
        flexDirection: "row",
        paddingVertical: Scale(5),
        justifyContent: "space-between",
        alignItems: 'center',
        // backgroundColor: "#fff",
    },
    lmsInnerArrowBtnImg: {
        height: Scale(20),
        width: Scale(20),
        resizeMode: "contain",
    },
    lmsInnerArrowBtn: {
        height: Scale(25),
        width: Scale(25),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red"
    },
})
