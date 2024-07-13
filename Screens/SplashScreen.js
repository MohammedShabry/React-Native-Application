import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreenComponent = () => {
  const [splashVisible, setSplashVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
      navigation.replace('Login');
    }, 3000); // Replace 'Login' with your actual screen name

    return () => clearTimeout(timer);
  }, []);

  if (splashVisible) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ThronesApp</Text>
      </View>
    );
  }

  return null; // Render nothing once splash screen is hidden
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    color: '#fff',
  },
});

export default SplashScreenComponent;
