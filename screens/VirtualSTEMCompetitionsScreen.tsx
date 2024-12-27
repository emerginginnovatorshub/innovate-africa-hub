
import { View, Text, StyleSheet } from 'react-native';

export default function VirtualSTEMCompetitionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Virtual STEM Competitions</Text>
      {/* Competition list, entry form, etc. */}
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