import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/SimpleLineIcons'
import { LAYOUT } from '../../layout/index'
import { useSelector } from 'react-redux';
const HomeHeader = ({ navigation, onPressLocation }) => {
    const itemsInCart = useSelector(state => state.cart.cartItems.length)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ flex: 0.1, justifyContent: 'center' }}>
                <Icon name="bars" size={20} color={LAYOUT.COLORS.PRIMARY} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPressLocation}
                style={{ flex: 0.7 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: LAYOUT.COLORS.PRIMARY, fontFamily: LAYOUT.FONTS.SEMI_BOLD }}>182</Text>
                <Text style={{ fontFamily: LAYOUT.FONTS.LIGHT, }}>Islamabad</Text>
            </TouchableOpacity>
            <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Icon name="heart-o" size={20} color={LAYOUT.COLORS.PRIMARY} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Iconn name="handbag" size={20} color={LAYOUT.COLORS.PRIMARY} />
                    {itemsInCart !== 0 &&
                        <View style={{ backgroundColor: 'red', borderRadius: 12, alignItems: 'center', position: 'absolute', right: -15, top: -10, width: 20, height: 20 }}>
                            <Text style={{ color: 'white', fontSize: 14 }}>{itemsInCart}</Text>
                        </View>}
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default HomeHeader;
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',

        backgroundColor: 'white',
        elevation: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    }
})