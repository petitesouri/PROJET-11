import { useSelector } from "react-redux"

const Profile = () => {
  const firstName = useSelector(state => state.postReducer.firstName)
  const lastName = useSelector(state => state.postReducer.lastName)
   
// Modifier le H1 ( font size 2em, etc consultable dans la console)
    return (
        <main className="main bg-dark">

        <div className="header">
          <h1>Welcome back<br />{firstName} {lastName} !</h1>
          {/* En faire un composant "Bouton"
          <button className="edit-button">Edit Name</button>
          */}
        </div>
          
        {/* last */}
        <h2 className="sr-only">Accounts</h2>
        {/* Faire un composant Account */}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        
        {/*
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        */}
      </main>
    )
}

export default Profile;