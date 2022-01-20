import { useState } from 'react'

import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlinePause, HiOutlinePlay } from  'react-icons/hi'

import './App.scss'

function App() {
  const [play, setPlay] = useState(false)

  return (
    <div className="App">

      <div className="music-player">
        <div className='inner'>
            <h3 className='title'>NeonMusic</h3>



            {/* Thumbnail */}
            <div className="thumbnail">
              <div className="disc"></div>
              <img className={`${play?'play':''}`} src='https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701__480.jpg' />
            </div>

            <div className="meta">
              <div className="song-title">
                      Yeni bir sayfa
              </div>
              <div className='artist'>
                  Ezgi Erdogan
              </div>
            </div>

            <div className="controls">
              <div className="left">
                <HiOutlineChevronLeft/>
              </div>

              <div className="fill">
                <button onClick={()=>setPlay(!play)}>
                 {
                   play ?<HiOutlinePause/>  :  <HiOutlinePlay/>
                 }
                </button>
              </div>
              <div className="right">
                  <HiOutlineChevronRight/>
              </div>

            </div>

            <div className="timer">
              <input type="range" min={0} max={100} />
              <div className='times'>
                <span>00.00</span>
                <span>04.06</span>
              </div>
            </div>


        </div>
      </div> 

    </div>
  )
}

export default App
