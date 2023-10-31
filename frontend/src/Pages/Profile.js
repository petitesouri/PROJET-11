import { useSelector } from "react-redux"
import Account from "../Components/Account"

const Profile = () => {
    const firstName = useSelector(state => state.postReducer.firstName)
    const lastName = useSelector(state => state.postReducer.lastName)
   
// Modifier le H1 ( font size 2em, etc consultable dans la console)
    return (
        <main className="main bg-dark profile">

        <div className="header">
          <h2>Welcome back<br />{firstName} {lastName} !</h2>
          {/* En faire un composant "Bouton"
          <button className="edit-button">Edit Name</button>
          */}
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