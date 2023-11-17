// import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <nav className='horizontal'>
        <div>
          <a href='#'>RAWG</a>
        </div>
        {/* POTENTIALLY ADD RATE TOP GAMES HERE */}
        <form>
          {/* GLASS ICON */}
          <input type='text' placeholder='Search 850,000+ games' />
        </form>
        <p>LOG IN</p>
        <p>SIGN UP</p>
        {/* THREE DOTS NAV */}
      </nav>
      <nav className='vertical'>
        <a href='#'>Home</a>
        <a href='#'>Reviews</a>
        <div className='vertical-nav'>
          <p>New Releases</p>
          <div>
            <div>

              <p>Last 30 days</p>
            </div>
            <div>

              <p>This week</p>
            </div>
            <div>

              <p>Next week</p>
            </div>
            <div>

              <p>Release calendar</p>
            </div>
          </div>
        </div>
        <div className='vertical-nav'>
          <p>Top</p>
          <div>
            <div>

              <p>Best of the year</p>
            </div>
            <div>

              <p>Popular in 2022</p>
            </div>
            <div>

              <p>All time top 250</p>
            </div>
          </div>
        </div>
        <a href='#'>All Games</a>
        <div className='vertical-nav'>
          <a href='#'>Browse</a>
          <div>
            <div></div>
            <div></div>
            <div></div>
            {/* HIDE/SHOW BUTTON */}
          </div>
        </div>
        <div className='vertical-nav'>
          <a href='#'>Platforms</a>
          <div>
            <div>PC</div>
            <div>PlayStation 4</div>
            <div>Xbox One</div>
            <div>Nintendo Switch</div>
            <div>iOS</div>
            <div>Android</div>
            {/* HIDE/SHOW BUTTON */}
          </div>
        </div>
        <div className='vertical-nav'>
          <a href='#'>Genres</a>
          <div>
            <div>Action</div>
            <div>Strategy</div>
            <div>RPG</div>
            <div>Shooter</div>
            <div>Adventure</div>
            <div>Puzzle</div>
            <div>Racing</div>
            <div>Sports</div>
            {/* HIDE/SHOW BUTTON */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
