import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import './index.scss'

const Footer = (e) => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <div className='footer__midia'>
                        <a href="#" target={'_blank'}>
                            <BsFacebook className="footer__icon" />
                        </a>
                        <a href="#" target={'_blank'}>
                            <BsInstagram className="footer__icon" />
                        </a>
                        <a href="#" target={'_blank'}>
                            <BsTwitter className="footer__icon" />
                        </a>
                    </div>
                </li>
                <li className='footer__logo'>
                    <a href="#">
                        <img className='footer__logo' src={'/images/naruto-shippuden.svg'} alt="Logo Naruto Fandom" />
                    </a>
                </li>
                <li>Desenvolvido por <a target={'_blank'} href="https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/">Anthoni</a>.</li>
            </ul>
        </footer>
    )
}


export default Footer

