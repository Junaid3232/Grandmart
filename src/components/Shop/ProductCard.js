import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import { LAYOUT } from '../../layout';
import Icon from 'react-native-vector-icons/Ionicons'

const ProductCard = ({ image, discount, price, title, key, onPress, addToCart }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View >
        <View key={key} style={styles.mainShopCatView}>
          <Image style={styles.categoryShopStyle} source={image} />

          {discount ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={styles.titleStyle}>AED {discount}</Text>
              <Text style={styles.titleStyle1}>AED {price}</Text>
            </View>
          ) : (
            <Text style={styles.titleStyle}>AED {price}</Text>
          )}

          <Text
            numberOfLines={2}
            style={{ marginLeft: 4, color: '#000', fontSize: 13, paddingBottom: 5 }}>
            {title}
          </Text>
          <TouchableOpacity
            onPress={addToCart}
            style={{ backgroundColor: 'white', elevation: 3, flexDirection: 'row', width: 90, justifyContent: 'center', alignSelf: 'flex-end', position: 'absolute', bottom: 8, right: 8, borderRadius: 5 }}>
            <Text style={{ fontSize: 10, padding: 3 }}>Add to cart</Text>
            <Icon name="cart-outline" size={17} color={LAYOUT.COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainShopCatView: {
    width: LAYOUT.WIDTH * 0.35,
    height: LAYOUT.WIDTH * 0.45,
    backgroundColor: '#fff',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 13,
    marginTop: 2,
    marginHorizontal: 4,
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    color: LAYOUT.COLORS.PRIMARY,
  },
  titleStyle1: {
    color: '#FF1F1F',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    marginTop: 2,
    marginHorizontal: 4,
    textDecorationLine: 'line-through',
  },
  categoryShopStyle: {
    width: 100,
    height: 100,
    // position: 'absolute',
    // top: 30,
    // right: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
