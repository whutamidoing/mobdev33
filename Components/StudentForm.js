import {TextInput,Button,View} from 'react-native'

export default function StudentForm(props){
    return(
        <View style={{width:'100%',flex: 0.5,backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
            <TextInput style={{padding:5,borderWidth:1,borderColor:"black",width:'50%'}} onChangeText={(text)=>props.onChangeID(text)} placeholder="Enter ID"></TextInput>
            <TextInput style={{padding:5,borderWidth:1,borderColor:"black",width:'50%'}} onChangeText={(text)=>props.onChangeName(text)} placeholder="Enter Name"></TextInput>
            <TextInput style={{padding:5,borderWidth:1,borderColor:"black",width:'50%'}} onChangeText={(text)=>props.onChangeCourse(text)} placeholder="Enter Course"></TextInput>
            <TextInput style={{padding:5,borderWidth:1,borderColor:"black",width:'50%'}} onChangeText={(text)=>props.onChangeYear(text)} placeholder="Enter Year"></TextInput>
        
            <Button title="Add" onPress={props.addStudent}></Button>
        </View>
    )
} 