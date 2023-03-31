import { StyleSheet, Text, View , ImageBackground,Image,TouchableOpacity} from 'react-native'
import React from 'react'
const Welcome = ({handleChangeScreen}) => {

  return (
    <View style={styles.container}>
        <ImageBackground source={require("./assets/background.jpg")} style={{width:'100%', height:'100%', alignItems:"center"}}>
      
<Image source={require("./assets/logo-red.png")} style={{width:150, height:150,marginTop:100}}/>
      <Text>Sell What You Don't Need</Text>
      <View style={{width:'100%', marginTop:"90%"}}>
       <TouchableOpacity style={styles.btn} onPress={handleChangeScreen} >
        <Text></Text> 
       </TouchableOpacity >
       <TouchableOpacity style={styles.btn2} >
        <Text></Text> 
       </TouchableOpacity >
      </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'

      },
      btn:{backgroundColor:'#fc5c65', height:60, width:"100%" },
      btn2:{backgroundColor:'#4ECDC4', height:60, width:"100%" }
})