import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LAYOUT } from '../../layout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const CartButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: LAYOUT.COLORS.PRIMARY,
          borderRadius: 10,
          paddingVertical: 10,
        }}>
        <MaterialIcons
          name="add-shopping-cart"
          size={24}
          color={LAYOUT.COLORS.PRIMARY}
        />
        <Text
          style={{
            marginLeft: 10,
            color: LAYOUT.COLORS.PRIMARY,
            fontFamily: LAYOUT.FONTS.REGULAR,
            fontSize: 16,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
