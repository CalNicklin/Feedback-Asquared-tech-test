import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Home from './components/Home.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { cocktailDB } from './API/api.jsx';
import DrinkDetails from './components/DrinkDetails.jsx';
import Header from './components/Header.jsx';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [drinks, setDrinks] = useState([]);
  
   async function search(term) {
     await cocktailDB.search(term).then((result) => setSearchResults(result));

  };

useEffect(() => {
        tenDrinksArray()
    }, []);

    useEffect(() => {
        getDrinkData()
    }, []); 

    async function tenDrinksArray() {
        let drinksArray = [];
        
        for (let i = 0; i < 10; i++) {
            drinksArray.push(await cocktailDB.randomDrink([i]))
          };
        return drinksArray
        };
        
   function getDrinkData() {
        
        tenDrinksArray().then((data) => {
                    setDrinks(data)
                    return data;    
            });
    };
    
    

  return (
    <>
      <Header />
      <SearchBar onSearch={search} className='searchbar'/>
      <Routes>
        <Route path='/' element={<Home drinks={drinks}/>}/>
        <Route path='/drinkDetails/:id' element={<DrinkDetails />}/>
        <Route path='/searchResults'element={<SearchResults searchResults={searchResults}/>} />
      </Routes>
    </>
  )
}

export default App
