import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native';

export default function Login() {
    const router = useRouter();

    //Separate state for each field (simple for small forms)
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');

    const handleLogin=()=>{
        if(!email || !password){
            alert("Both field are required");
        }

        console.log("Email",email);
        console.log("Password", password);
        router.navigate('/');
    }

    return (
        <View style={{flex:1, backgroundColor:"#81d3deff"}}>
            <Image 
                source={{uri:'https://www.pngplay.com/wp-content/uploads/1/Login-PNG-Royalty-Free-Image.png'}}
                style={{width:350, height:400}}  resizeMode='contain'/>

            <TextInput placeholder ="Enter your email"
              style={style.placeholder} 
              value={email} 
              onChangeText={setEmail}  //update email state   
            />

            <TextInput placeholder ="Enter your password" 
              style={style.placeholder}
              value={password}
              onChangeText={setPassword}   //update password state 
              secureTextEntry={true}     //hides password 
            />

            <MyButton title={"Login"} onPress={()=> handleLogin() }/>
            <MyButton title={"Signup"} onPress={()=> router.navigate("/signup") }/>

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