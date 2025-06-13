import { StyleSheet, Text, View } from "react-native";

const Onboarding = () => {
    return(
        <View>
            <Text style={styles.textColor}>Onboarding</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textColor : {
        color : 'blue',
        fontSize : 20,
        fontWeight : 700,
        display: 'flex',
        justifyContent : 'center',
        marginTop : 10,
    }
})

export default Onboarding