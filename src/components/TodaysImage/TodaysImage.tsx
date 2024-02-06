import React, {FC} from 'react';
import {Text, View, StyleSheet, Image, Button, Pressable} from 'react-native';
import {PostImage} from '../../types';

const TodaysImage: FC<PostImage> = ({date, title, url}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" color={'#3468C0'} />
        {/* <Pressable>
          <Text style={styles.button}>View</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,
  },
  imageContainer: {},
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    color: '#fff',
  },
});

export default TodaysImage;
