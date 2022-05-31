import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    horizontalList: {
        flexDirection: "row",
        paddingVertical: 10,
        borderTopColor: '#000',
        borderTopWidth: .25
    },
    listItem: {
        paddingHorizontal: 10,
    },
    player: {
        flex: 1.5
    },
    flexOne: {
        flex: 1
    },
    flexHalf: {
        flex: .5
    },
    flexCenter: {
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: colors.colorSecondary,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 40
    },
    textColor: {
        color: colors.colorLightGray
    }
})

export default styles