import { StyleSheet, TouchableOpacity, View ,Image, Text} from 'react-native'
import React from 'react'
const ViewImage = () => {
  return (
    <View style={styles.container}>
     
      

     
      <View style={{width:'100%', flexDirection:'row', justifyContent:'space-evenly',margin:100,  }}>
      <TouchableOpacity style={styles.btn}>
      <Text>t</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text>.</Text>
          </TouchableOpacity>
        
      </View>
      <Image source={require("./assets/chair.jpg")}  style={{ height:500, width:'100%'}}/>
      
    </View>
  )
}

export default ViewImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'

      },
      btn:{backgroundColor:'#fc5c65', height:60, width:"20%" },
      btn2:{backgroundColor:'#4ECDC4', height:60, width:"20%" }
})