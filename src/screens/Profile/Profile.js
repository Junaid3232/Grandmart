import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Global/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LAYOUT } from '../../layout';

const Profile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header title={'Profile'} onPress={() => navigation.goBack()} />
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.nameTitle}> Name</Text>
                    <TouchableOpacity>
                        <Icon name="pencil-outline" style={{ marginTop: 10 }} color={LAYOUT.COLORS.PRIMARY} size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>John Doe</Text>
            </View>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.nameTitle}> Email</Text>
                    <TouchableOpacity>
                        <Icon name="pencil-outline" style={{ marginTop: 10 }} color={LAYOUT.COLORS.PRIMARY} size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>JohnDoe12@gmail.com</Text>
            </View>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.nameTitle}>Mobile number</Text>
                    <TouchableOpacity>
                        <Icon name="pencil-outline" style={{ marginTop: 10 }} color={LAYOUT.COLORS.PRIMARY} size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>+91234569932</Text>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    card: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'lightgray',
        elevation: 1,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 10
    },
    nameTitle: {
        fontFamily: LAYOUT.FONTS.REGULAR
    },
    name: {
        fontFamily: LAYOUT.FONTS.SEMI_BOLD

    }
})
export default Profile;