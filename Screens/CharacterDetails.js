import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterDetails = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Character Detail</Text>
      <Text style={styles.name}>{character.fullName}</Text>
      <Image source={{ uri: character.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.detail}>{character.id}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.detail}>{character.firstName}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.detail}>{character.lastName}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.detail}>{character.title}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Family:</Text>
          <Text style={styles.detail}>{character.family}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Image URL:</Text>
          <Text style={styles.detail}>{character.imageUrl}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop:50
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f1c40f',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    color: '#f1c40f',
    fontWeight: 'bold',
    marginRight: 8,
    width: 100,
  },
  detail: {
    flex: 1,
    color: '#fff',
  },
});

export default CharacterDetails;
