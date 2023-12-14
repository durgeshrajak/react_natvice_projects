import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const App = () => {
    const [selectRadio, setSelectRadio]= useState(0)
    return(
        <View style={styles.main}>
            <TouchableOpacity onPress={() => setSelectRadio(0)}>
            <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                {
                    selectRadio === 0 ? <View style={styles.radioBg}></View> : null
                }
                </View>
                <Text style={styles.radioText}>radio1</Text>
            </View>    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectRadio(1)}>
            <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                {
                    selectRadio === 1 ? <View style={styles.radioBg}></View> : null
                }
                </View> 
                <Text style={styles.radioText}>radio2</Text>
            </View>    
            </TouchableOpacity>            
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