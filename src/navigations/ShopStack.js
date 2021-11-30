import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from '../screens/Shop';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LAYOUT } from '../layout';
import { TouchableOpacity } from 'react-native';
import Drawer from './Drawer';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import MapScreen from '../screens/MapScreen';
import Favourites from '../screens/Favourites/Favourites';
import Orders from '../screens/Orders/Orders';
import Profile from '../screens/Profile/Profile';

const StackShop = createNativeStackNavigator();
const ShopStack = ({ navigation, props }) => {
  return (
    <StackShop.Navigator>
      <StackShop.Screen
        name="Home Drawer"
        component={Drawer}
        options={{ headerShown: false }}
      />
      <StackShop.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          headerBackVisible: true,
          headerTitleAlign: 'center',
          headerTintColor: LAYOUT.COLORS.PRIMARY
        }}
      />
      <StackShop.Screen
        name="Products"

        component={Products}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: LAYOUT.COLORS.PRIMARY
        }}
      />
      <StackShop.Screen
        name="Product Details"
        component={ProductDetails}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: LAYOUT.COLORS.PRIMARY
        }}
      />
      <StackShop.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false
        }}
      />
      <StackShop.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: LAYOUT.COLORS.PRIMARY
        }}
      />
      <StackShop.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: LAYOUT.COLORS.PRIMARY
        }}
      />
      <StackShop.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <StackShop.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </StackShop.Navigator>
  );
};

export default ShopStack;
