import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Platform,
} from 'react-native';
import { LAYOUT } from '../layout';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const DrawerSection = ({ focused, color, icon, title }) => {
    return (
        <View style={{ flexDirection: 'row', paddingLeft: 5, borderTopColor: 'gray' }}>
            {icon && <Icon name={icon} color={LAYOUT.COLORS.PRIMARY} size={20} />}
            <Text style={{ color: 'gray', paddingLeft: icon ? 20 : 0, fontSize: 12 }}>{title}</Text>
        </View>
    )
}

const DrawerSideBarMenu = props => {
    return (
        <View style={styles.safe}>
            <View style={styles.container2}>
                <Image
                    source={require('../assets/images/slide1.jpg')}
                    style={styles.sideMenuProfileIcon}
                />
                <Text style={styles.text}>John Doe</Text>
            </View>
            <View style={styles.container}></View>

            <DrawerContentScrollView
                style={{ fontSize: 10 }}
                {...props}>
                <DrawerItemList style={{ backgroundColor: 'red', fontSize: 10 }}
                    {...props} />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='heart-outline' title='Favourites' />}
                    onPress={() => props.navigation.navigate('Favourites')}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='clipboard-list-outline' title='Orders' />}
                    onPress={() => props.navigation.navigate('Orders')}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='account-outline' title='Profile' />}
                    onPress={() => props.navigation.navigate('Profile')}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='map-marker-outline' title='Addresses' />}
                    onPress={() => props.navigation.navigate('Addresses')}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='trophy-variant-outline' title='Challenges & rewards' />}
                    onPress={() => { alert('Challenges Pressed') }}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='crop-square' title='Vouchers' />}
                    onPress={() => { alert('Vouchers Pressed') }}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='account-question-outline' title='Help center' />}
                    onPress={() => { alert('Help Pressed') }}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <>
                            <View style={{ borderTopWidth: 0.2, borderTopColor: 'gray', position: 'absolute', left: 1, right: 1, top: -10 }}></View>
                            <DrawerSection focused={focused} color={color} title='Settings' />
                        </>}
                    onPress={() => { alert('Settings Pressed') }}
                />

                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} title='Terms & Conditions / Privacy' />}
                    onPress={() => { alert('Terms Pressed') }}
                />
                <DrawerItem
                    label={({ focused, color }) =>

                        <DrawerSection focused={focused} color={color} title='Log out' />}

                    onPress={() => { alert('Log out Pressed') }}
                />
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignSelf: 'center',
        marginLeft: '3%',
    },
    iconStyle: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
    },
    container: {
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Nunito-Light',
        fontWeight: '400',
        color: 'white'
    },
    safe: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: LAYOUT.COLORS.PRIMARY,
        height: '17%',
    },
});

export default DrawerSideBarMenu;
