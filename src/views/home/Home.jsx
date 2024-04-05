import Cake from '../../assets/img/cake.jpg';

const Home = () => {

    return (
        <div className="container d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
           <div className='d-flex flex-column justify-content-center align-items-center '>
           <h1>Bievenidos a <strong>Happy Cake</strong></h1>
            <span>El lugar de los pasteles felices</span>
            <img src={Cake} alt="cake" width={200} height={200} />
           </div>
        </div>
    )
}

export default Home