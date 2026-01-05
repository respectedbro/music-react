// import './App.css';
// import {type CSSProperties, useEffect, useState} from 'react';
//
// interface Attachment {
//     url: string
// }
//
// interface TrackAttributes {
//     title:string
//     attachments: Attachment[]
// }
//
// interface Track {
//     id: string;
//     attributes: TrackAttributes
// }
//
// interface TrackDetailsAttributes {
//     title:string
//     lyrics:string
//     attachments: Attachment[]
// }
//
// interface TrackDetailsResource {
//     id: string;
//     attributes: TrackDetailsAttributes
// }
//
//
//
// function App() {
//     const [tracks, setTracks] = useState <Track[] | null>(null)
//     const [selectedTrackId, setSelectedTrackId] = useState <string | null>(null)
//     const [selectedTrack, setSelectedTrack] = useState <TrackDetailsResource | null>(null)
//
//     useEffect(() => {
//       fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=8', {
//           headers: {
//               'api-key': 'bdd1f71d-00a0-4927-aaae-7212be84f1bf'
//           }
//       })
//           .then(res => res.json())
//           .then(json => {
//               setTracks(json.data)
//           })
//     }, []);
//
//     const handleSelectTrack = (trackId:string) => {
//         setSelectedTrackId(trackId)
//
//         fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
//             headers: {
//                 'api-key': 'bdd1f71d-00a0-4927-aaae-7212be84f1bf'
//             }
//         })
//             .then(res => res.json())
//             .then(json => {
//                 setSelectedTrack(json.data)
//             })
//     }
//
//     return (
//         <>
//             <h1>Music Player</h1>
//             {tracks === null && <span>Loading...</span>}
//             {tracks?.length === 0 && <span>No Tracks </span>}
//             <ul>
//                 {tracks?.map((track) => {
//                     const style: CSSProperties = {}
//                     if (track.id === selectedTrackId) {
//                         style.border = '1px solid orange'
//                     }
//                     const handleClick = () => {
//                         handleSelectTrack(track.id)
//                     }
//                     return <li key={track.id} style={style}>
//                         <div onClick={handleClick}>{track.attributes.title}</div>
//                         <audio controls src={track.attributes.attachments[0].url}></audio>
//                     </li>
//                 })}
//             </ul>
//             <hr/>
//             <h2>Track Details</h2>
//             {!selectedTrackId && <span>No selected track</span>}
//             {selectedTrackId && !selectedTrack && <span>Loading...</span>}
//             {selectedTrack && <div>
//                 <h4>{selectedTrack.attributes.title}</h4>
//                 {selectedTrack.attributes.lyrics === '' && <div>No lyrics</div>}
//                 <p>
//                     {selectedTrack.attributes.lyrics}
//                 </p>
//             </div>}
//             {selectedTrackId && selectedTrack && selectedTrack.id !== selectedTrackId && <span>Loading...</span>}
//         </>
//     );
// }
//
// export default App;
