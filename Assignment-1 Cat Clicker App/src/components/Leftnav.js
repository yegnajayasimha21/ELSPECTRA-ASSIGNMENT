import React, {useState} from 'react'
import '../App.css';

function Leftnav(props){
    let dataBase = props.dataBase;
     let displayLeftNavImage = props.displayLeftNavImage;

    return(
        <div>
            {
                dataBase.map((item)=>{
                    return <div className="left_div" onClick={()=>displayLeftNavImage(item.id)}>
                        <span className="left_name">{item.name}</span>
                        <span className="left_click">{item.numberOfClicks}</span>
                    </div>
                })
            }
        </div>
    );
}

export default Leftnav