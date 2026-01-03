import './App.css';
import {useEffect, useState} from 'react';

interface Track {
    id: number;
    title: string;
    url: string;
}

function App() {

    const [tracks, setTracks] = useState <Track[] | null>(null)

    useEffect(() => {
      fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks')
          .then(res => res.json())
          .then(json => {
              setTracks(json.data)
          })
    }, []);

    return (
        <>
            <h1>Music Player</h1>
            {tracks === null && <span>Loading...</span>}
            {tracks?.length === 0 && <span>No Tracks </span>}
            <ul>
                {tracks?.map((track) => (
                    <li key={track.id}>
                        <div>{track.title}</div>
                        <audio controls src={track.url}></audio>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
