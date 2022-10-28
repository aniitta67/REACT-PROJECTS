import { useEffect, useState } from "react";
import Form from "./Form/Form";
import { v4 as uuidv4 } from 'uuid';

function App() {
const [contactlist,setContactlist]=useState(JSON.parse(localStorage.getItem("List"))||[])
const [edit, setEdit]=useState([])

const submitContact=(inputs)=>{
 
  setContactlist([...contactlist,{...inputs,id:uuidv4()}])
}
// console.log(contactlist)
// works when contactlist updated
useEffect(()=>{localStorage.setItem("List",JSON.stringify(contactlist))},[contactlist])
// contact list has local storage data
// delete
const removeContactHandler=(id)=>{
 
  const remove=contactlist.filter((data)=>{
    return data.id!=id
  })
   setContactlist(remove);
}
// edit
const editContactHandler=(id)=>{
  console.log("id==>",id) 
  const update=contactlist.filter((data)=>{
    return data.id==id
  })
  console.log("editeddata====>",update);
setEdit(update)
}


  return (
    // pass the function(props(submitContact))--we pass the variable here submitInput to the component Form.If there are more var or func we can pass it here and access using props in the components
     <Form 
     submitInput={submitContact} 
     contact={contactlist}
     removeContact={removeContactHandler}
     updateContact={editContactHandler}
     editData={edit}
     />
  );
}

export default App;
