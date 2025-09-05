import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native';

export default function Signup() {
    const router = useRouter();

    // Single state object for all fields (cleaner for bigger forms)
    const [form, setForm] = useState({
        email:'',
        password:'',
        name:'',
        repassword:''
    })

    const handleChange=(field, value)=>{
        // in React Native, there’s no e.target.value like on the web because there’s no DOM.
        setForm({...form, [field]:value})
    }

    const handleSignup=()=>{
        if(!form.email || !form.name || !form.password || !form.repassword) {
            alert("Fill the form completely.")
        }
        console.log("form",form);
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, backgroundColor:"#a5dee5ff"}}>
            <Image 
                source={{uri:'https://i0.wp.com/www.hiptac.org/wp-content/uploads/2020/09/Sign-up.png?resize=1536%2C1536&ssl=1'}}
                style={{width:360, height:343}}  resizeMode='contain'/>

            <TextInput placeholder ="Enter your name" style={style.placeholder}
             value={form.name} onChangeText={(text)=>handleChange("name",text)}/>

            <TextInput placeholder ="Enter your email" style={style.placeholder}
             value={form.email} onChangeText={(text)=> handleChange("email",text)}/>

            <TextInput placeholder ="Enter your password" style={style.placeholder}
             value={form.password} onChangeText={(text)=> handleChange("password",text)}/>

            <TextInput placeholder ="Enter your re-enter password" style={style.placeholder}
             value={form.repassword} onChangeText={(text)=> handleChange("repassword",text)}/>

            <MyButton title={"Register"} onPress={()=> handleSignup() }/>
            <MyButton title={"Home"} onPress={()=> router.navigate("/") }/>
            <Text>jhghjhjhh</Text>
                        <Text>jhghjhjhh</Text>
            <Text>jhghjhjhh</Text>
            <Text>jhghjhjhh</Text>
            <Text>jhghjhjhh</Text>

        </ScrollView>
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