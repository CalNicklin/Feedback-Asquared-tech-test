import { Link } from 'react-router-dom';
import './SearchResults.css'

function SearchResults({searchResults}) {
   
    return (
        <div className='searchResults'>
            {
                            searchResults.map((drink) => {
                            return (
                                <div  className='tile' key={drink.id}>
                                    <Link className='link' to={{ pathname: "/drinkDetails/" + drink.id}} >
                                    <li className='item'>
                                        <h3 className='caption'>{drink.name}</h3>
                                        <img className='thumbNail' src={drink.image} />
                                        <h3 className='caption'>Click for details</h3>
                                    </li>
                                    </Link>
                                </div>
                        )
                    })          
            } 
            
            
       </div> 
    )
    
} 

export default SearchResults;