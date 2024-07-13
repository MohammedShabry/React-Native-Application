// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/actions';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(signOut());
    navigation.navigate('Login'); // Navigate to login screen after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>ThroneApp</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.text}>Name: {user.displayName}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  appName: {
    color: '#f1c40f',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
