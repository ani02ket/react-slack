import React from 'react';
import './SidebarOption.css';
import {useHistory} from 'react-router-dom';
import db from './firebase';

function SidebarOption({Icon,title,id,addChannelOption}) {

const history = useHistory();
	
const selectChannel = () =>{
	if(id){
		history.push(`/room/${id}`);
	}else{
		history.push(title);
	}
   }

const addChannel = () =>{
	const channalName =prompt("Please enter your channel name...");
	
	if(channalName){
		db.collection("rooms").add({
			name:channalName,
		});
	}
}
	
  return (
    <div className="sidebarOption" onClick={addChannelOption?addChannel:selectChannel}>
	{Icon && <Icon className="sidebarOption_icon"/>}
    {Icon ? <h3>{title}</h3> : <h3 className="sidebarOption_channel"><span className="sidebarOption_hash">#{title}</span></h3>}
    </div>
  );
}

export default SidebarOption;