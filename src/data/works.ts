export interface WorkItem {
    id: number;
    title: string;
    category: string;
    image: string;
    size: "large" | "small";
    date?: string; // Adding date field as seen in the design "2024.12.31"
    tag?: string; // "Web site", "Graphics" etc. from design
}

export const worksData: WorkItem[] = [
    {
        id: 1,
        title: "Uswd Cream Tube 9",
        category: "Product",
        image: "/images/work_bread.jpg",
        size: "large",
        date: "2024.12.31",
        tag: "Web site"
    },
    {
        id: 2,
        title: "Uswd Cream Tube 9",
        category: "Goods",
        image: "/images/work_tags_2.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site"
    },
    {
        id: 3,
        title: "Uswd Cream Tube 9",
        category: "Product",
        image: "/images/work_tube.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site"
    },
    {
        id: 4,
        title: "Uswd Cream Tube 9",
        category: "Craft",
        image: "/images/work_graphic.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site"
    },
    {
        id: 5,
        title: "Uswd Cream Tube 9",
        category: "Aroma",
        image: "/images/work_fish.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site"
    },
];
