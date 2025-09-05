import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabRout(){
    return(
       <Tabs>
          <Tabs.Screen name="login" options={{ title: "Login" }} />
          <Tabs.Screen name="signup" options={{ title: "Signup" }} />
          {/* <Tabs.Screen name="index" options={{title:"Home",
              tabBarIcon: ({color}) =>(
                  <FontAwesome size={30} name="home" color={color}/>
              )
          }}/>
          <Tabs.Screen name="map" options ={{title:"about",
              tabBarIcon:({color})=>(
                  <FontAwesome size={30} name="info-circle" color={color}/>
            )
          }}/> */}
       </Tabs>
    )
}