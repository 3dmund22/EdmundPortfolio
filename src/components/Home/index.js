import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Loader from 'react-loaders'
// import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['E', 'd', 'm', 'u', 'n', 'd']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br/> I'm Edmund.
                {/* <img src={LogoTitle} alt="developer"/>
                Edmund */}
                <br/>
                 Web Developer
                </h1>
                {/* <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1> */}
                <h2>Frontend Developer <br /> React | Angular</h2>

                <Link to='/contact' className='flat-button'>Reach Out</Link>
            </div>
        </div>
    )
}

export default Home