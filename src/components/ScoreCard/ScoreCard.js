import React from "react"
import { View, Text, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles"
import { addPointAction } from "../../actions/boardActions"

const ScoreCard = () => {
    const dispatch = useDispatch()
    const { game, endGame } = useSelector(state => state.board)

    const renderSet = (sets) => sets.map(
        set => {
            return (
                <View style={styles.listItem}>
                    <Text style={styles.textColor}>{set}</Text>
                </View>
            )
        }
    )

    return (
        <View>
            {game.map(({ player, sets, currentSet }, index) => {
                return (
                    <View style={styles.horizontalList}>
                        <View style={[styles.listItem, styles.player]}>
                            <Text style={styles.textColor}>{player}</Text>
                        </View>
                        {renderSet(sets)}
                        <View style={[styles.listItem, styles.flexOne]}>
                            <Text style={styles.textColor}>{currentSet}</Text>
                        </View>
                        <View style={[styles.flexHalf, styles.flexCenter]}>
                            <Pressable disabled={endGame.status}
                                onPress={() => dispatch(addPointAction(index))}>
                                <View style={styles.buttonStyle}>
                                    <Text>+</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default ScoreCard