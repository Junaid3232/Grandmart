import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import Header from '../components/Global/Header'
import { LAYOUT } from '../layout'
import { useSelector } from 'react-redux'
import AppButton from '../components/Button/AppButton'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Cart = ({ navigation }) => {
    const cartItems = useSelector(state => state?.cart.cartItems)
    const [total, setTotal] = useState(0)
    const totalAmount = () => {
        let totalPrice = 0;
        for (let i = 0; i < cartItems?.length; i++)
            totalPrice = totalPrice + cartItems[i]?.price
        // setTotal(total + cartItems[i]?.price)
        return totalPrice
    }
    useEffect(() => {
        setTotal(totalAmount)
    }, [])

    console.log("********H*H*H*H*H*H**", cartItems)
    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "lightgray",
                }}
            />
        );
    }
    const footer = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 20 }}>
                <Text style={{ fontFamily: LAYOUT.FONTS.SEMI_BOLD }}>Total</Text>
                <Text style={{ fontFamily: LAYOUT.FONTS.SEMI_BOLD }}>{total}</Text>
            </View>
        );
    };
    const renderItem = ({ item }) => (


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
            <Image source={item.image} resizeMode={'contain'} style={{ width: 60, height: 60 }} />
            <Text style={{ fontFamily: LAYOUT.FONTS.LIGHT, color: LAYOUT.COLORS.PRIMARY }}>{item.title}</Text>
            <Text style={{ fontFamily: LAYOUT.FONTS.LIGHT }}>AED.{item.price}</Text>
        </View>


    )
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header title="Cart" onPress={() => navigation.goBack()} />
            <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' }}>
                <Icon name="delivery-dining" size={100} color={LAYOUT.COLORS.PRIMARY} />
                <View>
                    <Text style={{ fontFamily: LAYOUT.FONTS.LIGHT }}>Esitmated delivery</Text>
                    <Text style={{ fontFamily: LAYOUT.FONTS.SEMI_BOLD }}>NOW (15 min)</Text>
                </View>
            </View>
            <FlatList
                data={cartItems}

                renderItem={renderItem}
                ItemSeparatorComponent={FlatListItemSeparator}
                ListFooterComponent={footer} />
            <View style={{ position: 'absolute', left: 1, right: 1, bottom: 20 }}>
                <AppButton title="Done" />
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({

})
