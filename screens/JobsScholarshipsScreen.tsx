
import { View, Text, StyleSheet } from 'react-native';

export default function JobsScholarshipsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs & Scholarships</Text>
      {/* List of available opportunities */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold'
  }
});