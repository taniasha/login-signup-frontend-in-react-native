import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

function MyButton({ title, onPress }) {
    return (
        <View>
            {/* <Button title="Continue"/> */}
            <TouchableOpacity style={styles.button} onPress={onPress}>
                 <Text style={{fontSize:16}}>{ title }</Text>
            </TouchableOpacity>
        </View>

        // by default react native button look like this : 
        //  {/* <Button title="continue"/> */}
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'lightblue',
        paddingVertical:15,
        borderRadius:10,
        paddingHorizontal:20,
        alignItems:'center',
        margin:10,
    }
})

export default MyButton
