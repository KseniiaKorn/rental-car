import { useNavigate } from "react-router-dom";
import s from './HeroSection.module.css'

const HeroSection = () => {
    const navigate = useNavigate();

    const goToCatalog = () => {
        navigate("/catalog");
    };
    
    return (
        <div className={s.hero}>
            <div className={s.wrap}>
            <h1 className={s.tittle}>Find your perfect rental car</h1>
            <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
            <button type="button" onClick={goToCatalog} className={s.btn}>View Catalog</button>
            </div>
        </div>
    )
};

export default HeroSection;