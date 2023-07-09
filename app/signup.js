import { LinearGradient } from "expo-linear-gradient";
import {  useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput,Image, View, Text, Alert} from "react-native";

const PlaceholderImage = require('../assets/reg.webp');

export default function SignUp(){
    const  [userName,setUserName] = useState('');
    const  [password,setPassword] = useState('');
    const  [password2,setPassword2] = useState('');
    check=()=>{
        return password==password2 && userName.length>3 && password.length>6
    }
    const router = useRouter();
    return (
        <LinearGradient style={styles.container} colors={["#E0EAFC","#CFDEF3"]}>
            <Image source={PlaceholderImage} style={styles.loginImg}/>
            <TextInput
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                style={styles.input}
                secureTextEntry={true}
            />
            <TextInput
                value={password2}
                onChangeText={(password2) => setPassword2(password2)}
                placeholder={'RetypePassword'}
                style={styles.input}
                secureTextEntry={true}
            />
            <View style={styles.pressableTexts}>
                <Text style={styles.pressableText} onPress={()=>router.back()}>Go Back</Text>
                <Text style={styles.pressableText} onPress={()=>{check()?Alert.alert("Success","You're signed up"):Alert.alert("Error","Enter same passwords")}}>{"Sign Up >>>"}</Text>
            </View>
        </LinearGradient>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    loginImg: {
        width: 250,
        height: 250,
        marginTop: 18
    },
    input:{
        width: 320,
        height: 50,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#e8e8e8',
        borderRadius: 30,
        padding: 13,
    },
    pressableTexts:{
        flexDirection: "row",
        justifyContent: "space-around",
        width: 300,
        marginTop: 20
    },
    pressableText:{
        color: "#9A98CD",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "transparent",
        padding: 0,
        margin: 0,
        borderBottomWidth: 2,
        borderBottomColor: "#9A98CD",
        borderStyle: "solid",
        fontStyle: "italic"
    }
})