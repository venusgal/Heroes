import { useEffect, useState } from "react";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";


export const MarvelHeroes = () => {
  const [heros, setHeros]=useState<IHeroes[]>([]);
  const handleGetHeroesMarvel= ()=>{
    const result=heroesData.filter((hero)=>hero.publisher ==="DC Comics");
    setHeros(result);
  };
  useEffect(()=>{
    handleGetHeroesMarvel();
  }, []);
  return (
    <ListHeroes heroes={heros} title="Heroes Marvel"/>
  )
}
