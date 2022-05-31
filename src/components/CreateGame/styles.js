import {StyleSheet} from "react-native"
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    formBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    labelName: {
        fontFamily: "RobotoMono-Bold",
        marginRight: 20,
        color: colors.colorLightGray
    },
    buttonStyle: {
        backgroundColor: colors.colorPrimary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 30
    },
    buttonText: {
        color: colors.colorDarkGray,
        fontSize: 12
    }
})

export default styles