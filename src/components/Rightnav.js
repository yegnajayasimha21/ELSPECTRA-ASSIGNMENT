import React, {useState} from 'react'
import '../App.css';
import { useForm } from "react-hook-form";

function Rightnav(props){
    let dataBase = props.dataBase;
    let handleChange = props.handleChange
    let editForm = props.editForm
    let updateEditForm = props.updateEditForm
    let editSave = props.editSave
    let onSubmit = props.onSubmit
    let newForm = props.newForm
    let newFormState = props.newFormState
    // let register = props.register
    // let handleSubmit = props.handleSubmit
    const { register, handleSubmit, setValue } = useForm();
   console.log("new form state", newFormState)
    return(
        <div>
        <div>
            <button onClick={()=>{updateEditForm()}}>Edit Form</button>
            <button onClick={()=>{newForm()}}>Add New Form</button>
        </div>
        <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <input type="number" name="id" {...register("id")} style={{display: 'none'}} value={dataBase.id}  />
      <label>Cat Name: <br/>
      {!editForm ?
        <input type="text" name="name" {...register("name")} value={dataBase.name}/> :
        <input type="text" name="name" {...register("name")} defaultValue={dataBase.name} onChange={handleChange}/>
      }
      </label> <br/>
      <label>Cat Image:<br/>
      {!editForm ?
        <input type="text" name="image" {...register("image")} value={dataBase.image} /> :
        <input type="text" name="image" {...register("image")} defaultValue={dataBase.image} onChange={handleChange}/>
    }
      </label> <br/>
      <label>Cat Clicks: <br/>
      {!editForm ?
        <input type="number" value={dataBase.numberOfClicks}/> 
        :
        <input type="number" name="numberOfClicks" {...register("numberOfClicks")} defaultValue={dataBase.numberOfClicks} onChange={handleChange}/> 
      }
        
      </label>
        <div>
            <button>Save</button>
            <button>Undo</button>
        </div>
    </form>
        </div>
    );
}

export default Rightnav