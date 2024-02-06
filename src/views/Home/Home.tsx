/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    loadTodaysImage().catch(null);
  }, []);

  console.log('Linea 23:==>', todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
