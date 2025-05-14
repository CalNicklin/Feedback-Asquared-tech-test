import { Link } from 'react-router-dom';
import './Home.css'

function Home({drinks}) {


    return (
        <div className='home'>
            {
                            drinks.map((drink) => {
                            return (
                                <div  className='tile' key={drink[0].id}>
                                    <Link className='link' to={{ pathname: "/drinkDetails/" + drink[0].id, state: {drinks}}} >
                                    <li className='item'>
                                        <h3 className='caption'>{drink[0].name}</h3>
                                        <img className='thumbNail' src={drink[0].image} />
                                        <h3 className='caption'>Click for details</h3>
                                    </li>
                                    </Link>
                                </div>
                        )
                    })          
            } 
            
            
       </div> 
    )
};



export default Home