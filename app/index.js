import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StyleSheet,  Image, Pressable} from "react-native";

const PlaceholderImage = require('../assets/home.webp');

export default function HomePage(){
    return (
        <LinearGradient style={styles.container} colors={["#E0EAFC","#CFDEF3"]}>
            <Image source={PlaceholderImage} style={styles.loginImg}/>
            <Pressable>
                <Link style={styles.button} href={"/signin"}>
                    Sign In
                </Link>
            </Pressable>
            <Pressable>
                <Link style={styles.button} href={"/signup"}>
                    Sign Up
                </Link>
            </Pressable>
        </LinearGradient>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    loginImg: {
        width: 400,
        height: 400,
        marginTop: 50,
    },
    button:{
        backgroundColor: "#6882E1",
        padding: 18,
        fontSize: 36,
        fontWeight: 300,
        color: "#fff",
        borderRadius: 30,
        paddingHorizontal: 70,
        fontFamily: "monospace",
        marginVertical: 12
    }
})