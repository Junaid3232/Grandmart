import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
  Pressable
} from 'react-native';
import ImageCarousel from '../components/Home/ImageCarousel';
import ShopCard from '../components/Home/ShopCard';
import { LAYOUT } from '../layout';
import { useSelector } from 'react-redux';
import LocationModal from '../components/Modal/LocationModal';
import Geocoder from 'react-native-geocoding';
import HomeHeader from '../components/headers/HomeHeader';
const Home = ({ navigation }) => {
  const coordinates = useSelector(state => state.coordinates)

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => { setModalVisible(true) }, [])
  const shops = LAYOUT.SHOPS_DATA;


  const converToLocation = async () => {

    try {
      fetch(
        "https://services.gisgraphy.com/reversegeocoding/search?&lat=48.8723789988&lng=2.2996401787"
      ).then((response) => console.log("********LLLLLLLCLLCLCLLCLC", response))


    } catch (error) {
      console.error(error);
    }


    // Geocoder.init("AIzaSyBi0UI3oa06mbPy_nHm9HdsGmJeagZgpoc");
    // Geocoder.from(41.89, 12.49)
    //   .then(json => {
    //     var addressComponent = json.results[0].address_components[0];
    //     console.log("******ADRESS", json);
    //   })
    //   .catch(error => console.warn(error));
  }

  useEffect(() => {
    converToLocation()
    // use a valid API key
    // With more options
    // Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"});

  }, [])
  return (
    <>
      <HomeHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 10 }}>
        {/* IMAGE CAROUSEL */}
        <View style={{ marginHorizontal: 10 }}>
          <ImageCarousel />
        </View>
        {/* NEARBY AVAILABLE SHOPS */}
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styles.shopsTitle}>Shop Nearby</Text>
          {shops.map((data, index) => (
            <ShopCard
              key={index}
              onPress={() => navigation.navigate('Shop', data)}
              isSelected={index == 0 ? true : false}
              title={data.title}
              image={data.image}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.centeredView}>
        <LocationModal
          setLocationModalVisible={setModalVisible}
          locationModalVisible={modalVisible}
          navigation={navigation}
        />

      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  shopsTitle: {
    marginTop: LAYOUT.WIDTH * 0.1,
    fontFamily: LAYOUT.FONTS.MEDIUM,
    fontSize: 16,
    color: '#222533',
  },
  centeredView: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",

  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
