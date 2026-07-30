import "./MainContent.css";

function MainContent() {
  return (
    <main className="main-content">

      <section className="category-nav">
        <button>All</button>
        <button>Music</button>
        <button>Podcasts</button>
        <button>Audiobooks</button>
      </section>

      <section className="recently-played">
        <h2>Recently Played</h2>

        <div className="card-row">
          <div className="card">daylist</div>
          <div className="card">Brick + Mortar</div>
          <div className="card">Liked Songs</div>
          <div className="card">Submarine</div>
          <div className="card">Powders</div>
          <div className="card">Trinity</div>
        </div>
      </section>

      <section className="picked-for-you">
        <h2>Picked For You</h2>

        <div className="card-row">
          <div className="card">Tyla</div>
          <div className="card">The Marías</div>
          <div className="card">Beach House</div>
          <div className="card">Aziya</div>
        </div>
      </section>

      <section className="made-for-you">
        <h2>Made For You</h2>

        <div className="card-row">
          <div className="card">Daily Mix 1</div>
          <div className="card">Daily Mix 2</div>
          <div className="card">AI DJ</div>
          <div className="card">Release Radar</div>
        </div>
      </section>

      <section className="recents">
        <h2>Recents</h2>

        <div className="card-row">
          <div className="card">Playlist 1</div>
          <div className="card">Playlist 2</div>
          <div className="card">Playlist 3</div>
          <div className="card">Playlist 4</div>
        </div>
      </section>

    </main>
  );
}

export default MainContent;