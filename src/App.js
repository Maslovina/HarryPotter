import { Header } from './Layout/Header/Header';
import { Input } from './Components/Input/Input';
import { Select } from './Components/Select/Select';
import { SearchWrapper } from './Layout/SearchWrapper/SearchWrapper';
import { Line } from './UI/Line/Line';
import { Card } from './Components/Card/Card';
import { Grid } from "./Layout/Grid/Grid";
import { Loader } from "./Components/Loader/Loader";
import { Main } from './Layout/Main/Main';
import { useEffect, useState } from 'react';


import './App.css';




function App() {
  const [data, setData] = useState([]); // data с сервера
  const [inputValue, setInputValue] = useState('')
  const [selectValue, SetSelectValue] = useState('')

  

/* Получаем данные с api */
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setData(data));
  },[])

  /* отрисовка карт */
  const filteredSchool = data.filter((item) => { //фильтрация массива по вэлью
    if (item.house.toLowerCase().includes(selectValue.toLowerCase())) {
      return data;
    }
  })

  const renderCard = filteredSchool
    .filter((item) => {
      if (
        item.name.toLowerCase().includes(inputValue.toLowerCase().trim()) ||
        item.actor.toLowerCase().includes(inputValue.toLowerCase().trim())
      ) {
        return item;
      }
    })
    .map((item) => (
      <Card
        key={item.id}
        item={item}
        img={item.image}
        actor={item.actor}
        name={item.name}
        house={item.house}
        gender={item.gender}
        alive={item.alive ? "yes" : "no"}
        wand={item.wand.core}
      />
    ));
  

  /* получение value с input и select */
  const getInputValue = (evt) => {
    setInputValue(evt.target.value)
  }
  const getSelectValue = (evt) => {
    SetSelectValue(evt.target.value)
  }

  
  
  
  return (
    <>
      <Header>
        <SearchWrapper>
          <Input handler={getInputValue} />
          <Select handler={getSelectValue} />
        </SearchWrapper>
      </Header>
      <Main>
        <Line />
        {data.length ? <Grid>{renderCard}</Grid> : <Loader />}
      </Main>
    </>
  );
}

export default App;





