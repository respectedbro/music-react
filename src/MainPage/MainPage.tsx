import {PageTitle} from "./PageTitle";
import {Playlist} from "./Playlist";
import {TrackDetails} from "./TrackDetails";
import {useState} from "react";
import type {TrackDetailsResource} from "../types.ts";

export const MainPage = () => {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

    const handleTrackSelect = (trackId:string) => setSelectedTrackId(trackId)



    return <div>
        <PageTitle value={'Hello World'}/>
        <Playlist selectedTrackId={selectedTrackId} onTrackSelect={handleTrackSelect}/>
        <hr/>
        <TrackDetails selectedTrackId={selectedTrackId}/>
    </div>
}






