import PropTypes from 'prop-types'
import BannerImage from '../../assets/banner-main.png'
import BackgroundImage from '../../assets/bg-shadow.png'

const Banner = ({coinHandler}) => {
    return (
        <div>
            <div
                className="hero  w-full md:w-10/12 mx-auto rounded-2xl"
                style={{
                    background: 'black',
                }}>
                <div className="hero-overlay bg-opacity-60"><img className='object-cover w-full bg-no-repeat' src={BackgroundImage} alt="" /></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <div className='flex flex-col justify-center items-center'>
                            <img src={BannerImage} alt="" />
                        </div>
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary" onClick={() => coinHandler(600000)}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Banner.propTypes = {}

export default Banner