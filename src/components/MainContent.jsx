import "./MainContent.css";

function MainContent({ search }) {

  const recentlyPlayed = [
    "daylist",
    "Brick + Mortar",
    "Liked Songs",
    "Submarine",
    "Powders",
    "Trinity",
  ];

  const pickedForYou = [
    "Tyla",
    "The Marías",
    "Beach House",
    "Aziya",
  ];

  const madeForYou = [
    "Daily Mix 1",
    "Daily Mix 2",
    "AI DJ",
    "Release Radar",
  ];

  const recents = [
    "Playlist 1",
    "Playlist 2",
    "Playlist 3",
    "Playlist 4",
  ];

  const filterItems = (items) =>
    items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

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
          {filterItems(recentlyPlayed).map((item) => (
            <div className="card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="picked-for-you">
        <h2>Picked For You</h2>

        <div className="card-row">
          {filterItems(pickedForYou).map((item) => (
            <div className="card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="made-for-you">
        <h2>Made For You</h2>

        <div className="card-row">
          {filterItems(madeForYou).map((item) => (
            <div className="card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="recents">
        <h2>Recents</h2>

        <div className="card-row">
          {filterItems(recents).map((item) => (
            <div className="card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default MainContent;