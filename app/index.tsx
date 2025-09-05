import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {

  const router = useRouter();

  return (
   <View style={{flex:1, backgroundColor:"#96dae6ff", justifyContent:'center', alignItems:'center'}}>
        <MyButton title={"Continue"} onPress={ ()=>router.navigate("/login") }/>
          {/* if not pass the router.navigate(), like the---- > ()=>router.navigate then it will render without even clicking on button */}

        <Button title={"Map"} onPress={()=>router.navigate("/map")}/>
   </View>
  );
}
