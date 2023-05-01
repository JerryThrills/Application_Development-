import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
/*import JerisonIn from './assets/src/Components/JerisonIn';*/
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='red'/>
      <View>
        <JerisonIn/>
      </View>
    </View>
    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
