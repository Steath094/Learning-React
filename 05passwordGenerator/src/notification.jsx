import { React } from "react";

const Notification = ({message,show})=>{
    if(!show) return null;

    return (
    <div style={{
      position: 'fixed', 
      top: '0', 
      left: '0', 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      pointerEvents: 'none' // Ensures the notification doesn't block other interactions
    }}>
      <div className="bg-gray-700 rounded-3xl" style={{
        padding: '10px 20px', 
        color: 'white', 
        pointerEvents: 'all' // Allows interaction with the notification itself if needed
      }}>
        {message}
      </div>
    </div>
      );
}
export default Notification;