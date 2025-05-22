import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cocktailDB } from "../API/api";
import Loading from '../components/Loading';
import './DrinkDetails.css'
import { v4 as uuidv4 } from 'uuid';

function DrinkDetails() {
    const [drink, setDrink] = useState([]);
    const params = useParams();
    const [loading, setLoading] = useState('true');

    useEffect(() => {
        detail()
    }, []);

    function detail() {
        cocktailDB.getDrinkById(params.id).then((data) => {
            setDrink(data);
            return data;
        }).then(() => setLoading(false));
    };


    if (loading === 'true') {
        return (
            <>
                <Loading />
            </>
        )
    } else {

        return (
            <div className="detailPage">
                {
                    drink.map((d) => {
                        return (
                            <div className='detailCard' key={d.id + 1}>
                                <img className='detailThumb' src={d.image} />
                                <h2 className="title">{d.name}</h2>
                                <div className="ingreds">
                                    <h3>Ingredients</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                {d.ingredients.map((i) => {
                                                    return (
                                                        <td key={uuidv4()}>{i}</td>
                                                    )
                                                })}
                                            </tr>
                                            <tr>
                                                {d.measures.map((i) => {
                                                    return (
                                                        <td key={uuidv4()}>{i}</td>
                                                    )
                                                })}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="method">
                                    <h3 >Method</h3>
                                    <p>{d.recipe}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    };
}

export default DrinkDetails;