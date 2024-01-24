import { Fragment, useEffect, useState } from "react";
import Navbar from "./navbar";
import TextArea from "./text-area";

function App() {
  const [darkMode, changeDarkMode] = useState(false);
  const [alertMessage, showAlertMessage] = useState('');
  console.log(alertMessage);
  useEffect(()=>{
    setTimeout(()=>{
      showAlertMessage('');
    }, 5000)
  },[alert])
  document.title = 'Text Utils'
    return (
    <Fragment>
     <div style={{height: '100vh'}} className={`main bg-${darkMode ? 'dark': 'light'}`}>
      {alertMessage.length > 0 && (
       <div class="alert alert-warning alert-dismissible fade show" role="alert">
       <strong>Congratulations!</strong> {alertMessage}
       <button onClick={()=>{
        showAlertMessage('');
       }} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
      )}
     <Navbar changeDarkMode={()=>{
        changeDarkMode(!darkMode);
      }}
      mode={darkMode}
      />
      <TextArea showAlertMessage={(value)=>{
        showAlertMessage(value);
      }}  mode={darkMode}/>
     </div>
    </Fragment>
  );
}

export default App;
