import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native';

export default function Signup() {
    const router = useRouter();

    return (
        <View style={{flex:1, backgroundColor:"#94588eff"}}>
            <Image 
                source={{uri:'https://i0.wp.com/www.hiptac.org/wp-content/uploads/2020/09/Sign-up.png?resize=1536%2C1536&ssl=1'}}
                style={{width:400, height:400}}  resizeMode='contain'/>

            <TextInput placeholder ="Enter your name" style={style.placeholder}/>

            <TextInput placeholder ="Enter your email" style={style.placeholder}/>

            <TextInput placeholder ="Enter your password" style={style.placeholder}/>

            <TextInput placeholder ="Enter your re-enter password" style={style.placeholder}/>


            <MyButton title={"Register"} onPress={()=> router.navigate("/login") }/>
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