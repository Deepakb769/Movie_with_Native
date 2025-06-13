import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
    return(
        <View style={styles.greating} >
            <Text style={styles.text}>Welcome</Text>
            <Link style={styles.link} href='/onboarding'>Onboarding.......</Link>
        </View>
    )
}   

const styles = StyleSheet.create({
    greating : {
        display: 'flex',
        justifyContent : 'center',
     // backgroundColor : 'red'
    },
    link : {
        color : 'blue',
        textAlign : 'center',
    },
    text : {
        fontSize : 24,
        textAlign : 'center',
    }
})

export default index;
