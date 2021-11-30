import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import ShopStack from './ShopStack'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { LAYOUT } from '../layout'
import Icon from 'react-native-vector-icons/FontAwesome'
import DrawerSideBarMenu from './DrawerSideBarMenu'
const MainDrawer = createDrawerNavigator()

const Drawer = ({ navigation }) => {

  return (
    <MainDrawer.Navigator
      drawerStyle={{ width: '80%', }}

      drawerContentOptions={{
        inactiveTintColor: 'black',
        activeTintColor: '#f7783d',
        inactiveBackgroundColor: 'white',
        itemStyle: { width: '100%', },

      }}

      drawerContent={props => <DrawerSideBarMenu {...props} />}>
      <MainDrawer.Screen
        name="Home" component={Home}

        options={{
          headerShown: false,
          headerTitleAlign: 'left',
          title: 'Islamabad',
          drawerActiveTintColor: LAYOUT.COLORS.PRIMARY,
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          //     <SimpleLineIcons
          //       style={styles.cartIcon}
          //       name="handbag"
          //       size={20}
          //       color={LAYOUT.COLORS.PRIMARY}
          //     />
          //   </TouchableOpacity>
          // ),
          headerTintColor: LAYOUT.COLORS.PRIMARY
        }}
      />
      {/* <MainDrawer.Screen
        name="Favorites"

        component={Home}
        options={{
          drawerLabelStyle: { fontSize: 10 },
          drawerIcon: ({ focused, size }) => (
            <Icon name={'heart'} size={17} color={'black'} />
          ),

        }}
      /> */}


    </MainDrawer.Navigator>
  );
}

export default Drawer

const styles = StyleSheet.create({
  cartIcon: {}
})