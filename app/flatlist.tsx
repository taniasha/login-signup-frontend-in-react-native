import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native';

function Flatlist() {
    return (
        <ScrollView>
            <FlatList  data = {[1,2,3,4,5,6,7,8,9,1,2,3,4,5,9,1,2,3,4,5]}
            numColumns={4}
            ListHeaderComponent={
                <View style={{width:"100%", height: 100, backgroundColor:"blue"}}>
                </View>
            }
            renderItem={({item})=>{
               return(
                  <View 
                     style = {{
                        width: 100,
                        height: 100,
                        marginTop:30,
                        backgroundColor: "red",
                        marginBottom: 20,
                        marginRight: 20,
                        justifyContent: "center",
                        alignItems:"center"
                     }}
                  >
                    <Text>{item}</Text>
                  </View>
               )
            }}
            />
        </ScrollView>
    )
}

export default Flatlist;
