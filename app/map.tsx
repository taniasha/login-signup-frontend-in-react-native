import { Background } from '@react-navigation/elements';
import React from 'react'
import { ScrollView, View } from 'react-native';

function Map() {
    return (
        <ScrollView horizontal>
           { [1,2,3,4,5,6,7,8,9,0].map((item)=>{
                return(
                    <View style={{
                        backgroundColor:'red',
                        width:100,
                        height:100,
                        marginRight:10,
                        marginTop:40,

                    }}/>
                )
            })}
            
        </ScrollView>
    )
}

export default Map;
