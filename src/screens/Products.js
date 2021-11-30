import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LAYOUT } from '../layout';
import CommonHeader from '../components/Global/CommonHeader';

const Products = ({ route, navigation }) => {
  const Vegetables = LAYOUT.VEGETABLES;
  return (
    <>
      <CommonHeader title="Products" navigation={navigation} />
      <ScrollView>
        <View style={styles.cardView}>
          {Vegetables.map((veg, id) => {
            const image = veg.image;
            const title = veg.title;
            const price = veg.price;
            const discount = veg.discount;
            const percentage = Math.round((discount - price / price) * 100);

            return (
              <TouchableOpacity
                key={id}
                onPress={() => navigation.navigate('Product Details', veg)}>
                <View style={styles.cardIntDesign}>
                  {percentage ? (
                    <View style={styles.discountStyle}>
                      <Text style={styles.discountText}>{percentage}%</Text>
                    </View>
                  ) : null}

                  <View style={styles.cardStyle}>
                    <Image source={image} style={styles.imageCard} />
                    <Text numberOfLines={1} style={styles.titleText}>
                      {title}
                    </Text>
                  </View>
                  {discount ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text style={styles.titleStyle}>{discount} AED</Text>
                      <Text style={styles.titleStyle1}>{price} AED</Text>
                    </View>
                  ) : (
                    <Text style={styles.titleStyle}>{price} AED</Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: LAYOUT.WIDTH * 0.025,
  },
  cardIntDesign: {
    backgroundColor: '#fff',
    paddingHorizontal: LAYOUT.WIDTH * 0.0175,
    paddingVertical: LAYOUT.WIDTH * 0.025,
    marginTop: LAYOUT.WIDTH * 0.05,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: LAYOUT.WIDTH * 0.4,
  },
  discountStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountText: {
    backgroundColor: '#FF1F1F',
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    paddingHorizontal: LAYOUT.WIDTH * 0.0175,
    borderRadius: 5,
  },
  cardStyle: {
    //   marginTop:20,
    alignItems: 'center',
  },
  imageCard: {
    width: LAYOUT.WIDTH * 0.3,
    height: LAYOUT.HEIGHT * 0.2,
  },
  titleText: {
    fontFamily: LAYOUT.FONTS.MEDIUM,
    fontSize: 14,
    color: '#000',
  },
  price: {
    marginTop: LAYOUT.WIDTH * 0.0175,
    fontFamily: LAYOUT.FONTS.MEDIUM,
    color: LAYOUT.COLORS.PRIMARY,
  },
  titleStyle: {
    fontSize: 13,
    marginTop: LAYOUT.WIDTH * 0.01,
    marginHorizontal: LAYOUT.WIDTH * 0.017,
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    color: LAYOUT.COLORS.PRIMARY,
  },
  titleStyle1: {
    color: '#FF1F1F',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    marginTop: LAYOUT.WIDTH * 0.01,
    marginHorizontal: LAYOUT.WIDTH * 0.0175,
    textDecorationLine: 'line-through',
  },
});
