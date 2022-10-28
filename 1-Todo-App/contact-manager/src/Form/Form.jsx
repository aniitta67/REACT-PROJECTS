import React, { useEffect, useState } from 'react'
import './form.css'
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

import Display from '../Display/Display';

export default function Form({submitInput,contact, removeContact, updateContact,editData}) {
    console.log(editData);
const [inputs,setInputs]=useState({
    // fname:"",
    // email:""
});
const [update,setUpdate]=useState({});

const [updatenew,setUpdatenew]=useState(false);

const contactdetails=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs({...inputs,[name]:value})


}

const updateContacts=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUpdate({...update,[name]:value})
     console.log("onchange==>",update);
console.log(update);

}

 const submit=(e)=>{
    e.preventDefault()
    submitInput(inputs)
    
 } 

useEffect(()=>{
    if(editData[0]!="undefined"){
      setUpdate(editData[0])
      console.log(update)
    }
},[editData])


const submitUpdate=(u)=>{
    u.preventDefault()
    removeContact(editData[0].id)
    console.log(update)
     setUpdatenew(true)

 }


useEffect(()=>{
   
    if(updatenew==true){
        submitInput(update)
        window.location.reload()
     
    }
},[updatenew])

    return (

        <>
        {/*  editData[0]==null means there is no data came to editData.so the first form will work. In this case if there is no ? present taht will generate error so ? .*/}
            {editData[0]?.id== null     ?   
             <form action="" onSubmit={submit}>
            <div className='form'>
                <div className="formwrapper">
                    <h2 className='title'>CONTACT FORM</h2>
                    <TextField id="outlined-basic" label="Name" variant="outlined" className='input'  name='cname' onChange={contactdetails}  />
                    <TextField id="outlined-basic" label="Email" variant="outlined" className='input'  name='cemail' onChange={contactdetails} />
                    <div>
                            <Button variant="outlined" size="large" type='submit' >
                                SUBMIT
                            </Button>
                           
                        </div>
                    </div>
                </div>
            </form>    :   

             <form action="" onSubmit={submitUpdate}>
             <div className='form'>
                 <div className="formwrapper">
                     <h2 className='title'>EDIT FORM</h2>

                     <TextField id="outlined-basic"  variant="outlined" className='input'  value={update?.cname || ""}  name='cname' onChange={updateContacts}  />
                     <TextField id="outlined-basic"  variant="outlined" className='input'  value={update?.cemail || ""}  name='cemail' onChange={updateContacts} />
                     <div>
                             <Button variant="outlined" size="large" type='submit' >
                                 EDIT
                             </Button>
                            
                         </div>
                     </div>
                 </div>
             </form> }
           

          

        {contact.map((data)=>
           <Display  deleteContact={ removeContact}
                     display={data}
                     updateContacts={updateContact}
                    
           />
          
        )}

        </>
    )
}
