import React, { useState, useEffect } from "react"
import { View, Text, Pressable, Alert } from "react-native"
import CreateGame from "../CreateGame/CreateGame"
import ScoreCardHeader from "../ScoreCardHeader/ScoreCardHeader"
import ScoreCard from "../ScoreCard/ScoreCard"
import { useDispatch, useSelector } from "react-redux"
import { addPointAction } from "../../actions/boardActions"
import styles from "./styles"

const GameBoard = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()
    const { form, result } = useSelector(state => state.board)

    const addPoint = (index) => {
        dispatch(addPointAction(index))
    }

    useEffect(() => {
        result && 
        Alert.alert(
            "Game Ended",
            "Please check results",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
    }, [result])

    return (
        <View style={styles.centerView}>
            {form &&
                <View>
                    <View style={[styles.centerText, styles.header1Style]}>
                        <Text style={[styles.header1Text]}>{form.name}</Text>
                    </View>
                    <View style={[styles.centerText, styles.header1Style]}>
                        {result && <Text style={styles.textColor}>{result}</Text>}
                    </View>
                    <ScoreCardHeader />
                    <ScoreCard
                        addPoint={addPoint}
                    />
                </View>
            }
            <Pressable onPress={() => setModalVisible(true)} style={styles.buttonRight}>
                <View style={[styles.buttonStyle]}>
                    <Text style={[styles.buttonText]}>Create Game</Text>
                </View>
            </Pressable>
            <CreateGame
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    )
}

export default GameBoard