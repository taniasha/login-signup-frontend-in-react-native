import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native';

export default function Login() {
    const router = useRouter();

    return (
        <View style={{flex:1, backgroundColor:"#8a5485ff"}}>
            <Image 
                source={{uri:'https://www.pngplay.com/wp-content/uploads/1/Login-PNG-Royalty-Free-Image.png'}}
                style={{width:400, height:400}}  resizeMode='contain'/>

            <TextInput placeholder ="Enter your email" style={style.placeholder}/>

            <TextInput placeholder ="Enter your password" style={style.placeholder}/>

            <MyButton title={"Login"} onPress={()=> router.navigate("/signup") }/>
            <MyButton title={"Home"} onPress={()=> router.navigate("/") }/>

        </View>
    )
}

const style = StyleSheet.create({
    placeholder:{
         borderWidth:1,
         height: 50,
         paddingHorizontal: 20,
         borderRadius: 10,
         margin:10,
    }

})