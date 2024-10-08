import { useEffect, useState } from 'react';
import { IHeroes } from './../../../types/Heroes';
import { useNavigate, useParams } from 'react-router-dom';
import { heroesData } from '../../../data/heroes';
import styles from "./HeroPage.module.css"
import { Button } from 'react-bootstrap';

export const HeroPage = () => {
    const [hero, setHero]= useState<IHeroes | null>(null);
    const {id}=useParams()
    const getHeroById= ()=>{
        const result= heroesData.find((h)=> h.id===id)
        result ? setHero(result) : setHero(null)
    }
    const navigate= useNavigate()
    const handleNavigate=()=>{
        navigate(-1);
    }
    useEffect(()=>{
        getHeroById();
    }, [])
    return (
    <>
    {hero && <div className={styles.containeHeroPage}>
        <div className={styles.containerImgHeroPage}>
            <img src={`/assets/heroes/${id}.jpg`}/>
        </div>
        <div>
            <h3>{hero.superhero}</h3>
            <ul>
                <li><b>Alter Ego: </b> {hero.alter_ego}</li>
                <li><b>Publicadora: </b> {hero.publisher}</li>
                <li><b>Primera aparicion: </b> {hero.first_appearance}</li>
            </ul>
            <Button variant='primary' onClick={handleNavigate}>Regresar</Button>
        </div>
    </div>}
    </>
    )
}
