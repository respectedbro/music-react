import {type CSSProperties, useEffect, useState} from "react";
import type {Track, TrackDetailsResource} from "../types.ts";

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (trackId:string) => void
}

export const Playlist = (props: Props) => {
    const [tracks, setTracks] = useState<Track[] | null>(null)
    const [_, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=8', {
            headers: {
                'api-key': '66f5e2dc-af1c-4f3e-9a2c-4c6e754f0d20'
            }
        })
            .then(res => res.json())
            .then(json => {
                setTracks(json.data)
            })
    }, []);

    const handleSelectTrack = (trackId: string) => {
        props.onTrackSelect(trackId)

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                'api-key': '66f5e2dc-af1c-4f3e-9a2c-4c6e754f0d20'
            }
        })
            .then(res => res.json())
            .then(json => {
                setSelectedTrack(json.data)
            })
    }

    return <div>
        <ul>
            {tracks?.map((track) => {
                const style: CSSProperties = {}
                if (track.id === props.selectedTrackId) {
                    style.border = '1px solid orange'
                }
                const handleClick = () => {
                    handleSelectTrack(track.id)
                }
                return <li key={track.id} style={style}>
                    <div onClick={handleClick}>{track.attributes.title}</div>
                    <audio controls src={track.attributes.attachments[0].url}></audio>
                </li>
            })}
        </ul>
    </div>
}