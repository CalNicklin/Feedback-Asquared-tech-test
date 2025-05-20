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
                                        <h2 className='caption'>{drink.name}</h2>
                                        <img className='thumbNail' src={drink.image} />
                                        <h3 >Click for details</h3>
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