import { Link } from 'react-router-dom';
import './Home.css'

function Home({ drinks }) {


    return (
        <div className='home'>

            {
                drinks.map((drink) => {
                    return (
                        <div className='tile' key={drink[0].id}>
                            <Link className='link' to={{ pathname: "/drinkDetails/" + drink[0].id, state: { drinks } }} >
                                <li className='item'>
                                    <h2 className='caption'>{drink[0].name}</h2>
                                    <img className='thumbNail' src={drink[0].image} />
                                    <h3>Click for details</h3>
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