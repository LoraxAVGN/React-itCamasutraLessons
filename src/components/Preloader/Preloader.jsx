import preloader from '../../assets/images/preloader.gif';

const Preloader = () => {
    return(
        <div>
            <img src={preloader} 
                    alt='preloader'
                    width='200' />
        </div>
    )
}

export default Preloader;