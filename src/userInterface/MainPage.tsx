import {PageTitle} from './PageTitle';
import {Playlist} from './Playlist';
import {TrackDetails} from './TrackDetails';
import {useTrackSelection} from '../businessLogicLayer/useTrackSelection.ts';

export const MainPage = () => {
    console.log('🚀 userInterface');

    const {selectedTrackId, handleTrackSelect} = useTrackSelection();

    return <div>
        <PageTitle value={'Hello World'}/>
        <Playlist selectedTrackId={selectedTrackId} onTrackSelect={handleTrackSelect}/>
        <hr/>
        <TrackDetails selectedTrackId={selectedTrackId}/>
    </div>;
};






