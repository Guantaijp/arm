import { Button } from "@nextui-org/react";
import AboutImage from '../../assets/analog-landscape-city-with-buildings.jpg'

const AboutUs: React.FC = () => {
    return (
        <div className="w-full py-16 px-4 bg-white border-b">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                {/* Image Column */}
                <div className="w-full md:w-1/3">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 transform translate-x-2 translate-y-2 -z-10"></div>
                        <img
                            src={AboutImage}
                            alt="Lotus Residence Building"
                            className="w-full h-auto object-cover relative z-10"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-medium mb-4">ABOUT US</h2>
                    <p className="text-gray-600 mb-6">
                        We are committed to delivering top quality residential, commercial and mixed-use
                        buildings supported by our experienced team. With more than 15 years of expertise
                        in property development, our company has evolved to become one of the most
                        respected developers in the region. We take pride in our attention to detail
                        and commitment to excellence in every project we undertake.
                    </p>
                    <Button
                        size="lg"
                        variant="bordered"
                        className="mt-4 text-sm border border-[#3B2417] text-[#3B2417] px-6 py-2 hover:bg-[#3B2417] hover:text-white transition-colors rounded-none">
                        READ MORE
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;