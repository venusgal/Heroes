import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/Heroes"
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const DcHeroes = () => {
  const [heros, setHeros]=useState<IHeroes[]>([]);
  const handleGetHeroesDc= ()=>{
    const result=heroesData.filter((hero)=>hero.publisher ==="DC Comics");
    setHeros(result);
  };
  useEffect(()=>{
    handleGetHeroesDc();
  }, []);
  return (
    <ListHeroes heroes={heros} title="Heroes DC Comics"/>
  )
}
