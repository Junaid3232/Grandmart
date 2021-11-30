import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import { LAYOUT } from '../../layout';

const ShopCard = ({ isSelected, title, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={isSelected ? styles.cardViewSelected : styles.cardView}>
        <Image source={image} style={styles.logoDesign} />
        <View>
          <Text style={styles.cardHeadingText}> {title} </Text>
          <Text style={{ color: 'white' }}>Grandmart International</Text>
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  cardView: {
    marginTop: 10,
    backgroundColor: LAYOUT.COLORS.PRIMARY,
    paddingVertical: 10,
    height: LAYOUT.HEIGHT * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardViewSelected: {
    marginTop: 10,
    backgroundColor: "#b80b61",
    paddingVertical: 20,
    height: LAYOUT.HEIGHT * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 10,
    // borderWidth: 1,
    // borderColor: LAYOUT.COLORS.PRIMARY,
  },
  logoDesign: {
    width: LAYOUT.WIDTH * 0.2,
    height: LAYOUT.HEIGHT * 0.25,
    resizeMode: 'contain',
    transform: [{ rotate: '270deg' }],
  },
  cardHeadingText: {
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 16,
    color: 'white',
  },
});
