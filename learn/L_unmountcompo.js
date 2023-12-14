import React,{useEffect, useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
    const [show, setShow] = useState(false)
    return(
        <View> 
            <Text style={{fontSize:30}}> unmounting components </Text>
            <Button title="toggle omponent" color={'green'} onPress={() => setShow(!show)}/>
            {
                show ? < User/> : null
            }
        </View>
    )
}

const User = ()=> {
    return(
        <View>
            <Text style= {{fontSize:25, color:'red'}}>component mount</Text>
        </View>
    )
}

export default App;