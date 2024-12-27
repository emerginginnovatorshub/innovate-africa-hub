
import { View, Text, StyleSheet } from 'react-native';

export default function MentorshipHubScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentorship & Collaboration Hub</Text>
      {/* Chat or mentor matching UI */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontSize: 24, fontWeight: 'bold'
  }
});