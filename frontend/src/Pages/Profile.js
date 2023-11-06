import { useSelector, useDispatch } from "react-redux"
import { useState, useRef } from "react"
import { EDIT_MODE, EDIT_USER } from "../redux/actions/post.action";

import Account from "../Components/Account"

const Profile = () => {
  const firstName = useSelector(state => state.postReducer.firstName);
  const lastName = useSelector(state => state.postReducer.lastName);
  const userName = useSelector(state => state.postReducer.userName);
  const editModeUser = useSelector(state => state.postReducer.editMode);

  const form = useRef()
  const [ value, setValue ] = useState("")
  const dispatch = useDispatch()
  const token = useSelector(state => state.postReducer.token.token)

  const newValue = {
    userName: value,
  }

  function sendData() {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newValue),
    })
  }
  
  const handleEditName = () => {
    dispatch({type: EDIT_MODE, 
      payload: true})
  }

  const handleChangeEditName = (e) => {
    e.preventDefault()
    setValue(form.current[0].value) 
    dispatch({type: EDIT_USER, 
      userName: form.current[0].value})    
  }

  const handleCancelEditName = (e) => {
    e.preventDefault()
    setValue("")
    dispatch({type: EDIT_MODE, 
      payload: false}) 
  }
  
  return ( 
    <main className={!editModeUser ? "main bg-dark profile" : "main bg-light profile"} >
      { !editModeUser ? ( 
        <>       
          <div className="header">
            <h2>Welcome back<br />{firstName} {lastName} !</h2>
            < button className="edit-button" onClick={ handleEditName }>Edit Name</button>
          </div>
          <h3 className="sr-only">Accounts</h3>
        </>
      ) : (        
          <div className="header header-edit">
            <h2>Edit user info</h2>
            <form ref={form}>
              <div className="header-edit__textarea">
                <label htmlFor="user-name">User name:</label>
                <input  id="userName" 
                        type="text" 
                        placeholder={userName} 
                        value={value} 
                        onChange={ e => handleChangeEditName(e)}/>
              </div>
              <div className="header-edit__textarea">
                <label htmlFor="first-name">First name:</label>
                <input id="firstName" type="text" placeholder={firstName}  disabled={true}/>
              </div>
              <div className="header-edit__textarea">
                <label htmlFor="last-name">Last name:</label>
                <input id="lastName" type="text" placeholder={lastName}  disabled={true}/>
              </div>
              <div className="header-edit__buttons">
                <button className="edit-button" onClick={sendData}> Save </button>
                <button className="edit-button" onClick={ e => handleCancelEditName (e)}> Cancel </button>
              </div>
            </form>
          </div>       
        ) 
      }
      <Account 
        title="Argent Bank Checking (x8349)"
        amount= "2,082.79"
        description="Available balance"
      />
      <Account 
        title="Argent Bank Savings (x6712)"
        amount= "10,928.42"
        description="Available balance"
      />
      <Account 
        title="Argent Bank Credit Card (x8349)"
        amount= "184.30"
        description="Current Balance" 
      /> 
    </main>
  )
}

export default Profile;