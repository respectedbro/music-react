const apiKey = '66f5e2dc-af1c-4f3e-9a2c-4c6e754f0d20';
const headers = {
    'api-key': apiKey
}

export const getTrack = async (trackId: string) => {
    const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: headers
    });
    return await res.json();
};

export const getTracks = async () => {
    const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=8', {
        headers: headers
    });
    return await res.json();
};