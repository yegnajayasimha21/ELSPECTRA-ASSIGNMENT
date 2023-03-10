import React, {useState} from 'react';
import './App.css';
import Catgallery from './components/Catgallery';
import Leftnav from './components/Leftnav';
import Middlenav from './components/Middlenav';
import Rightnav from './components/Rightnav';
import { useForm } from "react-hook-form";


function App() {

  const [dataBase, setDataBase] = useState([
    {
      id:1,
      name: "kitty",
      numberOfClicks: 0,
      image: "kitty.jpeg"
    },
    {
      id: 2,
      name: "puppy-rush",
      numberOfClicks: 0,
      image: "puppy-rush.jpeg"
    },
    {
      id: 3,
      name: "kitty3",
      numberOfClicks: 0,
      image: "kitty3.jpeg"
    },
    {
      id: 4,
      name: "kitty4",
      numberOfClicks: 0,
      image: "kitty4.jpeg"
    }
  ])
  const [initialMiddleImage, setInitialMiddleImage]= useState(dataBase[0])
  const [leftNavClick, setLeftNavClick] = useState(0)
  const [editForm, setEditForm] = useState(false);
  const [newFormState, setNewFormState] = useState(false);
  


  const onSubmit = (data) => {    
    console.log("data", data);
  };

  const handleFormSubmit = (data) => {
    console.log("data", typeof data.id, initialMiddleImage);
    if(editForm && newFormState === false){
      let dataUpdated = {...data, "numberOfClicks": Number(data.numberOfClicks), "id": Number(data.id)}
      console.log("dataUpdated", dataUpdated);
      let dataBaseUpdate = dataBase.map((item)=>{
        if(item.id === Number(data.id)){
          return dataUpdated
        }else{
          return item
        }
      })
      console.log("dataBaseUpdate", dataBaseUpdate)
      setDataBase(dataBaseUpdate)   
    }else{
      let newData = {...data, "numberOfClicks": Number(data.numberOfClicks), "id": Number(dataBase.length+1)}
      console.log("new data", newData);
      console.log("new data base",[...dataBase, newData]);
      setDataBase([...dataBase, newData])
      
    }
   
  }


  const displayLeftNavImage = (id) =>{
    console.log(id)
    setEditForm(false)
    let dataBaseUpdate = dataBase.map((item)=>{
      if(item.id === id){
        return {...item, "numberOfClicks": item.numberOfClicks+1}
      }else{
        return item
      }
    })
   
    let leftClickItem = dataBaseUpdate.filter((item)=>{      
      return item.id === id
    })
    console.log("leftClickItem", leftClickItem)
    setInitialMiddleImage(leftClickItem[0])
    setDataBase(dataBaseUpdate)   
  }

  const handleChange = () =>{
    console.log("handle change")
  }

  const updateEditForm = () =>{
    setEditForm(true)
    setNewFormState(false);
  }

 const editSave = (id) =>{
  console.log(id)
 }
 const newForm = () =>{
  setNewFormState(true); 
  setEditForm(true)
  let inputField = document.getElementsByTagName("input");
  console.log("inputField", inputField)
  for(let i=0; i< inputField.length; i++){
   inputField[i].value = ""
  }
   
}

  return (
    <div className="App">
      <h1 className="appname">Cat Click APP</h1><br />
      <div className="top_div">
        <Leftnav dataBase={dataBase} displayLeftNavImage ={displayLeftNavImage}/>
        <Middlenav dataBase={initialMiddleImage} displayLeftNavImage={displayLeftNavImage} leftNavClick={leftNavClick} />
        <Rightnav
        dataBase={initialMiddleImage}
        leftNavClick={leftNavClick}
        editForm={editForm}
        newFormState={newFormState}
        updateEditForm={updateEditForm}
        newForm={newForm}
        editSave={editSave}
        onSubmit={handleFormSubmit}
        handleChange={handleChange}/>
      </div>
      <Catgallery dataBase={dataBase} displayLeftNavImage ={displayLeftNavImage}/>
    </div>
  );
}

export default App;
