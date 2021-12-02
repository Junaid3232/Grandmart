import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import Header from '../components/Global/Header'
import { LAYOUT } from '../layout'
import { useSelector } from 'react-redux'
import AppButton from '../components/Button/AppButton'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Iconn from 'react-native-vector-icons/AntDesign'


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
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Total</Text>
                <Text style={styles.footerText}>{total}</Text>
            </View>
        );
    };
    const renderItem = ({ item }) => (


        <View style={styles.itemConatiner}>
            <View style={styles.counterContainer}>
                <TouchableOpacity>
                    <Iconn name='plus' size={18} style={{ paddingRight: 10 }} />
                </TouchableOpacity>
                <View style={styles.counterTextContainer}>
                    <Text style={{ fontSize: 10 }}>1</Text>
                </View>
                <TouchableOpacity>
                    <Iconn name='minus' size={18} style={{ paddingLeft: 10 }} />
                </TouchableOpacity>
            </View>
            <Image source={item.image} resizeMode={'contain'} style={{ width: 60, height: 60 }} />

            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.lightFonts}>AED.{item.price}</Text>
        </View>


    )
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header title="Cart" onPress={() => navigation.goBack()} />
            <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' }}>
                <Icon name="delivery-dining" size={100} color={LAYOUT.COLORS.PRIMARY} />
                <View>
                    <Text style={styles.lightFonts}>Esitmated delivery</Text>
                    <Text style={{ fontFamily: LAYOUT.FONTS.SEMI_BOLD }}>NOW (15 min)</Text>
                </View>
            </View>
            <FlatList
                data={cartItems}

                renderItem={renderItem}
                ItemSeparatorComponent={FlatListItemSeparator}
                ListFooterComponent={footer} />
            <View style={styles.buttonContainer}>
                <AppButton title="Done" />
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    footerContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 20 },
    footerText: { fontFamily: LAYOUT.FONTS.SEMI_BOLD },
    itemConatiner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 },
    counterContainer: { flexDirection: 'row', alignItems: 'center' },
    counterTextContainer: { backgroundColor: 'lightgray', alignItems: 'center', borderRadius: 3, padding: 7 },
    titleText: { fontFamily: LAYOUT.FONTS.LIGHT, color: LAYOUT.COLORS.PRIMARY },
    lightFonts: { fontFamily: LAYOUT.FONTS.LIGHT },
    buttonContainer: { position: 'absolute', left: 1, right: 1, bottom: 20 }

})
