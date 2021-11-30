import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import Icon from 'react-native-vector-icons/AntDesign';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import AppButton from '../components/Button/AppButton';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { setCoordinates } from '../redux/actions/actions';
const MapScreen = ({ navigation }) => {
    const WIDTH = Dimensions.get('window').width;
    const location = useSelector(state => state?.coordinates)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const [pin, setPin] = useState({
        latitude: location?.coordinates?.latitude || 33.6601,
        longitude: location?.coordinates?.longitude || 73.0553,
    })

    const [initialRegion, setInitialRegion] = useState({
        latitude: location?.coordinates?.latitude || 33.6601,
        longitude: location?.coordinates?.longitude || 73.0553,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const onSaveLocation = async () => {

        dispatch(setCoordinates(pin))

        navigation.goBack()


    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'white', flex: 0.1, elevation: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                    <Icon name="arrowleft" size={25} color="#cc0066" />
                </TouchableOpacity>
                <View style={{ flex: 0.9, paddingHorizontal: 10 }}>
                    <TextInput style={{ backgroundColor: '#F7F6F6', borderRadius: 10 }} />
                    {/* <GooglePlacesAutocomplete
                        placeholder='Search'
                        onFail={error => console.error(error)}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: 'AIzaSyBi0UI3oa06mbPy_nHm9HdsGmJeagZgpoc',
                            language: 'en',
                        }}
                        styles={{
                            container: { flex: 0, position: 'absolute', width: '100%', zIndex: 1 },
                            listView: { backgroundColor: 'red' }
                        }}
                    /> */}
                </View>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                zoomEnabled={true}
                showsUserLocation={true}

            >
                <Marker coordinate={pin}
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("LLLLLLLLL", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                    <Callout>
                        <Text>You're here</Text>
                    </Callout>
                </Marker>
                <Circle
                    center={pin}
                    radius={1000} />
            </MapView>
            <View style={{ position: 'absolute', left: 1, right: 1, bottom: 40 }}>
                <AppButton title={'Confirm Location'} onPress={onSaveLocation} loading={loading} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1

    },


    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

})
export default MapScreen;