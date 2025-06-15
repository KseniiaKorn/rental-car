import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../CarCard/CarCard';
import { selectCars } from '../../redux/selectors';
import { getCars } from '../../redux/operations';
import s from './CarsList.module.css'

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  
    useEffect(() => {
    dispatch(getCars({ page: 1 }));
  }, [dispatch]);

  return (
    <>
    <ul className={s.list}>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
      </ul>
      </>
  );
};

export default CarsList;