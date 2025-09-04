import { View, Text, Image, StyleSheet } from "react-native";

export default function about() {
    return (
        <View>
            <Text>about page</Text>
            <Image source={{uri:'https://wallpaperaccess.com/full/8727291.jpg'}}
             style = {styles.image}></Image>
        </View>
    )
}


const styles = StyleSheet.create({
  image: {
       width: 200,
       height:200,
       borderRadius: 100/2,
       justifyContent: 'center',
       alignItems:'center',
       margin: 'auto',
  }
})