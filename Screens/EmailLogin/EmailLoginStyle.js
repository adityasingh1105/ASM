import { ScrollViewBase, StyleSheet } from "react-native";
import Scale from "../../Scale"
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    imgBg: {
        flex: 1,
        justifyContent: "center",
    },
    centerTxt: {
        // fontSize: Scale(60),
        color: "#fff",
        fontWeight: "900"
    },
    LoginMainView: {
        marginHorizontal: Scale(25),
        marginHorizontal: 25,
        height: Scale(390),
        height: 390,
        backgroundColor: "#fff",
        marginTop: Scale(20),
        marginTop: 20,
        borderRadius: Scale(20),
        borderRadius: 20,
    },
    topBarView: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: Scale(25),
        marginHorizontal: 25,
        marginTop: Scale(20),
        marginTop: 20,

    },
    logImg: {
        resizeMode: "center",
        width: Scale(130),
        width: 130,
        height: Scale(130),
        height: 130,
        alignSelf: "center"
    },
    emailTxt: {
        color: "#673AB7",
        fontSize: Scale(12),
        fontSize: 12,
        fontWeight: "700",
        marginBottom: Scale(5),
        marginBottom: Scale(5)
    },
    emailInput: {
        marginHorizontal: Scale(25),
        marginHorizontal: Scale(25),
        marginTop: Scale(20),
        marginTop: 20,
        borderRadius: Scale(20),
        borderRadius: 20,
    },
    emailTxtInputView: {
        backgroundColor: "#EFEEF2",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: Scale(40),
        height: Scale(40),
        marginBottom: Scale(20),
        marginBottom: Scale(20),
        borderRadius: Scale(5),
        borderRadius: Scale(5),
        paddingHorizontal: Scale(10),
    },
    PswrdView: {
        resizeMode: "center",
        width: Scale(40),
        width: 40,
        height: Scale(40),
        height: 40,
        alignSelf: "center"
    },
    loginBtn: {
        backgroundColor: '#1CCC7A',
        height: Scale(40),
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Scale(5)
    },
    loginBtnTxt: {
        color: "#FFFFFF",
        fontWeight: "700"
    }
}
)