import { color, spacing } from '@/src/constants';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const TRACK_WIDTH = 56;
const TRACK_HEIGHT = 32;
const THUMB_SIZE = 24;
const ACCESSIBILITY_INDICATOR_SIZE = 8;

export default function SwitchExample() {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Pressable onPress={handlePress} style={styles.track}>
      <View style={styles.thumb}>
        <View />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    justifyContent: 'center',
    backgroundColor: color.grey
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    color: color.white
  },
  accessibilityIndicator: {
    width: ACCESSIBILITY_INDICATOR_SIZE,
    height: ACCESSIBILITY_INDICATOR_SIZE,
    borderRadius: ACCESSIBILITY_INDICATOR_SIZE / 2,
    backgroundColor: color.grey
  }
});
