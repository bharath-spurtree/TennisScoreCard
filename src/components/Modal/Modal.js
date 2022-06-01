import React from "react";
import { Modal, View, Pressable, Text } from "react-native"
import { styles } from "./styles"

export const SimpleModal = ({ modalVisible, children, setModalVisible }) => (
    <View>
        <Modal
            visible={modalVisible}
            presentationStyle="fullScreen"
        >
            <View style={styles.closeModalButton}>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeModalText}>X</Text>
                </Pressable>
            </View>
            <View style={styles.centeredView}>
                {children}
            </View>
        </Modal>
    </View>
)