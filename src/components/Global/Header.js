import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LAYOUT } from '../../layout/index'


const Header = ({ onPress, title }) => {
    return <View style={styles.container}>

        <TouchableOpacity
            onPress={onPress}
            style={{ flex: 0.12 }}>
            <Icon name="close" size={25} color={LAYOUT.COLORS.PRIMARY} />
        </TouchableOpacity>

        <Text style={styles.headerText}>{title}</Text>

    </View>
}

export default Header;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomColor: LAYOUT.COLORS.PRIMARY,
        borderBottomWidth: 4,
        elevation: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    headerText: {
        fontSize: 16,
        fontFamily: LAYOUT.FONTS.SEMI_BOLD
    }
})
