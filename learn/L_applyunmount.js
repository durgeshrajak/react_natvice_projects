import React,{useEffect, useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
    const [show, setShow] = useState(true)
    return(
        <View> 
            <Text style={{fontSize:30}}> using useEffect for unmounting components </Text>
            <Button title="toggle component" color={'green'} onPress={() => setShow(!show)}/>
            {
                show ? < Student/> : null
            }
        </View>
    )
}

const Student = ()=> {
    let timer =  setTimeout(() => {
        console.warn("time called")
    }, 2000);

    // useEffect(()=> {
    //     return () => {console.warn("useEffect colled on unmonunt")}
    // }
    
    useEffect(()=> {
        return () => {clearInterval(timer)}
    }
    )

    return(
        <View>
            <Text style= {{fontSize:25, color:'red'}}>Student component mount</Text>
        </View>
    )
}

export default App;