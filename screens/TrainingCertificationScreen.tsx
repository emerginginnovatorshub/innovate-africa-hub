
import { View, Text, StyleSheet } from 'react-native';

export default function TrainingCertificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training & Certification</Text>
      {/* Course listings, progress tracking */}
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