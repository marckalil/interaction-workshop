import { Pressable, StyleSheet, View } from 'react-native';
import { color } from '@/src/constants';

type RadioButtonProps = {
  checked?: boolean;
  onPress?: () => void;
};

export function RadioButton({ checked = false, onPress }: RadioButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.outerCircle}>
        {checked && <View style={styles.innerCircle} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: color.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: color.yellow
  }
});
