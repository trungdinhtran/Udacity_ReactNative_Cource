import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Button, Pressable, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import welcomeStyles from './styles';

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles())
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <Text>Welcome to Customer Manager Plus</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List Regions')}><Text>Click to Continue...</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}><Text>Clear Storage...</Text></TouchableOpacity>
    </SafeAreaView>
  );
}