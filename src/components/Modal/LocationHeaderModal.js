import React, { useEffect, useState } from 'react'
import { Modal, Text, View, StyleSheet, Pressable, Dimensions, TouchableOpacity } from 'react-native'

import Location from './location';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Fontisto';
import Iconnn from 'react-native-vector-icons/SimpleLineIcons'
import Iicon from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { useSelector, useDispatch } from 'react-redux'
import { setCoordinates } from '../../redux/actions/actions';
import { LAYOUT } from '../../layout/index'

import AppButton from '../Button/AppButton';
// import HomeHeader from '../headers/HomeHeader';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const LocationHeaderModal = ({ locationModalVisible, setLocationModalVisible, navigation }) => {
    const location = useSelector(state => state?.coordinates)
    const [initialRegion, setInitialRegion] = useState({
        latitude: location?.coordinates?.latitude || 33.6601,
        longitude: location?.coordinates?.longitude || 73.0553,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
    })
    const dispatch = useDispatch()

    const getCurrentLocation = async () => {
        console.log('*****')
        Geolocation.getCurrentPosition(async info =>
            dispatch(setCoordinates({ latitude: info?.coords?.latitude, longitude: info?.coords?.longitude }))
        )
        setLocationModalVisible(!locationModalVisible) // Set modal unvisible

    }
    const confirmLocation = () => {
        setLocationModalVisible(!locationModalVisible)
    }

    return (
        <Modal
            animationType="slide-up"
            transparent={true}
            visible={locationModalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!locationModalVisible);
            }}

        >

            <View style={styles.centeredView}>
                <View style={{ flex: 0.2 }}>
                    <HomeHeader navigation={navigation} onPress={() => setLocationModalVisible(!locationModalVisible)} />
                </View>
                <View style={[styles.modalView, { width: WIDTH, height: HEIGHT / 2 }]}>

                    {/* <Text style={styles.modalText}>Welcome back!</Text>
                    <Text style={[styles.modalText, { marginBottom: 15 }]}>Can you cofirm if this is your location? </Text> */}

                    <View style={{ flex: 1, backgroundColor: '#FEF2F7', borderRadius: 5 }}>
                        <View pointerEvents="none" style={{ padding: 10, borderRadius: 5, flex: 1 }}>

                            <MapView
                                provider={PROVIDER_GOOGLE}
                                style={{ flex: 1 }}
                                initialRegion={initialRegion}
                                zoomEnabled={true}
                                showsUserLocation={true}

                            >
                                <Marker coordinate={initialRegion} >
                                </Marker>
                            </MapView>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.lastSeenText}>Last searched location</Text>
                            <Text style={styles.locationText}>Islamabad</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={getCurrentLocation}
                        style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icon name="location-arrow" size={18} color="#ff007f" />
                        <Text style={{ marginLeft: 8, color: "#ff007f", fontWeight: '600', fontSize: 12 }}>Use my current location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}
                        style={{ flexDirection: 'row', paddingTop: 5, alignItems: 'center' }}>
                        <Iconn name="plus-a" size={15} color="#ff007f" />
                        <Text style={{ padding: 10, color: "#ff007f", fontWeight: '600', fontSize: 12 }}>Select a different location</Text>
                    </TouchableOpacity>
                    {/* <AppButton title="Confirm Location" onPress={confirmLocation} /> */}
                </View>
            </View>
        </Modal>
    )
}
const HomeHeader = ({ navigation, onPress }) => {
    const itemsInCart = useSelector(state => state.cart.cartItems.length)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={{ flex: 0.1, justifyContent: 'center' }}>
                <Iicon name="close" size={23} color={LAYOUT.COLORS.PRIMARY} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPress}
                style={{ flex: 0.7 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: LAYOUT.COLORS.PRIMARY, fontFamily: LAYOUT.FONTS.SEMI_BOLD }}>182</Text>
                <Text style={{ fontFamily: LAYOUT.FONTS.LIGHT, }}>Islamabad</Text>
            </TouchableOpacity>
            <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Icon name="heart-o" size={20} color={LAYOUT.COLORS.PRIMARY} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Iconnn name="handbag" size={20} color={LAYOUT.COLORS.PRIMARY} />
                    {itemsInCart !== 0 &&
                        <View style={{ backgroundColor: 'red', borderRadius: 12, alignItems: 'center', position: 'absolute', right: -15, top: -10, width: 20, height: 20 }}>
                            <Text style={{ color: 'white', fontSize: 14 }}>{itemsInCart}</Text>
                        </View>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LocationHeaderModal;

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    modalView: {

        backgroundColor: "white",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 10
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#cc0066",
    },
    textStyle: {
        color: "white",
        paddingVertical: 5,
        textAlign: "center",
        fontSize: 13,
    },
    modalText: {

        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    lastSeenText: {
        fontWeight: '600',
        color: 'black'
    },
    locationText: {
        fontSize: 12
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',

        backgroundColor: 'white',
        // elevation: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    }
});
