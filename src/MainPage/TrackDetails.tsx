import {useEffect, useState} from "react";
import type {TrackDetailsResource} from "../types.ts";

type Props = {
    selectedTrackId: string | null
}

export const TrackDetails = (props: Props) => {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (!props.selectedTrackId) return

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + props.selectedTrackId, {
            headers: {
                'api-key': '66f5e2dc-af1c-4f3e-9a2c-4c6e754f0d20'
            }
        })
            .then(res => res.json())
            .then(json => {
                setSelectedTrack(json.data)
            })
    }, [props.selectedTrackId]);


    return <div>
        <h2>Track Details</h2>
        {!props.selectedTrackId && <span>No selected track</span>}
        {props.selectedTrackId && !selectedTrack && <span>Loading...</span>}
        {selectedTrack && <div>
            <h4>{selectedTrack.attributes.title}</h4>
            {selectedTrack.attributes.lyrics === '' && <div>No lyrics</div>}
            <p>
                {selectedTrack.attributes.lyrics}
            </p>
        </div>}
        {props.selectedTrackId && selectedTrack && selectedTrack.id !== props.selectedTrackId && <span>Loading...</span>}
    </div>
}