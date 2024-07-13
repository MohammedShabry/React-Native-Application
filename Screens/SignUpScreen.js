import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { auth, createUserWithEmailAndPassword } from '../firebase';
import { setUser } from '../redux/actions';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        navigation.navigate('Home');
      }
    });

    return unsubscribe;
  }, []);

  const showAlert = (message) => {
    Alert.alert('Message', message);
  };

  const handleSignup = () => {
    if (!name.trim()) {
      showAlert('Please enter your name');
      return;
    }

    if (!email.trim()) {
      showAlert('Please enter your email');
      return;
    }

    if (!password.trim()) {
      showAlert('Please enter your password');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      showAlert('Password must be at least 8 characters long');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch(setUser(user));
        showAlert('Signup successful');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          showAlert('Email address is already in use. Please use a different email.');
        } else {
          showAlert('Signup failed: ' + error.message);
        }
      });
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.passwordRules}>
        <Text style={styles.ruleText}>One lowercase character</Text>
        <Text style={styles.ruleText}>One uppercase character</Text>
        <Text style={styles.ruleText}>8 characters minimum</Text>
        <Text style={styles.ruleText}>One number</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.signupContainer}>
          <Text style={styles.signupText}>
            Have an account? <Text style={styles.signupLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  passwordRules: {
    width: '80%',
    marginTop: 10,
  },
  ruleText: {
    color: '#aaa',
    fontSize: 12,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#f1c40f',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
  signupContainer: {
    marginTop: 20,
  },
  signupText: {
    color: '#aaa',
  },
  signupLink: {
    color: '#f1c40f',
    fontWeight: '700',
  },
});
