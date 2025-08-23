import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div >
                <h2>Community</h2>
                <p>Join Cultish and get early access to seasonal selase new collection, and events</p>
                <form>
                    <input name='address' placeholder='email@example.com' type='text'></input>
                    <button className="border border-solid border-black p-1 rounded-sm hover:border-transparent hover:text-white hover:bg-black">join</button>
                </form>
            </div>
            <Link to='/'>home</Link>
            <Link to='/about-brand'>about brand</Link>
            <Link to='/favorite'>favorite</Link>
            <Link to='/contacts'>contacts</Link>
            <div>
                <p>instagram</p>
                <p>youtobe</p>
                <p>tiktok</p>
            </div>
        </footer>
    )
}