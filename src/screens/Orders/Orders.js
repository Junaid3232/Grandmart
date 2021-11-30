import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../components/Button/AppButton';
import CommonHeader from '../../components/Global/CommonHeader';
import { LAYOUT } from '../../layout';
const Orders = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Orders" navigation={navigation} />
            <View style={{ padding: 20 }}>
                <Text style={styles.text}>Past orders</Text>
            </View>
            <View style={styles.orderCard}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.itemName}>Domino's Pizza - IJP</Text>
                    <Text style={styles.itemName}>Rs. 699.50</Text>
                </View>
                <View style={{ paddingTop: 10, marginBottom: 20 }}>
                    <Text style={styles.orderDetail}>
                        Hand Tossed
                    </Text>
                    <Text style={styles.orderDetail}>
                        30 Jul, 3:41 PM
                    </Text>
                </View>
                <AppButton title="Reorder" />
            </View>
        </View>
    )
}

export default Orders;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontFamily: LAYOUT.FONTS.MEDIUM,
        fontSize: 16,
        color: 'black'
    },
    orderCard: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'lightgray',
        elevation: 1,
        padding: 20,
        marginHorizontal: 10
    },
    itemName: {
        fontFamily: LAYOUT.FONTS.MEDIUM,
        color: 'black'
    },
    orderDetail: {
        fontFamily: LAYOUT.FONTS.LIGHT
    }
})
