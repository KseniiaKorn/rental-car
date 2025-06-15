import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../../redux/slice';
import s from './CarCard.module.css'

const CarCard = ({car}) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.cars.favorites);
    const isFavorite = favorites.includes(car.id);
  
    const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car.id));
    }
  };

    const {
    id,
    img,
    description,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const [city, region] = address.split(',').map(item => item.trim());


  return (
    <li className={s.cardList}>
      <img src={img} alt={description} className={s.img } />
      <button onClick={handleFavorite} type="button" className={s.favoriteBtn}>
{isFavorite ? '' : ''}
      </button>
      <div className={s.cardHeader}>
        <h2 className={s.title}>{brand} <span className={s.model}>{model}</span>, {year}</h2>
        <p className={s.price}>${rentalPrice}</p>
      </div>
      <div className={s.cardBody}>
        <ul className={s.cardDetails}>
          <li className={s.cardDetailItem}>{city}</li>
          <li className={s.cardDetailItem}>{region}</li>
          <li className={s.cardDetailItem}>{rentalCompany}</li>
        </ul>
        <ul className={s.cardDetails}>
          <li className={s.cardDetailItem}>{type}</li>
          <li className={s.cardDetailItem}>{mileage.toLocaleString('en-US').replace(',', ' ')} km</li>
        </ul>
      </div>
      <Link to={`/catalog/${id}`} className={s.readMoreLink}>Read more</Link>
    </li>
  );
};

export default CarCard;