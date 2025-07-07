import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../redux/selectors';
import { resetItems, upDatePage } from '../../redux/slice';
import { getCars } from '../../redux/operations';
import { fetchBrands } from '../../redux/filters/operations';
import { setFilters } from '../../redux/filters/slice';
import CustomSelect from '../CustomSelect/CustomSelect';
import s from './Filter.module.css';
import { useFormikContext } from 'formik';


const prices = [30, 40, 50, 60, 70, 80, 90, 100];

const formatNumber = (num) => {
  if (!num) return '';
  return Number(num).toLocaleString('en-US');
};

const MileageInput = ({ name, placeholder }) => {
  const { values, setFieldValue } = useFormikContext();
  const rawValue = values[name];

  const handleChange = (e) => {
    const numericValue = e.target.value.replace(/[^\d]/g, '');
    setFieldValue(name, numericValue);
  };

  const formatted = rawValue ? formatNumber(rawValue) : '';

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={
        name === 'mileageFrom'
          ? (formatted ? `From ${formatted}` : '')
          : (formatted ? `To ${formatted}` : '')
      }
      onChange={handleChange}
      className={s.input}
    />
  );
};

const Filter = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands) || [];

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const initialValues = {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  };

  const handleResetForm = (resetForm, dispatch) => {
    resetForm();
    dispatch(setFilters({}));
    dispatch(resetItems());
    dispatch(upDatePage(1));
    dispatch(getCars({ brand: '', rentalPrice: '', minMileage: '', maxMileage: '', page: 1 }));
  };

  const handleSubmit = (values) => {
    const brand = values.brand?.value || '';
    const rentalPrice = values.price?.value || '';
    const minMileage = values.mileageFrom || '';
    const maxMileage = values.mileageTo || '';

    dispatch(setFilters({ brand, rentalPrice, minMileage, maxMileage }));
    dispatch(resetItems());
    dispatch(upDatePage(1));
    dispatch(getCars({ brand, rentalPrice, minMileage, maxMileage, page: 1 }));
  };

  const brandOptions = brands.map((b) => ({ value: b, label: b }));
  const priceOptions = prices.map((p) => ({ value: p, label: p }));

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, handleBlur, resetForm }) => (
        <Form className={s.form}>
          <div className={s.fieldGroup}>
            <label htmlFor="brand" className={s.label}>Car brand</label>
            <CustomSelect
              name="brand"
              options={brandOptions}
              value={values.brand}
              onChange={(option) => setFieldValue('brand', option)}
              onBlur={handleBlur}
              placeholder="Choose a brand"
            />
          </div>

          <div className={s.fieldGroup}>
            <label htmlFor="price" className={s.label}>Price / 1 hour</label>
            <CustomSelect
              name="price"
              options={priceOptions}
              value={values.price}
              onChange={(option) => setFieldValue('price', option)}
              onBlur={handleBlur}
              placeholder="Choose a price"
            />
          </div>

          <div className={s.fieldGroup}>
            <label htmlFor="mileageFrom" className={s.label}>Car mileage / km</label>
            <div className={s.mileageGroup}>
              <MileageInput name="mileageFrom" placeholder="From" />
              <MileageInput name="mileageTo" placeholder="To" />
            </div>
          </div>

          <button type="submit" className={s.btn}>Search</button>
          <button
            type="button"
            className={s.btnReset}
            onClick={() => handleResetForm(resetForm, dispatch)}
          >
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;

