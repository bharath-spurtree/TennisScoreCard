import React from "react";
import { View, Text, TextInput } from "react-native"
import styles from "./styles"
import colors from "../../constants/colors"

export const SimpleTextInput = ({ label, placeholder, textValue, onTextChange }) => (
    <View>
        <View style={styles.textBox}>
            <Text style={styles.labelName}>{label}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={colors.colorLightGray2}
                underlineColorAndroid={colors.colorLightGray}
                value={textValue}
                onChangeText={onTextChange}
            />
        </View>
    </View>
)