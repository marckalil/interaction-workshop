import { StyleSheet, View } from 'react-native';
import { color } from '@/src/constants';

export function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: color.grey
  }
});
