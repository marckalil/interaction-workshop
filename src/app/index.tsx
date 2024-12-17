import { StyleSheet, View } from 'react-native';
import { NavigationItem } from '@/src/components';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

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
