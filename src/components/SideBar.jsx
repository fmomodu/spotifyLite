function SideBar() {
    return (
        <aside className="sidebar">
            <div className="library-header">
                <h2> Your Library </h2>
                <button> Create </button>
            </div>

            <nav className="library-filters">
                <button>Playlists</button>

                <button>Podcasts</button>

                <button>Audiobooks</button>

                <button>Albums</button>

                <button>Artists</button>

                <button>Events</button>
            </nav>

            <div className="library-search-sort">
                <input type="text" placeholder="Search your library" />
                <button>Recents</button>
                </div>

            <div className="playlist-list">
                <p>Liked Songs</p>
                <p>Playlist1</p>
                <p>Playlist2</p>
                <p>Playlist3</p>
            </div>
        </aside>
    );
}
export default SideBar;
