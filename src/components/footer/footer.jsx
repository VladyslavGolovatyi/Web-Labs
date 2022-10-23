import './footer.css'
import Logo from '../logo/logo';
import SocialMedia from './socialMedia';


export default function Footer() {
    return (
        <div className='footerDiv'>
            <div className="topDiv">
                <span className='title'>Official IPhone partner</span>
                <Logo/>
                <SocialMedia/>
            </div>
            <hr />
            <p>2022 IoT © Copyright all rights reserved, Inc.</p>
        </div>    
    );
} 
