import {
  StyleSheet,
  Pressable,
  PressableProps,
  Text,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle
} from 'react-native';
import { color, radius, spacing } from '@/src/constants';
import Animated, { FadeIn, FadeInLeft, FadeOut } from 'react-native-reanimated';

type ButtonProps = PressableProps & {
  label: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Button({
  label,
  loading = false,
  style,
  ...pressableProps
}: ButtonProps) {
  return (
    <Pressable style={[styles.container, style]} {...pressableProps}>
      <Text style={styles.label}>{label}</Text>
      {loading && (
        <Animated.View entering={FadeInLeft} exiting={FadeOut}>
          <ActivityIndicator />
        </Animated.View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.yellow,
    paddingHorizontal: spacing.M,
    borderRadius: radius.S,
    gap: spacing.XS
  },
  label: {
    fontSize: 16,
    fontWeight: 'semibold'
  }
});
