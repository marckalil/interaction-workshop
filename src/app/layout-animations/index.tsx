import { StyleSheet, View } from 'react-native';
import { NavigationItem } from '@/src/components';
import { spacing } from '@/src/constants';

export default function LayoutAnimations() {
  return (
    <View style={styles.container}>
      <NavigationItem href="/layout-animations/basics" label="Basics" />
      <NavigationItem href="/layout-animations/login-form" label="Login form" />
      <NavigationItem
        href="/layout-animations/radio-button"
        label="Radio button"
      />
      <NavigationItem href="/layout-animations/modal" label="Modal" />
      <NavigationItem href="/layout-animations/flat-list" label="FlatList" />
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
