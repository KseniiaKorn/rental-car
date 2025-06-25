import React from 'react';
import s from './LoadMore.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectPage, selectTotalPages } from '../../redux/selectors';
import { getCars } from '../../redux/operations';
import { upDatePage } from '../../redux/slice';

const LoadMore = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    
    const handleLoadMore = () => {
        const nextPage = page + 1;
        dispatch(upDatePage(nextPage));
        dispatch(getCars({ ...filters, page: nextPage }));
    };

    
    return (
        <div>
            {page < totalPages && (
                <button className={s.btn} onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
};

export default LoadMore;