const apiKey = import.meta.env.VITE_API_KEY;

const headers: HeadersInit = {}

if (import.meta.env.DEV && !apiKey) {
    console.error('API key is missing! Check your .env file');
}

if (apiKey) {
    headers['api-key'] = apiKey
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