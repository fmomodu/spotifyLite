import { useState } from "react";
import "./MainContent.css";

function MainContent({ search }) {
  const [category, setCategory] = useState("All");

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
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Music" ? "active" : ""}
          onClick={() => setCategory("Music")}
        >
          Music
        </button>

        <button
          className={category === "Podcasts" ? "active" : ""}
          onClick={() => setCategory("Podcasts")}
        >
          Podcasts
        </button>

        <button
          className={category === "Audiobooks" ? "active" : ""}
          onClick={() => setCategory("Audiobooks")}
        >
          Audiobooks
        </button>
      </section>

      {(category === "All" || category === "Music") && (
        <>
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
        </>
      )}

      {category === "All" && (
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
      )}

      {category === "Podcasts" && (
        <section className="empty-category">
          <h2>Podcasts</h2>
          <p>Podcast content is planned for a future update.</p>
        </section>
      )}

      {category === "Audiobooks" && (
        <section className="empty-category">
          <h2>Audiobooks</h2>
          <p>Audiobook content is planned for a future update.</p>
        </section>
      )}
    </main>
  );
}

export default MainContent;