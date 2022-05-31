import React, { useState } from "react"
import { View, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux"
import styles from "./styles"
import { SimpleModal } from "../Modal/Modal"
import { SimpleTextInput } from "../TextInput/TextInput"
import { SimpleDropDown } from "../Dropdown/Dropdown"
import { startGameAction } from "../../actions/boardActions"

const CreateGame = ({ modalVisible, setModalVisible }) => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [set, setSet] = useState(3)
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')

    const onSubmit = () => {
        dispatch(startGameAction({ name, set, players: [player1, player2] }))
        setModalVisible(false)
        setName(''); setSet(3); setPlayer1(''); setPlayer2('')
    }

    return (
        <SimpleModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
        >
            <SimpleTextInput
                label="Game Name:"
                placeholder="Enter game name"
                textValue={name}
                onTextChange={setName}
            />
            <View style={styles.formBox}>
                <Text style={styles.labelName}>Number of Sets:</Text>
                <SimpleDropDown
                    data={[3, 5, 7]}
                    onSelect={setSet}
                />
            </View>
            <SimpleTextInput
                label="Player 1:"
                placeholder="Enter player 1 name"
                textValue={player1}
                onTextChange={setPlayer1}
            />
            <SimpleTextInput
                label="Player 2:"
                placeholder="Enter player 2 name"
                textValue={player2}
                onTextChange={setPlayer2}
            />
            <Pressable onPress={onSubmit}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Create Game</Text>
                </View>
            </Pressable>
        </SimpleModal>
    )
}

export default CreateGame