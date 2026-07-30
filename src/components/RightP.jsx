import "./RightP.css"
function RightP() {
  return (
    <div className="right-panel">

      <section className="top-of-p">
        <button>Liked Songs</button>
        <button>More Info</button>
        <button>Expand</button>
      </section>

      <section className="now-playing">

        <img src="" alt="Album Cover" />

        <h3>Song Name</h3>
        <p>Artist Name(s)</p>

      </section>

      <section className="about-artist">

        <h3>About the Artist</h3>

        <img src="" alt="Artist" />

        <h4>Artist Name</h4>

        <p>260,300 Monthly Listeners</p>

        <button>Follow</button>

        <p>
          Artist biography or description goes here. This section can contain a
          short summary about the artist.
        </p>

      </section>

      <section className="credit-info">

        <div>
          <h3>Credits</h3>
          <button>Show All</button>
        </div>

        <p>Main Artist</p>
        <p>Featured Artist</p>
        <p>Producer</p>
        <p>Songwriter</p>

      </section>

      <section className="next-in-queue">

        <div>
          <h3>Next in Queue</h3>
          <button>Open Queue</button>
        </div>

        <div className="queue-song">
          <img src="" alt="Album Cover" />

          <div>
            <h4>Song Name</h4>
            <p>Artist Name</p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default RightP;