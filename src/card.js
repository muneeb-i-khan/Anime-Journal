import React from "react";
// import Light from './Light.jpg'






export default function Card(props){
    return(
        <div className="card-cont">
            <section className="card">
            <h3>{props.item.title}</h3>
            <p><span>{props.item.ratings}</span></p>
            <img src={"/images/"+ props.item.coverImg}></img>
            </section>
            
        </div>
    )
}