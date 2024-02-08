/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';
import {format, sub} from 'date-fns';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

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

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        //console.log('fechas:', todaysDate, fiveDaysAgoDate);
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        ); //&start_date=2017-07-08&end_date=2017-07-10
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);
  // console.log(
  //   'Linea 43, lastFiveDaysImages: ============>>>',
  //   lastFiveDaysImages,
  // );
  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
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
