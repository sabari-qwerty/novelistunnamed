export interface ShowCatgaryData {
    catgrayname: string;
    catgaryid: string;
    skip: number;
}

interface img {
    url: string
}

export interface posts {
    id: string
    title: string
    slug: string
    excerot: string
    featuredImages: img
}


interface Author {
    id: string;
    name: string;
    bio: string;
    photo: {
        url: string;
    };
}

interface FeaturedImages {
    url: string;
}

interface ConnectionPost {
    id: string;
    stage: string;
    title: string;
    featuredImages: FeaturedImages;
}

interface Connection {
    id: string;
    name: string;
    slug: string;
    post: ConnectionPost[];
}

interface Content {
    html: string;
}

interface Post {
    authors: Author[];
    slug: string;
    title: string;
    featuredImages: FeaturedImages;
    content: Content;
    connections: Connection[];
}

export interface singlePost {
    data: {
        posts: Post[];
    };
}