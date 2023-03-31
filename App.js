import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './WelcomeScreen';
import ViewImage from './ViewImageScreen';
import { useState } from 'react';
export default function App() {
  const [showViewImageScreen, setShow]=useState(false)
  const handleChange=()=>{
    
setShow(!showViewImageScreen)
  }
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='transparent' style='dark'/>
     { showViewImageScreen ? <ViewImage/>: <Welcome handleChangeScreen={handleChange}/>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
