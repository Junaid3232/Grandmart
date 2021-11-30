import React, { useState, useRef, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { LAYOUT } from '../../layout';

const carousel = LAYOUT.SLIDE_IMAGES;

const ImageCarousel = () => {
  // const SLIDE_IMAGES = [
  //   {
  //     id: 1,
  //     image: require('../assets/images/slide1.jpg'),
  //   },
  //   {
  //     id: 2,
  //     image: require('../assets/images/slide2.jpg'),
  //   },
  //   {
  //     id: 3,
  //     image: require('../assets/images/slide3.jpg'),
  //   },
  // ];
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, LAYOUT.WIDTH);
  return (
    <View>
      <View style={styles.wrap}>
        <Animated.FlatList
          horizontal
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={data => data.id}
          data={carousel}
          pagingEnabled
          renderItem={({ item }) => (
            <View>
              <View>
                <Image source={item.image} style={styles.imageStyle} />
              </View>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 2,
        }}>
        {carousel.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],

            outputRange: [0.3, 1, 0.3],

            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: '#fff',
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  wrap: {
    width: LAYOUT.WIDTH,
    height: LAYOUT.HEIGHT * 0.25,
  },
  imageStyle: {
    width: LAYOUT.WIDTH * 0.94,
    height: LAYOUT.HEIGHT * 0.25,
    borderRadius: 10,
    marginRight: 20,
    justifyContent: 'center',
  },
});
