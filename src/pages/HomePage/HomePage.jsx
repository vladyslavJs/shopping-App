import css from './HomePage.module.css';
import SneakersList from '../../components/SneakersList/SneakersList';

export default function HomePage() {
    
    return (
        <div className={css.wrapper}>
            <p className={css.main}>Unisex Outfits.</p>
            <p className={css.main}>Trendy Styles.</p>
            <p className={css.add}>Soft, Cosy Fabrication And Modern Styling.</p>
            <SneakersList />
        </div>
    
    );
}