import React from "react";
import { Button, View, Text, TouchableHighlight, StyleSheet } from "react-native";

const App = ()=> {
    return(
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={[styles.btn, styles.success]}>success</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={''}>
                <Text style={[styles.btn, styles.primary]}>primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.btn, styles.warn]}>warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.btn, styles.error]}>Error</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.btn}>Button</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        main:{
            flax:1
        },
        btn:{
            backgroundColor:"#bbb",
            color:"#fff",
            fontSize:25,
            textAlign:"center",
            padding:10,
            margin:10,
            borderRadius:10,
            shadowColor:'red',
            elevation:10,
            shadowOpacity:1
        },
        success:{backgroundColor:'green'},
        primary:{backgroundColor:'blue'},
        warn:{backgroundColor:'yellow', color:'green'},
        error:{backgroundColor:'red'}


    }
)
export default App;
