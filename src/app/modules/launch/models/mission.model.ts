export interface IMission {
    flight_number: number,
    mission_name: string,
    mission_id: Array<string>,
    upcoming: boolean,
    launch_year: string,
    launch_success: string;
    links: ILink
    rocket: IRocket
}

interface ILink {
    mission_patch: string | null,
    mission_patch_small: string | null,
    article_link: string | null,
    wikipedia: string | null,
    video_link: string | null,
    youtube_id: string | null,
    flickr_images: Array<string> | null
}

interface IRocket {
    first_stage: IStage
}

interface IStage {
    cores: ICore[]
}

interface ICore {
    land_success: string | null
}