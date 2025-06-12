import Header from '../Header/Header';
import s from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={s.main}>{children}</main>
        </>
    );
};

export default Layout;