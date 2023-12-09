import React, {useState} from "react";
import { Button, Text, View } from "react-native";

const App = () => {
    const [name, setName] = useState("raj")

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Props in react-native</Text>
            <Button title="update name" onPress={()=>setName("durgesh")}></Button>
            <User name = {name}  age = {23}/>
        </View>
    );
};

const User = (props) => {
    return (
        <View style={{ backgroundColor: 'green', padding: 5 }}>
            <Text style={{ fontSize: 30 }}>Name: {props.name}</Text>
            <Text style={{ fontSize: 30 }}>Age: {props.age}</Text>
        </View>
    );
};

export default App;
