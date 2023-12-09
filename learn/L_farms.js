import React, { useState } from "react";
import { Button, Text, TextInput,View, StyleSheet } from "react-native";

const App = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [display, setDisplay] = useState(false)

    const  resetFormData = () => {
        setDisplay(false);
        setName("");
        setEmail("");
        setPassword("");
    }

    return(
        <View>
            <Text style= {{fontSize:30, color:"#214f3c"}}>this is for taking data from user</Text>
            <TextInput 
            style ={styles.textInput} 
            placeholder="enter you name"
            value = {name}
            onChangeText={(text)=> setName(text)}
            />
            <TextInput 
            style ={styles.textInput} 
            placeholder="enter you email"
            value = {email}
            onChangeText={(text)=> setEmail(text)}
            />
            <TextInput 
            style ={styles.textInput} 
            secureTextEntry={true}
            placeholder="enter you password"
            value = {password}
            onChangeText={(text)=> setPassword(text)}
            />
            <View style={{marginBottom:10}}>
                <Button color={"green"} title="show details"  onPress={() => setDisplay(true)} />
            </View>
            <Button title="clear data" onPress={resetFormData} />

            <View>
                {
                    display ?
                    <Text>
                            <Text>user name is: {name} </Text>
                            <Text>user email is: {email} </Text>
                            <Text>user password is: {password}</Text>
                    </Text>
                    : null
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textInput :{
    fontSize: 18,
    color: 'green',
    borderWidth:2,
    borderColor:'blue',
    margin:10
    }
})

export default App;
