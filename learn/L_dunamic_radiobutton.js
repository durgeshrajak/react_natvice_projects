import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const App = () => {
    const skills = [
        {
            id:1,
            name: 'python',
        },
        {
            id:2,
            name: 'javascript',
        },
        {
            id:3,
            name: 'postgrasql',
        },
        {
            id:4,
            name: 'Java',
        },
        {
            id:5,
            name: 'php',
        },
    ]
    const [selectRadio, setSelectRadio]= useState(0)
    return(
        <View style={styles.main}>
        {
            skills.map((item, index)=>{
            <TouchableOpacity 
            key = {index}
            onPress={() => setSelectRadio(item.id)}>
            <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                {
                    selectRadio == item.id ? <View style={styles.radioBg}></View> : null
                }
                </View>
                <Text style={styles.radioText}>{item.name}</Text>
            </View>    
            </TouchableOpacity> 
            }) 
        }          
        </View>
    )
}

const styles = StyleSheet.create(
    {
        main:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        radioText:{
            fontSize:30,
            color:'skyblue'
        },
        radio:{
            height:40,
            width:40,
            borderColor:'black',
            borderWidth:2,
            borderRadius:20,
            margin:10 
        },
        radioBg:{
            backgroundColor:'green',
            width:20,
            height:20,
            borderRadius:20,
            margin:7,
        },
        radioWrapper:{
            flexDirection:'row',
            alignItems:"center"
        }
    }
)

export default App;