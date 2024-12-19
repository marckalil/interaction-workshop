import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { color } from '@/src/constants';

export default function RootLayout() {
  return <Stack screenOptions={{ contentStyle: styles.container }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  }
});
