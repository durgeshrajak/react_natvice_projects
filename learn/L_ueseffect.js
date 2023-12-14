import React, { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const App = () => {
    const [count , setCount] = useState(0)
    // this use state is only run when componentdidmount apply because of []
    // useEffect(() => {
    //     console.warn("hi")
    // },[])

    useEffect(() => {
        console.warn(count)
    },[count])

    
    return(
       <View>
        <Text style={{fontSize:35}}>life cycle with useEffect {count}</Text>
        <Button title="update caunt"  style={stytes.button} onPress={()=> setCount(count + 1)}/> 
        <Button title="decrese caunt" style={stytes.btn} onPress={()=> setCount(count - 1)}/> 
       </View>
    )
}

const stytes = StyleSheet.create(
    {
        button: {
            width: 50,
            height: 50,
            borderRadius: 25, // half of the width and height to make it circular
            backgroundColor: 'blue', 
            justifyContent: 'center',
            alignItems: 'center',
          },
          buttonText: {
            color: 'white',
            fontSize: 16,
          },
}
)

export default App;