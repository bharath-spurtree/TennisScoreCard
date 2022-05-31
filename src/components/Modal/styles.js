import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.colorDarkGray
    },
    closeModalText: {
        color: colors.colorLightGray,
        fontSize: 20
    },
    closeModalButton: {
        backgroundColor: colors.colorDarkGray,
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingTop: 20
    }
})

export { styles }