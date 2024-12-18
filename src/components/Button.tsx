import {
  StyleSheet,
  Pressable,
  PressableProps,
  Text,
  ActivityIndicator
} from 'react-native';
import { color, radius, spacing } from '@/src/constants';

type ButtonProps = PressableProps & {
  label: string;
  loading?: boolean;
};

export function Button({
  label,
  loading = false,
  ...pressableProps
}: ButtonProps) {
  return (
    <Pressable style={styles.container} {...pressableProps}>
      <Text style={styles.label}>{label}</Text>
      {loading && <ActivityIndicator />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.yellow,
    paddingHorizontal: spacing.M,
    paddingVertical: spacing.S,
    borderRadius: radius.S,
    gap: spacing.XS
  },
  label: {
    fontSize: 20,
    fontWeight: 'semibold'
  }
});
