import { ChevronRight } from "lucide-react";
import {NewsItem} from "../types.ts";



const LatestNews: React.FC = () => {
    const newsItems: NewsItem[] = [
        {
            title: "INVESTMENT AT LOTUS RESIDENCE",
            description: "Lotus Residence ",
            link: "#"
        },
        {
            title: "INFRASTRUCTURE AT LOTUS RESIDENCE",
            description: "Lotus Residence ",
            link: "#"
        },
        {
            title: "EMBRACE A VIBRANT LIFESTYLE IN SOUTH C",
            description: "Lotus Residence ",
            link: "#"
        }
    ];

    return (
        <div className="w-full py-16 px-4 border-y ">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-lg font-medium mb-4">LATEST NEWS & INSIGHTS</h2>

                <div className="flex flex-col gap-2">
                    {newsItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="group flex items-center justify-between bg-[#3B2417] hover:bg-[#4B3427] p-4 text-white transition-colors"
                        >
                            <div>
                            <p className="text-sm font-normal">{item.description}</p>
                            <span className="text-sm">{item.title}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    ))}
                </div>

                <button className="mt-4 text-sm border border-[#3B2417] text-[#3B2417] px-6 py-2 hover:bg-[#3B2417] hover:text-white transition-colors">
                    VIEW ALL UPDATES
                </button>
            </div>
        </div>
    );
};

export default LatestNews;