import { Link } from "react-router-dom";

const Error = () => {
    return (
            <main className="error">
                <section className="error__section">
                    <h2>404</h2>
                    <div>                        
                        <p className="error__text">Oups! The page < br/>you are requesting does not exist.</p> 
                    </div>                                                             
                    <Link to="/">
                        Return to home page
                    </Link>
                </section>
            </main>           
    )
}

export default Error;