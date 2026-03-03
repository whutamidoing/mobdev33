import {View,Text, StyleSheet} from 'react-native'
import { Checkbox } from 'expo-checkbox';

function StudentCard(props){
    return(
    <View style={{borderColor:'black',borderWidth:1,width:'80%',padding:5,marginBottom:10}}>
        <Text>ID:{props.id}</Text>
        <Text>Name:{props.name}</Text>
        <Text>Course:{props.course}</Text>
        <Text>Year:{props.year}</Text>
        <Checkbox value={props.isEnrolled}
        onValueChange={(val)=>props.changeEnrolled(val,props.id)}/>
    </View>
    )
}

function CourseCard(){
    return(
         <View style={{borderColor:'black',borderWidth:1,width:'80%',padding:5,marginBottom:10}}>
        
        <Text>Course Name:CpE</Text>
        <Text>Population:100</Text>
      </View>
    )
}


export default StudentCard
export {CourseCard}