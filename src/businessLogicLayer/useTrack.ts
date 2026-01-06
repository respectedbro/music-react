import {useEffect, useState} from 'react';
import type {TrackDetailsResource} from '../dataAccessLayer/types.ts';
import {getTrack} from '../dataAccessLayer/api.ts';

export const useTrack = (selectedTrackId: string | null) => {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {
        if (!selectedTrackId) return;

        getTrack(selectedTrackId)
            .then(json => {
                setSelectedTrack(json.data);
            });
    }, [selectedTrackId]);

    return {selectedTrack};
};