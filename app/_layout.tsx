import { Stack } from "expo-router";

export default function layout(){
    return(
         <Stack screenOptions={{headerShown: false}}>
             {/* <Stack.Screen  name="(tab)" options={{headerShown:false}}/> */}
             <Stack.Screen name="index"/>
             <Stack.Screen name="login"/>
             <Stack.Screen name="signup"/>
             
            {/* <Stack.Screen  name="(drawer)" options={{headerShown:false}}/>
            <Stack.Screen name="button" options={{title:"button"}}/>

            <Stack.Screen name="index" options={{title:"Home"}}/>
            <Stack.Screen name="about" options = {{title:"about"}}/> */}
        </Stack>
    );
}