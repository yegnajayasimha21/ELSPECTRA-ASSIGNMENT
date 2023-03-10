import React, {useState} from 'react'
import '../App.css';

function Catgallery(props){
    console.log("dataBase", props.dataBase)
    let dataBase = props.dataBase
    let displayLeftNavImage = props.displayLeftNavImage
    const onLinkClick=(e)=> {
      e.preventDefault();
      
   }
    return(
        <div  className="gallery_container">
        <h1>Cats Image Gallery</h1>
        <div className="image_card">
          {dataBase.map(item =>{
           return <div key={item.id} className="image_item" onClick={()=>{displayLeftNavImage(item.id)}}>
             <h4>{item.name}</h4>
             <div>No of clicks {item.numberOfClicks}</div>
             <img src={require('../assets/images/'+`${item.image}`)} width="200" height="200"/>
             <div><a href='item.image' onClick={onLinkClick}>Card Link</a></div>             
            </div>
          })            
          }
        </div>
      </div>
    )
}
export default Catgallery;

