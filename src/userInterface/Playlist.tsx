import {useTracks} from '../businessLogicLayer/useTracks.ts';
import {TrackItem} from './TrackItem.tsx';

import './Playlist.css'

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (trackId: string) => void
}

export const Playlist = (props: Props) => {
    console.log('🎨  Playlist');

    const {tracks} = useTracks();

    return <div >
        <ul className={'tracks'}>
            {tracks?.map((track) => {
                return <TrackItem
                    key={track.id}
                    track={track}
                    isSelected={track.id === props.selectedTrackId}
                    onTrackSelect={props.onTrackSelect}/>;
            })}
        </ul>
    </div>;
};