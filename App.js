/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import UserData1 from './components/UserData1';
import {
  Button,
  Text,
  View,
} from 'react-native';

let age = 22
let email = "durgesh@gmail.com"
function App(){
  let name = "raju shriwastav"
  function fruit(val){
    console.warn(val)
    return "apple";
  }
  return (
    <View>
      {/* <Text style={{fontSize: 40}}> this is react native</Text>
      <Text style = {{fontSize: 20}} >{age}</Text>
      <Text style={{fontSize: 30}}>{email}</Text>
      <Button title='press here' color={"#cbf542"} >this is for pressing perpose</Button>
      <Text style = {{fontSize: 10}}>{name}</Text>
      <Text style={{fontSize: 40}}>{fruit}</Text>
      <Button title='press here' color={"#42f57e"} >this is for pressing perpose</Button> */}
      <UserData/>
      <UserData1/>
      <Button title='On press' onPress={fruit} color={'green'} />
      <Button title='On press' onPress={ () => fruit("durgesh rajak")} color={'red'} />
       {/*for passing argument*/}
    </View>
  );
};

const UserData = () => {
  return(
    <Text>
      <Text style = {{fontSize: 20}} >Name: Durgesh rajak</Text>  
      <Text style = {{fontSize: 20}} >Age: 27</Text>
      <Text style = {{fontSize: 20}} >gender: Male</Text>
    </Text>
  )
}

export default App;
