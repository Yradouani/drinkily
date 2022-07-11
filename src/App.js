import './App.css';
import CocktailCard from './Components/CocktailCard/CocktailCard';
import CocktailList from './models/CocktailList';

function App() {
  return (
    <div className="App">
      <div className='cocktail_card_container'>
        {CocktailList.map((cocktail) => (
          <CocktailCard
            name={cocktail.name}
            ingredients={cocktail.ingredients}
            image={cocktail.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
