
import { View, Text, StyleSheet } from 'react-native';

export default function LearningCenterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning & Resources Center</Text>
      {/* Additional UI for resources, courses, etc. */}
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