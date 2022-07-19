import React from 'react'
import StarIcon from '../images/star.png'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={require('../images/' + props.img)} alt='Owner of ad' />
            <div className='card--rating'>
                <img src={StarIcon} alt='Star' />
                <p>{props.rating.toFixed(1)} <span className="gray">({props.reviewCount}) · {props.country}</span></p>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}