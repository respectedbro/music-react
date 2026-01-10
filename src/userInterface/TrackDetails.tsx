import {useTrack} from '../businessLogicLayer/useTrack.ts';

import styles from './TrackDetails.module.css'

type Props = {
    selectedTrackId: string | null
}

export const TrackDetails = (props: Props) => {
    console.log('‍↔️ TrackDetails');
const {selectedTrack} = useTrack(props.selectedTrackId)

    return <div className={styles.track}>
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
        {props.selectedTrackId && selectedTrack && selectedTrack.id !== props.selectedTrackId &&
            <span>Loading...</span>}
    </div>;
};