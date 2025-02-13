import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Building2, PaintBucket, Palette, Phone } from "lucide-react";
import { PropertyFeature } from '../types.ts';
import Feature from '../../assets/elegant-rendering-interior-design.jpg'

const FeaturedDevelopment: React.FC = () => {
    const propertyFeature: PropertyFeature = {
        title: "LOTUS RESIDENCE",
        description: "Lotus Residence is located in North Jakarta and comes with premium fully furnished.",
        image: "/lotus-residence.jpg", // Replace with your image path
        amenities: [
            { icon: <Building2 className="w-6 h-6" />, label: "APARTMENT TYPE" },
            { icon: <PaintBucket className="w-6 h-6" />, label: "INTERIOR CONSTRUCTION" },
            { icon: <Palette className="w-6 h-6" />, label: "HOUSE DESIGN" },
            { icon: <Phone className="w-6 h-6" />, label: "FREE ESTIMATE" }
        ]
    };

    return (
        <div className="w-full py-8 px-4 bg-white ">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-medium mb-2">FEATURED DEVELOPMENT</h2>
                    <p className="text-gray-600">Lotus Residence located in North Jakarta and comes with premium fully furnished.</p>
                </div>

                <Card className="w-full rounded-none border border-3 border-[#3B2417]">
                    <CardBody className="p-0">
                        <div className="relative">
                            <img
                                src={Feature}
                                alt={propertyFeature.title}
                                className="w-full h-[400px] object-cover"
                            />
                            <div
                                className="w-[264px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 bg-[#3B2417]">
                                <p className="text-white">Lotus Residence .</p>
                                <h3 className="text-white text-2xl font-medium">{propertyFeature.title}</h3>
                            </div>
                        </div>
                    </CardBody>

                    <CardFooter className="flex flex-col sm:flex-row gap-6 p-6 bg-white">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-grow">
                            {propertyFeature.amenities.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center border-r border-gray-500 last:border-r-0 h-full"
                                >
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="mb-2 text-[#B08968]">
                                            {amenity.icon}
                                        </div>
                                        <span className="text-xs text-gray-600">{amenity.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </CardFooter>

                </Card>
                <Button
                    className="bg-[#B08968] text-white px-8 rounded-none mt-4"
                    size="lg"
                >
                    VIEW DETAILS
                </Button>
            </div>
        </div>
    );
};

export default FeaturedDevelopment;