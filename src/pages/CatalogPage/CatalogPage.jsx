import React from 'react'
import Filter from '../../components/Filter/Filter'
import CarsList from '../../components/CarsList/CarsList'
import LoadMore from '../../components/LoadMore/LoadMore'
import s from './CatalogPage.module.css'

const CatalogPage = () => {
  return (
    <div className='container'>
      <div>
        <Filter />
        <CarsList />
        <LoadMore/>
      </div>
    </div>
  )
}

export default CatalogPage;