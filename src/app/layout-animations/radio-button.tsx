import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton } from '@/src/components';

export default function RadioButtonExample() {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev: boolean) => !prev);
  };

  return (
    <View style={styles.container}>
      <RadioButton checked={checked} onPress={toggleChecked} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
