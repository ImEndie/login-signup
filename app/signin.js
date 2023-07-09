import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput,Image, View, Text,Alert} from "react-native";

const PlaceholderImage = require('../assets/login.webp');

export default function SignIn(){
    const  [userName,setUserName] = useState('');
    const  [password,setPassword] = useState('');
    const router = useRouter();
    check=()=>{
        return userName.length>3 && password.length>6
    }
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
            <View style={styles.pressableTexts}>
                <Text style={styles.pressableText} onPress={()=>router.back()}>Go Back</Text>
                <Text style={styles.pressableText} onPress={()=>{check()?Alert.alert("Success","You're signed up"):Alert.alert("Error","Enter valid credentials")}}>{"Sign In >>>"}</Text>
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
        marginTop: 50,
        marginBottom: 20
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