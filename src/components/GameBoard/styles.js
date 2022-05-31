import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#171717'
    },
    centerText: {
        alignItems: 'center'
    },
    header1Style: {
        marginBottom: 15
    },
    header1Text: {
        fontSize: 20,
        color: colors.colorLightGray
    },
    buttonRight: {
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: colors.colorPrimary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginTop: 30
    },
    buttonText: {
        color: colors.colorDarkGray,
        fontSize: 12
    },
    textColor: {
        color: colors.colorLightGray
    }
})

export default styles