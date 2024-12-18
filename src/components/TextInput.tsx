import {
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  View
} from 'react-native';
import { color, spacing } from '@/src/constants';

type TextInputProps = RNTextInputProps & {
  errorMessage?: string;
  showError?: boolean;
};
export function TextInput({
  errorMessage = 'Error',
  showError = false,
  style,
  ...textInputProps
}: TextInputProps) {
  return (
    <View style={styles.container}>
      <RNTextInput
        style={[styles.textInput, style]}
        placeholderTextColor="grey"
        {...textInputProps}
      />
      {showError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48 + spacing.S + 12,
    gap: spacing.XXS
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: 48,
    paddingHorizontal: spacing.M,
    paddingVertical: spacing.S,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'black'
  },
  errorMessage: {
    color: color.red,
    fontSize: 12
  }
});
