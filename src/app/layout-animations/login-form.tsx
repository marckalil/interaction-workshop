import { useState } from 'react';
import { Button } from '@/src/components';
import { TextInput } from '@/src/components/TextInput';
import { spacing } from '@/src/constants';
import { StyleSheet, View } from 'react-native';

function isEmailValid(email: string) {
  return email.includes('@');
}

function isPasswordValid(password: string) {
  return password !== '' && password !== 'error';
}

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFocusEmail = () => {
    setShowEmailError(false);
  };
  const onFocusPassword = () => {
    setShowPasswordError(false);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!isEmailValid(email)) setShowEmailError(true);
      if (!isPasswordValid(password)) setShowPasswordError(true);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          errorMessage="Invalid e-mail"
          onChangeText={handleEmailChange}
          onFocus={onFocusEmail}
          placeholder="Email"
          showError={showEmailError}
        />
        <TextInput
          errorMessage="Invalid Password"
          onChangeText={handlePasswordChange}
          onFocus={onFocusPassword}
          placeholder="Password"
          secureTextEntry
          showError={showPasswordError}
        />
      </View>
      <Button label="Login" loading={loading} onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.M,
    gap: spacing.ML
  },
  inputContainer: {
    width: '100%',
    gap: spacing.XS
  }
});
