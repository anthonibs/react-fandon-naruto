import { Fragment } from 'react'
import './banner.scss'

function Banner() {
    return (
        <header className='banner'>
            <div className='banner__container'>
                <h1 className='banner__title'>Narutopidia</h1>
                <h2 className='banner__subtitle'>Personagens favoritos</h2>
            </div>
        </header>
    )
}

export default Banner