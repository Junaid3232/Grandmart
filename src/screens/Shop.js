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
import TrendingCategories from '../components/Shop/TrendingCategories';
import ProductCard from '../components/Shop/ProductCard';
import CommonHeader from '../components/Global/CommonHeader';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/actions';
const Shop = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { image } = route.params;
  const trendingCategories = LAYOUT.TRENDING_CATEGORIES;
  const vegetables = LAYOUT.VEGETABLES;
  const fruits = LAYOUT.FRUITS;
  const personalHygiene = LAYOUT.PERSONAL_HYGIENE;
  const babyCare = LAYOUT.BABY_CARE;
  const meat = LAYOUT.MEAT;
  const bakery = LAYOUT.BAKERY;
  const cosmetics = LAYOUT.COSMETICS;
  return (
    <>
      <CommonHeader title="Shops" navigation={navigation} />
      <ScrollView>
        <View style={styles.backgroundImageStyle}>
          <Image source={image} style={styles.imageStyle} />
        </View>
        <View style={styles.mainShopContainer}>
          <Text style={styles.shopsTitle}>Trending Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingCategories.map((category, index) => (
              <TrendingCategories
                key={index}
                onPress={() => navigation.navigate('Products')}
                title={category.title}
                image={category.image}

              />
            ))}
          </ScrollView>
          {/* VEGETABLES SCROLLVIEW */}
          <Text style={styles.shopsTitle}>Vegetables</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {vegetables.map((vegData, index) => (
              <ProductCard
                key={index}
                onPress={() => navigation.navigate('Product Details', vegData)}
                image={vegData.image}
                price={vegData.price}
                discount={vegData.discount}
                title={vegData.title}
                addToCart={() => dispatch(addToCart(vegData))}
              />
            ))}
          </ScrollView>
          {/* FRUITS SCROLLVIEW */}
          <Text style={styles.shopsTitle}>Fruits</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {fruits.map((fruitData, index) => (
              <ProductCard
                key={index}
                onPress={() => navigation.navigate('Product Details', fruitData)}
                image={fruitData.image}
                price={fruitData.price}
                discount={fruitData.discount}
                title={fruitData.title}
                addToCart={() => dispatch(addToCart(fruitData))}
              />
            ))}
          </ScrollView>
          {/* PERSONAL HYGIENE SCROLLVIEW */}
          <Text style={styles.shopsTitle}>Personal Hygiene</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {personalHygiene.map((personalHygiene, index) => (
              <ProductCard
                key={index}
                onPress={() => navigation.navigate('Product Details', personalHygiene)}
                image={personalHygiene.image}
                price={personalHygiene.price}
                discount={personalHygiene.discount}
                title={personalHygiene.title}
                addToCart={() => dispatch(addToCart(personalHygiene))}
              />
            ))}
          </ScrollView>
          {/* BABY CARE SCROLLVIEW */}
          <Text style={styles.shopsTitle}>Baby Care</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {babyCare.map((babyCare, index) => (
              <ProductCard
                key={index}
                onPress={() => navigation.navigate('Product Details', babyCare)}
                image={babyCare.image}
                price={babyCare.price}
                discount={babyCare.discount}
                title={babyCare.title}
                addToCart={() => dispatch(addToCart(babyCare))}
              />
            ))}
          </ScrollView>
          {/* MEAT SCROLLVIEW */}
          <Text style={styles.shopsTitle}>Meat</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {meat.map((meat, index) => (
              <ProductCard
                key={index}
                onPress={() => navigation.navigate('Product Details', meat)}
                image={meat.image}
                price={meat.price}
                discount={meat.discount}
                title={meat.title}
                addToCart={() => dispatch(addToCart(meat))}
              />
            ))}
          </ScrollView>
          {/* BAKERY SCROLLVIEW */}
          <Text style={styles.shopsTitle}>Bakery</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {bakery.map((bakery, index) => (
              <ProductCard
                key={index}
                onPress={() => navigation.navigate('Product Details', bakery)}
                image={bakery.image}
                price={bakery.price}
                discount={bakery.discount}
                title={bakery.title}
                addToCart={() => dispatch(addToCart(bakery))}
              />
            ))}
          </ScrollView>
          {/* COSMETICS SCROLLVIEW */}
          <Text style={styles.shopsTitle}>Cosmetics</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cosmetics.map((cosmetics, index) => (
              <ProductCard
                key={index}
                onPress={() => navigation.navigate('Product Details', cosmetics)}
                image={cosmetics.image}
                price={cosmetics.price}
                discount={cosmetics.discount}
                title={cosmetics.title}
                addToCart={() => dispatch(addToCart(cosmetics))}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Shop;

const styles = StyleSheet.create({
  mainShopContainer: {
    flex: 1,
    // paddingHorizontal: 10,
    marginHorizontal: 10,
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
  imageStyle: {
    width: LAYOUT.WIDTH * 0.95,
    height: LAYOUT.HEIGHT * 0.25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  shopsTitle: {
    marginTop: 15,
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 16,
    color: '#222533',
  },
});
