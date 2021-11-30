import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LAYOUT } from '../../layout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconn from 'react-native-vector-icons/Ionicons'
const Favourites = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('restaurant')
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.headerContainer}>
                <View style={styles.container}>


                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ flex: 0.12 }}>
                        <Icon name="arrow-left" size={25} color={LAYOUT.COLORS.PRIMARY} />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Favourites</Text>


                </View>
                <View style={styles.tapBar}>
                    <Text onPress={() => setActiveTab('restaurant')} style={[styles.tapBarSection, { borderBottomWidth: activeTab === 'restaurant' ? 4 : 0 }]}>Restaurants</Text>
                    <Text onPress={() => setActiveTab('shop')} style={[styles.tapBarSection, { borderBottomWidth: activeTab === 'shop' ? 4 : 0 }]}>Shops</Text>
                </View>
            </View>
            <View style={styles.screenContent}>
                <RestaurantsFavourites navigation={navigation} />
            </View>
        </View>
    )
}

const RestaurantsFavourites = ({ navigation }) => {
    return (
        <View style={{}}>
            <View style={styles.noFav}>
                <Iconn name="md-heart-dislike-circle-outline" size={80} color={LAYOUT.COLORS.PRIMARY} />

                <Text style={styles.noFavText}>No favourites saved</Text>
                <Text style={styles.noFavDescText}>You'll see all your favorites here, to make ordering even faster, Just look for the </Text>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
                style={styles.findMoreButton}>
                <Text style={styles.findMoreText}>Let's find some favourites</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Favourites;
const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomColor: LAYOUT.COLORS.PRIMARY,
        // borderBottomWidth: 4,
        // elevation: 5,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10
    },
    headerContainer: {
        backgroundColor: 'white',
        elevation: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10

    },
    headerText: {
        fontSize: 16,
        fontFamily: LAYOUT.FONTS.SEMI_BOLD,
        paddingLeft: 15
    },
    tapBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // paddingBottom: 10,


    },
    tapBarSection: {
        fontFamily: LAYOUT.FONTS.MEDIUM,
        color: LAYOUT.COLORS.PRIMARY,
        borderBottomColor: LAYOUT.COLORS.PRIMARY,
        // borderBottomWidth: 4,
        paddingBottom: 10,
    },
    noFavRest: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    screenContent: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1
    },
    noFav: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // fontFamily: LAYOUT.FONTS.SEMI_BOLD,
        // alignSelf: 'center'
    },
    noFavText: {
        fontFamily: LAYOUT.FONTS.SEMI_BOLD,
        fontSize: 22
    },
    noFavDescText: {
        fontFamily: LAYOUT.FONTS.LIGHT,
        textAlign: 'center',
        marginTop: 10
    },
    findMoreButton: {
        backgroundColor: LAYOUT.COLORS.PRIMARY,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center'

    },
    findMoreText: {
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 12,
        alignSelf: "center",
        fontFamily: LAYOUT.FONTS.MEDIUM
    }

})