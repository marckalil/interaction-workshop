import { StyleSheet, View } from 'react-native';
import { NavigationItem } from '@/src/components';
import { spacing } from '@/src/constants';

export default function LayoutAnimations() {
  return (
    <View style={styles.container}>
      <NavigationItem href="/shared-values/basics" label="Basics" />
      <NavigationItem href="/shared-values/bottom-tabs" label="Bottom tabs" />
      <NavigationItem href="/shared-values/switch" label="Switch" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.M,
    gap: spacing.SM
  }
});
