import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>

         <Drawer.Screen name="index"   options={{
            drawerLabel: "Home",
            title: "My Home", // title in header
          }}/>
          
         <Drawer.Screen name ="about"/>

      </Drawer>
    </GestureHandlerRootView>
  );
}
