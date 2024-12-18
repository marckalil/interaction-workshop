import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function RootLayout() {
  return <Stack screenOptions={{ contentStyle: styles.container }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
