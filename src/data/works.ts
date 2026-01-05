export interface WorkItem {
    id: number;
    title: string;
    category: string;
    image: string;
    size: "large" | "small";
    date?: string;
    tag?: string;
    // New fields
    description?: string;
    client?: string;
    role?: string;
    imagesGallery?: string[];
}

export const worksData: WorkItem[] = [
    {
        id: 1,
        title: "Uswd Cream Tube 9",
        category: "Product",
        image: "/images/work_bread.jpg",
        size: "large",
        date: "2024.12.31",
        tag: "Web site",
        description: "魚の旨味を活かしたパッケージ サーモンスティック\n\n北海道産の新鮮な魚を使用した、風味豊かなサーモンスティックのパッケージデザイン。\n素材の良さをそのまま伝えるため、シンプルでありながらも力強い筆文字と、素材の質感が伝わる紙を使用しました。\n手に取った瞬間に「美味しそう」と感じてもらえるような、シズル感のあるデザインを目指しました。",
        client: "Client Name",
        role: "Art Direction, Design",
        imagesGallery: ["/images/work_bread.jpg"] // Using same image for demo as we don't have others
    },
    {
        id: 2,
        title: "Uswd Cream Tube 9",
        category: "Goods",
        image: "/images/work_tags_2.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site",
        description: "Dummy description for item 2.",
        client: "Client Name",
        role: "Design",
        imagesGallery: ["/images/work_tags_2.jpg"]
    },
    {
        id: 3,
        title: "Uswd Cream Tube 9",
        category: "Product",
        image: "/images/work_tube.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site",
        description: "Dummy description for item 3.",
        client: "Client Name",
        role: "Design",
        imagesGallery: ["/images/work_tube.jpg"]
    },
    {
        id: 4,
        title: "Uswd Cream Tube 9",
        category: "Craft",
        image: "/images/work_graphic.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site",
        description: "Dummy description for item 4.",
        client: "Client Name",
        role: "Design",
        imagesGallery: ["/images/work_graphic.jpg"]
    },
    {
        id: 5,
        title: "Uswd Cream Tube 9",
        category: "Aroma",
        image: "/images/work_fish.jpg",
        size: "small",
        date: "2024.12.31",
        tag: "Web site",
        description: "Dummy description for item 5.",
        client: "Client Name",
        role: "Design",
        imagesGallery: ["/images/work_fish.jpg"]
    },
];
