import { color, radius, spacing } from '@/src/constants';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@/src/components';

export default function Index() {
  const [showsSquare, setShowsSquare] = useState(false);
  const toggleSquare = () => {
    setShowsSquare((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.squareContainer}>
        {showsSquare && <View style={styles.square} />}
      </View>
      <Button label={showsSquare ? 'Hide' : 'Show'} onPress={toggleSquare} />
    </View>
  );
}

const SQUARE_SIZE = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.M
  },
  squareContainer: {
    height: SQUARE_SIZE
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    backgroundColor: color.blue,
    borderRadius: radius.M
  }
});
