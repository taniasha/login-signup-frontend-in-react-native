import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler';

export default function login() {
    const router = useRouter();

    return (
        <View style={{flex:1, backgroundColor:"#8a5485ff", justifyContent:'center', alignItems:'center'}}>
            <Image 
                source={{uri:'https://www.pngplay.com/wp-content/uploads/1/Login-PNG-Royalty-Free-Image.png'}}
                style={{width:400, height:400}}  resizeMode='contain'/>

            <TextInput placeholder ="Enter your email" style={style.placeholder}/>

            <TextInput placeholder ="Enter your password" style={style.placeholder}/>

            <MyButton title={"Login"} onPress={()=> router.navigate("/signup") }/>
        </View>
    )
}

const style = StyleSheet.create({
    placeholder:{
         borderWidth:1,
         height: 50,
         paddingHorizontal: 20,
         borderRadius: 10,
         marginTop:10,
    }

})