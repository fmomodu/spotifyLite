import "./TopNav.css";

import {
    FaHome,
    FaFolderOpen,
    FaSearch,
    FaBell,
    FaUserFriends,
    FaUserCircle
} from "react-icons/fa";

function TopNav({ search, setSearch }) {
    return (
        <header className="top-nav">

            <button className="home-button">
                <FaHome />
            </button>

            <div className="full-search">

                <FaSearch className="search-icon" />
                <input
                type="text"
                placeholder="What do you want to play?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

                <button className="browse-button">
                    <FaFolderOpen />
                </button>
            </div>

            <div className="topnav-actions">

                <button>
                    <FaBell />
                </button>

                <button>
                    <FaUserFriends />

                </button>

                <button>
                    <FaUserCircle />
                    
                </button>
            </div>

        </header>
    );
}

export default TopNav;