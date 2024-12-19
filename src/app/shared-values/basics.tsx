import { color, radius, spacing } from '@/src/constants';
import { StyleSheet, View } from 'react-native';
import { Button } from '@/src/components';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated';

const SQUARE_SIZE = 100;

// withTiming / withSpring / withRepeat
export default function Index() {
  const progress = useSharedValue(0);
  const handlePress = () => {
    progress.value = withTiming(1, {
      duration: 2000
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // opacity: interpolate(progress.value, [0, 1], [0.2, 1]),
      width: interpolate(
        progress.value,
        [0, 0.5],
        [SQUARE_SIZE, SQUARE_SIZE * 2]
        // Extrapolation.CLAMP
      )
    };
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, animatedStyle]} />
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
