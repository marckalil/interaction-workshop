import { StyleSheet, Pressable, PressableProps, Text } from 'react-native';
import { color, radius, spacing } from '@/src/constants';

type ButtonProps = PressableProps & {
  label: string;
};

export function Button({ label, ...pressableProps }: ButtonProps) {
  return (
    <Pressable style={styles.container} {...pressableProps}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
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
