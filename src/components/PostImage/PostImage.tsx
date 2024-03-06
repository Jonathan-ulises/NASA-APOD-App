import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PostImage as PostImageTypes, RootStackParams } from '../../types';
import { useNavigation } from '@react-navigation/native';

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const PostImage: FC<PostImageTypes> = ({ title, date, url, explanation }) => {

  const { navigate } = useNavigation<PostImageNavigationProps>();
  
  const handleViewPress = () => {
    navigate('Detail', { title, date, url, explanation })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.date}>{ date }</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleViewPress}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18, 39, 113, 255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#fff'
  },
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    paddingHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
});

export default PostImage;
