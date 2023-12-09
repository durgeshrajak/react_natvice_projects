import React, {useState} from 'react';
import {Button, Text, View,} from 'react-native';
const App = () => {
    const [name, setName] = useState("pikku")

    function testName(){
        setName("narendra modi")
    }
    return(
        <View>
            <Text style = {{ fontSize: 30}}>State in react- native</Text>
            <Text style = {{ fontSize: 30}}>{name}</Text>
            <Button title='update name' onPress={testName} color={'green'} />
        </View>
    )
}
export default App;