import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Product_card from '../Components/Product_card';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topicon}>
        <Text>Icon</Text>
        <Text>Person</Text>
      </View>
      <View style={styles.searchbar}>
        <Text>Search</Text>
      </View>
      <View style={styles.below_searchbar}>
        <View style={styles.tg_back}>
          <Text style={styles.trending}>Trending Now</Text>
        </View>
        <View style={styles.normal_txt}>
          <Text>Product</Text>
        </View>
        <View style={styles.normal_txt}>
          <Text>All</Text>
        </View>
      </View>
      {/* Product catlouge  */}

      <Product_card name="Product1" price="100" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  topicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  searchbar: {
    backgroundColor: '#ffffff',
    height: 48,
    width: 351,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    margin: 20,
  },
  below_searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  normal_txt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#DFDCDC',
    height: 48,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
  trending: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderRadius: 12,
    padding: 10,
  },
  tg_back: {
    backgroundColor: '#E96E6E',
    height: 48,
    width: 200,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
});
