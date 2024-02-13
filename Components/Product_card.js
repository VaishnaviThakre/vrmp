import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = props => {
  return (
    <View style={styles.product_card}>
      <View style={styles.product_image}>
        <Image
          source={{
            uri: props.imageUrl,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.product_info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  product_card: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  product_image: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  product_info: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
});
