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
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <Text style={styles.label}>{label}</Text>
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
