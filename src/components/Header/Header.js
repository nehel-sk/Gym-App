import './Header.css'
import TryButton from '../Buttons/Button';

function Header(){
    return(
        <div className='nav-container'>
            <div className='leftBox'>
               <h3>Nsy.fit</h3>
            </div>
            <div className='midBox'>

                {/* <a class="nav-links" href="public\index.html">find a gym</a>
                <a class="nav-links" href="public\index.html">trainning</a>
                <a class="nav-links" href="public\index.html">blog</a>
                <a class="nav-links" href="public\index.html">why gym</a>
                <a class="nav-links" href="public\index.html">own a gym</a> */}

                <ul className='navContent-float'>
                    <li className="navContent-li">Find A gym</li>
                    <li className="navContent-li">Training</li>
                    <li className="navContent-li">Blog</li>
                    <li className="navContent-li">Why Gym</li>
                    <li className="navContent-li">Own A Gym</li>
                </ul>
                 
            </div>

            <div className="rightBox">
                <TryButton />
            </div>
        </div>
    )
}

export default Header;