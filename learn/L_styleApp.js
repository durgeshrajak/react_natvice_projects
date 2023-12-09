import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const App = () => {
    return(
        <View>
           <Text style={{fontSize:30, color:'green', backgroundColor:'black'}}>style in react-native</Text>
           <Text style={styles.textBox}> Hi Durgesh rajak</Text>
           <Text style={styles.textBox}> Hi Durgesh rajak</Text>
           <Text style={styles.textBox}> Hi Durgesh rajak</Text>
        </View>
    );  
}

const styles= StyleSheet.create(
    {
        textBox:{
            color: '#fff',
            fontSize:23,
            backgroundColor:'blue',
            marginBottom:10,
            padding:10,
            borderRadius:20,
            height:100,
            textAlignVertical:'center',
            textAlign: 'center',
            borderColor:'red',
            borderWidth:3
        }
    }
)

export default App;