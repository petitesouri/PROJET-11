import "../Styles/main.css"
import Feature from "../Components/Feature"
import IconChat from "../assets/icon-chat.webp"
import IconMoney from "../assets/icon-money.webp"
import IconSecurity from "../assets/icon-security.webp"

const Home = () => {    
    return (        
        <main >
            <div className="hero">
                <h2 className="sr-only">Promoted Content</h2>
                <section className="hero-content">
                    <h3 className="subtitle"> 
                        No fees.<br/>
                        No minimum deposit.<br/>
                        High interest rates.
                    </h3>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>            
            <section className="features">
                <h2 className="sr-only">Features</h2>                
                <Feature    icon={IconChat} 
                            title="You are our #1 priority" 
                            description="Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes."
                />
                <Feature    icon={IconMoney} 
                            title="More savings means higher rates" 
                            description="The more you save with us, the higher your interest rate will be!"
                />
                <Feature    icon={IconSecurity} 
                            title="Security you can trust" 
                            description="We use top of the line encryption to make sure your data and money
                            is always safe."
                />
            </section>
        </main>
        
    )
}

export default Home;