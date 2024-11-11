import { Routes, Route, Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav class="left-menu">
            <div class="left-menu__visibility-toggle">&#60;</div>

            <div class="left-menu__content">
                <div class="left-menu__header">
                    <img
                        class="left-menu__seal"
                        src="/img/mi6-seal.png"
                        alt="MI6 seal"
                    />
                </div>

                <div class="left-menu__links">
                    <Link to="/">Home</Link>
                    <Link to="/api/people">People of interest</Link>
                </div>
            </div>
        </nav>
    );
}
