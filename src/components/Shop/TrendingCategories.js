import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LAYOUT} from '../../layout';

const TrendingCategories = ({title, image, key, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View key={key} style={styles.mainShopCatView}>
        <Text style={styles.titleStyle}> {title} </Text>
        <Image style={styles.categoryShopStyle} source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCategories;

const styles = StyleSheet.create({
  mainShopCatView: {
    width: LAYOUT.WIDTH * 0.35,
    height: LAYOUT.WIDTH * 0.35,
    backgroundColor: '#fff',
    marginRight: LAYOUT.WIDTH*0.025,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: LAYOUT.WIDTH*0.025,
    borderRadius: 8,
  },
  titleStyle: {
    fontSize: 13,
    marginTop: LAYOUT.WIDTH*0.015,
    marginHorizontal: 4,
    fontFamily: LAYOUT.FONTS.MEDIUM,
    color: '#222533',
  },
  categoryShopStyle: {
    width: LAYOUT.WIDTH*0.25,
    height: LAYOUT.WIDTH*0.25,
    position: 'absolute',
    top: LAYOUT.WIDTH*0.09,
    right: LAYOUT.WIDTH*0.015,
    resizeMode: 'contain',
  },
});
