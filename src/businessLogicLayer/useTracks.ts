import {useEffect, useState} from 'react';
import type {Track} from '../dataAccessLayer/types.ts';
import {getTracks} from '../dataAccessLayer/api.ts';

export const useTracks = () => {
    const [tracks, setTracks] = useState<Track[] | null>(null);

    useEffect(() => {
        getTracks()
            .then(json => {
                setTracks(json.data);
            });
    }, []);

    return {tracks};
};