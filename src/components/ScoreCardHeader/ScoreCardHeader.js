import React from "react"
import { View, Text } from "react-native"
import { useSelector } from "react-redux"
import styles from "./styles"

const ScoreCardHeader = () => {
    const { headerSet } = useSelector(state => state.board)

    return (
        <View style={styles.horizontalList}>
            <View style={[styles.listItem, styles.player]}>
                <Text style={styles.textColor}>Player Name</Text>
            </View>
            {headerSet.map(item => {
                return (
                    <View style={styles.listItem} key={item}>
                        <Text style={styles.textColor}>{item}</Text>
                    </View>
                )
            })}
            <View style={[styles.listItem, styles.flexOne]}>
                <Text style={styles.textColor}>Current Set</Text>
            </View>
            <View style={[styles.listItem, styles.flexHalf]}>
                <Text></Text>
            </View>
        </View>
    )
}

export default ScoreCardHeader