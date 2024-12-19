import { color, spacing } from '@/src/constants';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

const TRACK_WIDTH = 56;
const TRACK_HEIGHT = 32;
const TRACK_PADDING = spacing.XXS;
const THUMB_SIZE = 24;
const ACCESSIBILITY_INDICATOR_SIZE = 8;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function SwitchExample() {
  const [checked, setChecked] = useState(false);
  const progress = useSharedValue(0);

  const handlePress = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    progress.value = withTiming(checked ? 1 : 0);
  }, [checked, progress]);

  // TRACK STYLE
  const animatedTrackStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [color.grey, color.yellow]
      )
    };
  }, [progress]);

  // THUMB ANIMATION
  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            progress.value * (TRACK_WIDTH - THUMB_SIZE - 2 * TRACK_PADDING)
        }
      ]
    };
  }, [progress]);

  // ACCESSIBILiTY STYLE
  const animatedAccessibilityStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [color.grey, color.white]
      )
    };
  }, [progress]);

  return (
    <AnimatedPressable
      onPress={handlePress}
      style={[styles.track, animatedTrackStyle]}
    >
      <Animated.View style={[styles.thumb, animatedThumbStyle]}>
        {
          <Animated.View
            style={[styles.accessibilityIndicator, animatedAccessibilityStyle]}
          />
        }
      </Animated.View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    justifyContent: 'center',
    backgroundColor: color.grey,
    padding: TRACK_PADDING
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  accessibilityIndicator: {
    width: ACCESSIBILITY_INDICATOR_SIZE,
    height: ACCESSIBILITY_INDICATOR_SIZE,
    borderRadius: ACCESSIBILITY_INDICATOR_SIZE / 2,
    backgroundColor: color.grey
  }
});
