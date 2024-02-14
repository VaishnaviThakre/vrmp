import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topicon}>
          <Icon name="menu" size={30} />
          <Icon name="person" size={30} />
        </View>
        <View style={styles.searchbar}>
          <Icon name="search" size={30} />
          <Text style={{flex: 1, marginLeft: 10}}>Search any Product </Text>
          <Icon name="mic" size={30} />
        </View>
        <View style={styles.below_searchbar}>
          <View style={styles.feturedLine}>
            <Text style={styles.Bld_Txt}>ALL Featured</Text>
            <Text style={styles.below_searchbar_but}>
              Sort <Icon name="arrow-down" size={20} />
            </Text>
            <Text style={styles.below_searchbar_but}>
              Filter <Icon name="funnel" size={20} />
            </Text>
          </View>
        </View>

        <View style={styles.circular_icon_strip}>
          <TouchableOpacity style={styles.circularIcon}>
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circularIcon}>
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circularIcon}>
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circularIcon}>
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.cards}>
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </View>
        </View>
        <View style={styles.whole_sml_card}>
          <View style={styles.sml_card}>
            <View style={styles.viewAllbut}></View>

            <Text>Deal of the Day </Text>
            <Icon name="clockcircleo" size={30} />
          </View>
          <View style={styles.viewAllbut}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: screenHeight,
    width: screenWidth,
  },
  topicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  searchbar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  below_searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  feturedLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: screenWidth - 40,
    height: screenHeight / 20,
  },
  below_searchbar_but: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    width: screenWidth / 5,
    textAlign: 'center',
  },
  Bld_Txt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  circular_icon_strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: screenWidth - 10,

    marginLeft: 5,
    gap: 10,
  },
  circularIcon: {
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  cards: {
    width: screenWidth - 18,
    height: screenHeight / 4,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  sml_card: {
    width: screenWidth - 18,
    height: screenHeight / 8,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  viewAllbut: {
    backgroundColor: '#E96E6E',
    height: 48,
    width: 200,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
  whole_sml_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
