import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { LAYOUT } from '../../layout';

const AppButton = ({ title, onPress, loading }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {loading ?

                <ActivityIndicator color={'white'} size={20} style={{ paddingVertical: 15 }} /> :
                <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: LAYOUT.COLORS.PRIMARY,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center",
        width: '90 %',
        alignSelf: 'center'


    },
    text: {
        paddingVertical: 16,
        color: 'white',
        fontWeight: '600',
        fontSize: 12
    }
})
export default AppButton;