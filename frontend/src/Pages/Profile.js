import { useSelector, useDispatch } from "react-redux"
import { useState, useRef } from "react"
import Account from "../Components/Account"
import { useUser, PUT } from "../Components/useUser"
import { EDIT_MODE } from "../redux/actions/edit.action";

const Profile = () => {
  const dispatch = useDispatch()
  const { fetchData } = useUser()
  const firstName = useSelector(state => state.postReducer.firstName);
  const lastName = useSelector(state => state.postReducer.lastName);
  const userName = useSelector(state => state.postReducer.userName);
  const editModeUser = useSelector(state => state.editReducer.editMode);
  const form = useRef()
  const [ inputValue, setinputValue ] = useState(userName || '')

  const handleEdit = () => {
    dispatch({type: EDIT_MODE, 
      payload: true})
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setinputValue(userName)
  }

  const handleSave = (e) => {
    e.preventDefault()
    fetchData( PUT, { userName: inputValue } )
    dispatch({type: EDIT_MODE, 
      payload: false})
  }
  
  return ( 
    <main className={!editModeUser ? "main bg-dark profile" : "main bg-light profile"}>
      { !editModeUser ? ( 
        <>       
          <div className="header">
            <h2>Welcome back<br />{firstName} {lastName} !</h2>
            < button className="edit-button" onClick={ handleEdit }>Edit Name</button>
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
                        value={inputValue} 
                        onChange={(e) => setinputValue(e.target.value)}/>
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
                <button className="edit-button" onClick={ handleSave }> Save </button>
                <button className="edit-button" onClick={ handleCancel }> Cancel </button>
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