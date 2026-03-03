
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import StudentCard,{CourseCard} from './Components/StudentCard'
import {useState} from 'react'
import StudentForm from './Components/StudentForm';



export default function App() {

  const [studentList,setStudentList]=useState([
    {id:1, name:"Patrick",course:"CpE",year:"4th Year", enrolled:true},
    {id:2, name:"Chiz",course:"IT",year:"3rd Year", enrolled:false},
    {id:3, name:"Gran",course:"CS",year:"2nd Year", enrolled:true},
    {id:4, name:"Marr",course:"ICT",year:"3rd Year", enrolled:false}
  ])

  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [course,setCourse]=useState('')
  const [year,setYear]=useState('')

  const addStudent=()=>{
    let i=0;
   for(;i<studentList.length && studentList[i].id != id;i++){}
  if(i>=studentList.length){
      const toAdd = {id:id,name:name,course:course,year:year}
      setStudentList([...studentList,toAdd])
      
      Alert.alert("Student Added", `Name:${name} Course:${course} Year:${year}`)
  }else{
    Alert.alert("ID already exists", "Please enter a unique ID")
  }
}

  const changeEnrolledStatus=(val,studentId)=>{
    setStudentList(previousList=>
      previousList.map((student)=>
        student.id===studentId ? {...student, enrolled:val} : student
      )
    )

    // const newlist = [...studentList];

    // for(let i=0; i<newlist.length;i++){
    //   if(newlist[i].id == studentId){
    //     newlist[i].enrolled = val}
    //   }
    
    // setStudentList(newlist)
    console.log("Test", studentId, val)
  }


  return (

    <View style={styles.container}>

  
    {studentList.map((student,index)=>{
      return(
        <StudentCard key={index} id={student.id} changeEnrolled={changeEnrolledStatus} name={student.name} course={student.course} year={student.year} isEnrolled={student.enrolled}/>
      )
      
  })}

   <StudentForm onChangeID={setId} onChangeName={setName} onChangeCourse={setCourse} onChangeYear={setYear} addStudent={addStudent} />
    </View>
 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
