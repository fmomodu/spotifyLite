function TopNav() {
    return (
        <header className="top-nav">
            <button>Home</button>

            <div className="full-search">
                <input type="text" placeholder="What do you want to play?" />
                <button>Browse</button>
            </div>

            <div className="topnav-actions">
                <button>Notifications</button>
                <button>Friends</button>
                <button>Profile</button>
            </div>
        </header>
        
    );
}

export default TopNav;