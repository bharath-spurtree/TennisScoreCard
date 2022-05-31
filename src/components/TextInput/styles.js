import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    textBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    labelName: {
        fontFamily: "RobotoMono-Bold",
        marginRight: 20,
        color: colors.colorLightGray
    },
    textInput: {
        height: 40,
        width: '60%',
        color: colors.colorLightGray
    }
})

export default styles