import { Button } from "@nextui-org/react";
import { HeroSectionProps } from '../types.ts';
import Hero from '../../assets/modern-living-room-interior-design.jpg'

const HeroSection: React.FC<HeroSectionProps> = ({
                                                     title,
                                                     subtitle,
                                                     buttonText,
                                                 }) => {
    return (
        <div className="relative w-full min-h-[500px] lg:h-screen">
            <div className="absolute inset-0">
                <img
                    src={Hero}
                    alt="Modern apartment interior"
                    className="w-full h-[250px] sm:h-[300px] lg:h-[700px] object-cover"
                />
            </div>

            {/* Brown banner overlay */}
            <div className="max-w-5xl mx-auto absolute left-0 right-0 bottom-0 lg:bottom-[18%] bg-[#3B2417] py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl text-white font-light mb-2">
                        {title}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-white font-light mb-6">
                        {subtitle}
                    </h2>
                    <Button
                        size="lg"
                        variant="bordered"
                        className="text-white border-white hover:bg-white hover:text-[#3B2417] transition-colors rounded-none"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;