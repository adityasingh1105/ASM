import { StyleSheet } from "react-native";
import Scale from "../../Scale";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F6FB",
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
    singleMainView: {
        height: Scale(200),
        width: Scale(175),
        backgroundColor: "#fff",
        borderRadius: Scale(10),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2,
        marginTop: Scale(20),
    },
    imgView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ReferralPolicyImg: {
        height: Scale(100),
        width: Scale(100),
        resizeMode: "contain",
    },
    bottomTxtView: {
        backgroundColor: "#673AB7",
        height: Scale(50),
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
        borderBottomEndRadius: Scale(10),
        borderBottomLeftRadius: Scale(10),
    },
    bottomTxt: {
        fontSize: Scale(15),
        color: "#FFFFFF",
        fontWeight: "500",
        // fontFamily: "TiltPrism-Regular",
        textAlign: "center",
        marginHorizontal: Scale(10)
    },
    innerView: {
        flexDirection: "row",
        marginHorizontal: Scale(20),
        justifyContent: "space-between",
    },
});
