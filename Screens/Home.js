import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Card, Button, Title} from 'react-native-paper';

const Home = () => {
  return (
    <ScrollView>
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

        <View style={styles.cardRow}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mopRc9Th6lR9WRw6xe6OPpI48XBF7fLx7kOSAI0ygHEmbYnJ092T5UZKtMCtg1B26weu54-jpwp8dpI-oxvTJgjCNwtkvoHaJ4eTu9Lf0UxNVr3hEZn08JpXeSTmQP0yCMmQQ9ntY0lpKNyFSDwyqIMeJ3yxcZz4HyfMhtLJ-TlQYmDPgJiDU8MGibzgPzkfhETfvExEelS2SrKoxxJ6fHruZrB90V3fRCEBY4LlROTiHJFfeVau1dXfiC6BfE~Y-zdcDBXIZGBpAiPzNQ~C5~TKykfpHtk92jB2cKS6BD43TrvTnLisKryFS4Ra8ZWgPbT~ssq-1IbK3oP1uv9-pA__',
              }}
            />
            <Card.Title title="Product1" subtitle="Test" />
          </Card>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mopRc9Th6lR9WRw6xe6OPpI48XBF7fLx7kOSAI0ygHEmbYnJ092T5UZKtMCtg1B26weu54-jpwp8dpI-oxvTJgjCNwtkvoHaJ4eTu9Lf0UxNVr3hEZn08JpXeSTmQP0yCMmQQ9ntY0lpKNyFSDwyqIMeJ3yxcZz4HyfMhtLJ-TlQYmDPgJiDU8MGibzgPzkfhETfvExEelS2SrKoxxJ6fHruZrB90V3fRCEBY4LlROTiHJFfeVau1dXfiC6BfE~Y-zdcDBXIZGBpAiPzNQ~C5~TKykfpHtk92jB2cKS6BD43TrvTnLisKryFS4Ra8ZWgPbT~ssq-1IbK3oP1uv9-pA__',
              }}
            />
            <Card.Title title="Product2" subtitle="Test" />
          </Card>
        </View>

        <View style={styles.cardRow}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mopRc9Th6lR9WRw6xe6OPpI48XBF7fLx7kOSAI0ygHEmbYnJ092T5UZKtMCtg1B26weu54-jpwp8dpI-oxvTJgjCNwtkvoHaJ4eTu9Lf0UxNVr3hEZn08JpXeSTmQP0yCMmQQ9ntY0lpKNyFSDwyqIMeJ3yxcZz4HyfMhtLJ-TlQYmDPgJiDU8MGibzgPzkfhETfvExEelS2SrKoxxJ6fHruZrB90V3fRCEBY4LlROTiHJFfeVau1dXfiC6BfE~Y-zdcDBXIZGBpAiPzNQ~C5~TKykfpHtk92jB2cKS6BD43TrvTnLisKryFS4Ra8ZWgPbT~ssq-1IbK3oP1uv9-pA__',
              }}
            />
            <Card.Title title="Product3" subtitle="Test" />
          </Card>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mopRc9Th6lR9WRw6xe6OPpI48XBF7fLx7kOSAI0ygHEmbYnJ092T5UZKtMCtg1B26weu54-jpwp8dpI-oxvTJgjCNwtkvoHaJ4eTu9Lf0UxNVr3hEZn08JpXeSTmQP0yCMmQQ9ntY0lpKNyFSDwyqIMeJ3yxcZz4HyfMhtLJ-TlQYmDPgJiDU8MGibzgPzkfhETfvExEelS2SrKoxxJ6fHruZrB90V3fRCEBY4LlROTiHJFfeVau1dXfiC6BfE~Y-zdcDBXIZGBpAiPzNQ~C5~TKykfpHtk92jB2cKS6BD43TrvTnLisKryFS4Ra8ZWgPbT~ssq-1IbK3oP1uv9-pA__',
              }}
            />
            <Card.Title title="Product4" subtitle="Test" />
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    width: '48%', // Adjusted to fit two cards in one row with some spacing
    marginBottom: 10,
    backgroundColor: '#ffffff',
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
