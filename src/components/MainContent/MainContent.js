import './MainContent.css'
import TryButton from '../Buttons/Button';

function MainContent(){
    
    return(
        <>
            {/* Pahse 1*/}
            <section className='mainContent-01'>
                <p><strong>Starting December 1: </strong>
                Anytime Fitness members can get access to Apple Fitness+ for free.*
                <a href="index.html">Learn more</a>
                </p>
                
            </section>

            {/* Pahse 2*/}
            <div className="mainContent-02">
                <div className="mc-02-img">
                    <img src="Photos\anastase-maragos-9dzWZQWZMdE-unsplash.jpg" alt="gym here" className="mc-02-image"></img>
                </div>
                <div className="mc-02-content">
                    <div className="mc-02-content-div">
                   
                            
                            <div className="element-container">
                                <h1>
                                    More for your<br></br>
                                    membership<br></br>
                                    <span>than machines.</span>
                                </h1>
                            </div>
                            <div className="element-button-div1">
                                <TryButton />
                            </div>
                    </div>
                    
                </div>
            </div>
           
        </>
    )
}



export default  MainContent;