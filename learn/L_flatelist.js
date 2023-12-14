import React from "react";
import { View, Button, FlatList,StyleSheet, Text, ScrollView } from "react-native";

const App = () => {
    const users = [
        {
            id : 1,
            user: "raj"
        },
        {
            id : 2,
            user: "ansi"
        },
        {
            id : 3,
            user: "anna"
        },
        {
            id : 4,
            user: "ashish"
        },
        {
            id : 5,
            user: "reshma"
        },
        {
            id : 6,
            user: "mahesh"
        },
        {
            id : 7,
            user: "rajesh"
        },
        {
            id : 8,
            user: "sumit"
        },
        {
            id : 8,
            user: "sumit"
        },
        {
            id : 8,
            user: "sumit"
        },        {
            id : 8,
            user: "sumit"
        }
    ]
    return(
        // <View>
        //     <Text style={{ fontSize: 40 }}>list using FlatList</Text>
        //     <FlatList
        //     data={users}
        //     renderItem={({item})=> <Text style= {styles.item}> {item.user}</Text>}
        //     />
        // </View>
/////////////////////// ### {using map function }??????????????????????????//
        <View>
            <Text style={{fontSize : 30 }}> list using map function</Text>
            <ScrollView style= {{marginBottom: 30}}>
            {
                users.map((item)=> <Text style={styles.item}>{item.user}</Text>)
            } 
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    item:{
        fontSize:24,
        padding:10,
        color: "#fff",
        backgroundColor:"blue",
        borderColor:"black",
        borderWidth:1,
        margin:10
    }
})

export default App;