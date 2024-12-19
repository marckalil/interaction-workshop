import { color, radius, spacing } from '@/src/constants';
import { StyleSheet, View } from 'react-native';
import { Button } from '@/src/components';

const SQUARE_SIZE = 100;

export default function Index() {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.square} />
      <Button label="Press" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.M,
    padding: spacing.M
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    backgroundColor: color.blue,
    borderRadius: radius.M
  }
});
