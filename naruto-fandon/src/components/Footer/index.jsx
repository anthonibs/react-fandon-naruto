import './index.scss'

const Footer = (e) => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <div className='footer__midia'>
                        <img src="/images/fb.png" alt="Facebook" />
                        <img src="/images/ig.png" alt="Instagram" />
                        <img src="/images/tw.png" alt="Twitter" />
                    </div>
                </li>
                <li className='footer__logo'>
                    <a href="#" target={'_blank'}>
                        <img className='footer__logo' src={'/images/logo.png'} alt="Logo Naruto Fandom" />
                    </a>
                </li>
                <li>Desenvolvido por Anthoni Broering dos Santos.</li>
            </ul>
        </footer>
    )
}


export default Footer

