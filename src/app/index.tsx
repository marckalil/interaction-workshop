import { StyleSheet, View } from 'react-native';
import { NavigationItem } from '@/src/components';

export default function Index() {
  return (
    <View style={styles.container}>
      <NavigationItem href="/layout-animations" label="Layout animations" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 16
  }
});
