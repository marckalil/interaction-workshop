import { color, radius } from '@/src/constants';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: color.blue,
    borderRadius: radius.M
  }
});
