import React, { useState } from "react";
import { Text, View, Button, StatusBar, StyleSheet } from "react-native";

const App = () => {
    const [hide, setHide] = useState(false)
    const [show, setshow] = useState("defult")
    return(
        <View style={styles.container}>
            <StatusBar 
            backgroundColor={'orange'}
            barStyle={show}
            hidden={hide}
            />
                <Text style={{fontSize:30}}>hi, i am statusBar</Text>
            <View style={styles.btn}>   
            <Button title="toggele statusbar" onPress={()=>setHide(!hide)}/> 
            <Button title="update colour contant" onPress={()=> setshow("dark-content")}  />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center'
        },
        btn:{
            marginBottom:10,
            backgroundColor:'green',
            
        }
    }
)
export default App;