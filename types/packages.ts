export interface Package {
    id: string;
    title: string;
    destination: string;
    description: {
        root: {
            type: string;
            format: string;
            indent: number;
            version: number;
            children: DescriptionParagraph[];
        };
    };
    duration: {
        days: number;
        nights: number;
    };
    price: number;
    image: {
        id: string;
        filename: string;
        mimeType: string;
        filesize: number;
        width: number;
        height: number;
        createdAt: string;
        updatedAt: string;
        url: string;
    };
    highlights: Highlight[];
    itinerary: {
        root: {
            type: string;
            format: string;

            indent: number;
            version: number;
            children: ItineraryParagraph[];
        };
    };
    createdAt: string;
    updatedAt: string;
}

interface DescriptionParagraph {
    type: string;
    direction: string;
    format: string;
    indent: number;
    children: DescriptionText[];
}

interface DescriptionText {
    detail: number;
    format: number;
    mode: string;
    style: string;
    text: string;
    type: string;
    version: number;
}

interface Highlight {
    highlight: string;
    id: string;
}

interface ItineraryParagraph {
    type: string;
    direction: string;
    format: string;
    indent: number;
    children: ItineraryText[];
}

interface ItineraryText {
    detail: number;
    format: number;
    mode: string;
    style: string;
    text: string;
    type: string;
    version: number;
}
