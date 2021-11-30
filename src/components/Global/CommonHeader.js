import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconn from 'react-native-vector-icons/SimpleLineIcons'
import { LAYOUT } from '../../layout/index'
import { useSelector } from 'react-redux';

const CommonHeader = ({ onPress, title, navigation }) => {
    const itemsInCart = useSelector(state => state.cart.cartItems.length)
    return <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{}}>
                <Icon name="arrow-left" size={25} color={LAYOUT.COLORS.PRIMARY} />
            </TouchableOpacity>

            <Text style={styles.headerText}>{title}</Text>
        </View>
        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Cart')}>
            <Iconn name="handbag" size={20} color={LAYOUT.COLORS.PRIMARY} />
            {itemsInCart !== 0 && <View style={{ backgroundColor: 'red', borderRadius: 12, alignItems: 'center', position: 'absolute', right: -15, top: -10, width: 20, height: 20 }}>
                <Text style={{ color: 'white', fontSize: 14 }}>{itemsInCart}</Text>
            </View>}
        </TouchableOpacity>

    </View>
}

export default CommonHeader;
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
        borderBottomRightRadius: 10,
        justifyContent: 'space-between',

    },
    headerText: {
        fontSize: 16,
        fontFamily: LAYOUT.FONTS.SEMI_BOLD,
        paddingLeft: 15,

    }
})
