import React from "react";

import { View } from "react-native"
import SelectDropdown from "react-native-select-dropdown";
import styles from "./styles"

export const SimpleDropDown = ({data, onSelect}) => {
    return (
        <View>
            <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                    onSelect(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                defaultButtonText={'Number of Sets'}
                dropdownStyle={styles.dropdownStyle}
                buttonStyle={styles.dropdownButtonStyle}
                buttonTextStyle={styles.dropdownBtnTxtStyle}
            />
        </View>
    )
}