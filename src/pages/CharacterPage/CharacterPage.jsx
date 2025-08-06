import s from './CharacterPage.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

export const CharacterPage = () => {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });

  const fetchData = (url) => {
    axios.get(url).then((response) => {
      setCharacters(response.data.results);
      setInfo(response.data.info);
    })
  }

  useEffect(() => {
    fetchData('https://rickandmortyapi.com/api/character');
  }, []);

  const previousPageHandler = () => {
    fetchData(info.prev);
  }

  const nextPageHandler = () => {
    fetchData(info.next);
  }

  return(
    <div className={'pageContainer'}>
      <h1 className={'pageTitle'}>CharacterPage</h1>
      {characters.length && (
        <>
          {
            <div className={s.characters}>
              {characters.map((character) => {
                return (
                  <div className={s.character} key={character.id}>
                    <div className={s.characterLink}>{character.name}</div>
                    <img src={character.image} alt={`${character.name} avatar`} />
                  </div>
                )
              })}
            </div>
          }
          <div className={s.buttonContainer}>
            <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
              Назад
            </button>
            <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
              Вперед
            </button>
          </div>

        </>


      )}

    </div>

  )
}