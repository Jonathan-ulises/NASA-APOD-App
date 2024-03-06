import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native'

import { format, sub } from "date-fns";

import Header from "../../components/Header";
import TodaysImage from "../../components/TodaysImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

import { PostImage } from "../../types";
import fetchApi from '../../utils/fetch';

const Home = () => {

  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodasyImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse)
      } catch(error) {
        console.error(error)
        setTodaysImage({})
      }
    };

    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date();
        const todayDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd');

        const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`)
        setLastFiveDaysImages(lastFiveDaysImagesResponse)
      } catch (error) {
        console.error(error)
      }
    }

    loadTodasyImage().catch(null)
    loadLastFiveDaysImages().catch(null)
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,96,255)',
  }
});

export default Home;