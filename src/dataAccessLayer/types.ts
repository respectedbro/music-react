export interface Attachment {
    url: string
}

export interface TrackAttributes {
    title:string
    attachments: Attachment[]
}

export interface Track {
    id: string;
    attributes: TrackAttributes
}

export interface TrackDetailsAttributes {
    title:string
    lyrics:string
    attachments: Attachment[]
}

export interface TrackDetailsResource {
    id: string;
    attributes: TrackDetailsAttributes
}

