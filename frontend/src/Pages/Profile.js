import { useSelector } from "react-redux"
import Account from "../Components/Account"
import Button from "../Components/Edit-button"

const Profile = () => {
    const firstName = useSelector(state => state.postReducer.firstName)
    const lastName = useSelector(state => state.postReducer.lastName)

    const handleEditName = () => {
      console.log("Edit Name")
    }
   
    return (
        <main className="main bg-dark profile">

        <div className="header">
          <h2>Welcome back<br />{firstName} {lastName} !</h2>
          < Button onClick={ handleEditName}
            text="Edit Name"/>
        </div>
          
        {/* last */}
        <h3 className="sr-only">Accounts</h3>
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