import PropTypes from "prop-types";
import { useSelector } from "react-redux"
import Chevron from "../assets/chevron.webp"

const Account = ({ title, amount, description }) => {
  const editModeUser = useSelector(state => state.postReducer.editMode);

  return (
    <>         
      <section className={ !editModeUser ? "account" : "account edit"}>
        <div className={ !editModeUser ? "account-content-wrapper" : "account-content-wrapper edit"} >
        <h3 className={ !editModeUser ? "account-title" : "account-title edit"}>{title}</h3>
        <p className={ !editModeUser ? "account-amount" : "account-amount edit"}>${amount}</p>
        <p className={ !editModeUser ? "account-amount-description" : "account-amount-description edit"}>{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          { !editModeUser ? (
            <button className="transaction-button">View transactions</button>
          ) : (
            <img className="transaction-icon" src={ Chevron } alt="click right" />
          )}
        </div>
      </section>    
    </>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;