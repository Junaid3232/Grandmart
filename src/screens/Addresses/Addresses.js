import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LAYOUT } from '../../layout'
import CommonHeader from '../../components/Global/CommonHeader'

const Addresses = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CommonHeader title="Addresses" showCart={false} navigation={navigation} />

            <View style={styles.mapContainer}>
                <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='map-marker-outline' color={LAYOUT.COLORS.PRIMARY} size={25} />
                    <View style={{ justifyContent: 'space-evenly', paddingLeft: 10 }}>
                        <Text style={styles.locationText}>Vertex soft i9</Text>
                        <Text style={styles.text}>Islamabad</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', flex: 0.1 }}>
                    <TouchableOpacity>
                        <Icon name='pencil-outline' color={LAYOUT.COLORS.PRIMARY} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='delete' color={LAYOUT.COLORS.PRIMARY} size={25} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Addresses;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mapContainer: {
        padding: 20,
        // justifyContent: 'space-around',
        flexDirection: 'row'
    },
    locationText: {
        fontFamily: LAYOUT.FONTS.SEMI_BOLD
    },
    text: {
        fontFamily: LAYOUT.FONTS.LIGHT
    }

})