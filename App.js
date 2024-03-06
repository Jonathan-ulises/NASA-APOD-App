import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
        <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,96,255)'
  },
});
