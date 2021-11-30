import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CartButton from '../components/Global/CartButton';
import { LAYOUT } from '../layout';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/actions';
import CommonHeader from '../components/Global/CommonHeader';
const ProductDetails = ({ route, navigation }) => {
  const cart = useSelector(state => state.cart)
  console.log("****CART", cart)
  const dispatch = useDispatch()
  const { title, price, description, image, discount } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <CommonHeader title="Product Details" navigation={navigation} />
      <View style={styles.backgroundImageStyle}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <View style={styles.contentView}>
          <Text style={styles.titleStyle}>{title}</Text>
          {discount ? (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.discountStyle}> AED {discount}</Text>
              <Text style={styles.priceStyle}>AED {price}</Text>
            </View>
          ) : (
            <Text style={styles.discountStyle}> AED {price}</Text>
          )}
        </View>
        <Text style={styles.descriptionStyle}>{description}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: LAYOUT.WIDTH * 0.05,
          alignSelf: 'center',
          width: LAYOUT.WIDTH * 0.9,
        }}>
        <CartButton title="Add to Cart" onPress={() => dispatch(addToCart(route?.params))} />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  imageStyle: {
    width: LAYOUT.WIDTH * 0.95,
    height: LAYOUT.HEIGHT * 0.25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  backgroundImageStyle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  titleStyle: {
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 18,
    width: LAYOUT.WIDTH * 0.5,
  },
  discountStyle: {
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 18,
    color: LAYOUT.COLORS.PRIMARY,
  },
  priceStyle: {
    color: '#FF1F1F',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 14,
    marginTop: 2,
    marginHorizontal: 4,
    textDecorationLine: 'line-through',
  },
  descriptionStyle: {
    fontFamily: LAYOUT.FONTS.REGULAR,
    fontSize: 15,
    flexGrow: 4,
  },
});
