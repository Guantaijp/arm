import { Button, Card } from "@nextui-org/react";
import {MapPin, Activity, Home, DollarSign, ChevronRight} from "lucide-react";
import Hero from '../assets/modern-living-room-interior-design.jpg'
import Feature from '../assets/elegant-rendering-interior-design.jpg'
import About from '../assets/analog-landscape-city-with-buildings.jpg'
import Footer from "../components/Footer.tsx";

const LandingPage = () => {
    return (
        <div className="w-full h-screen bg-white">
            {/* Navigation */}
            <nav className="container mx-auto w-full px-4 py-4 flex items-center justify-between bg-white">
                <div className="text-xl font-bold">ARM ESTATES</div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-600">HOME</a>
                    <a href="#" className="text-gray-600">OUR STORY</a>
                    <a href="#" className="text-gray-600">DEVELOPMENTS</a>
                    <a href="#" className="text-gray-600">BUYER INSIGHTS</a>
                    <Button color="primary" variant="light">
                        LET'S TALK
                    </Button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative h-[700px] w-full">
                <div className="absolute inset-0">
                    <img
                        src={Hero}
                        alt="Modern living room"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        YOUR DREAM HOME IS
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        WAITING TO BE DISCOVERED
                    </h2>
                    <Button
                        color="default"
                        size="lg"
                        className="bg-white text-black"
                    >
                        DISCOVER DEVELOPMENTS
                    </Button>
                </div>
            </div>

            {/* Featured Development Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h3 className="text-2xl font-bold text-center mb-2">
                    FEATURED DEVELOPMENT
                </h3>
                <p className="text-center text-gray-600 mb-12">
                    Our business model is built around the vision of providing high-caliber customized residences that our customers treasure forever.
                </p>

                <Card className="w-full max-w-4xl mx-auto">
                    <div className="relative">
                        <img
                            src={Feature}
                            alt="Lotus Residence Interior"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="text-sm mb-2">SOUTH C, NAIROBI</div>
                            <h4 className="text-2xl font-bold">LOTUS RESIDENCE</h4>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                        <div className="flex flex-col items-center">
                            <Home className="mb-2" />
                            <div className="text-sm font-bold">TYPE</div>
                            <div className="text-sm">APARTMENT</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <Activity className="mb-2" />
                            <div className="text-sm font-bold">STATUS</div>
                            <div className="text-sm">UNDER CONSTRUCTION</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <MapPin className="mb-2" />
                            <div className="text-sm font-bold">SIZE</div>
                            <div className="text-sm">FROM 25 SQ.M</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <DollarSign className="mb-2" />
                            <div className="text-sm font-bold">PRICE</div>
                            <div className="text-sm">KSH. 4,000,000</div>
                        </div>
                    </div>

                    <div className="px-6 pb-6">
                        <Button
                            color="primary"
                            variant="bordered"
                            className="w-full md:w-auto"
                        >
                            FULL DETAILS
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Latest News & Insights Section */}
            <div className="max-w-2xl mx-auto mb-16">
                <h3 className="text-2xl font-bold mb-8">LATEST NEWS & INSIGHTS</h3>

                <div className="space-y-4">
                    <Button className="w-full bg-[#3C2A21] text-white justify-between px-6 py-8">
                        <span>INVESTMENT AT LOTUS RESIDENCE</span>
                        <ChevronRight />
                    </Button>

                    <Button className="w-full bg-[#3C2A21] text-white justify-between px-6 py-8">
                        <span>INFRASTRUCTURE AT LOTUS RESIDENCE</span>
                        <ChevronRight />
                    </Button>

                    <Button className="w-full bg-[#3C2A21] text-white justify-between px-6 py-8">
                        <span>EMBRACE A VIBRANT LIFESTYLE IN SOUTH C</span>
                        <ChevronRight />
                    </Button>
                </div>

                <Button color="primary" variant="bordered" className="mt-6">
                    READ ALL INSIGHTS
                </Button>
            </div>

            {/* About Us Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mb-16">
                <img
                    src={About}
                    alt="Building exterior"
                    className="w-full md:w-1/2 object-cover"
                />
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">ABOUT US</h3>
                    <p className="text-gray-600 mb-4">
                        Since our start, ARM Estates has been delivering top quality residential projects that make homeowners proud. Our commitment to excellence drives us to create spaces that combine comfort, luxury, and practicality.
                    </p>
                    <Button color="primary" variant="bordered">
                        READ MORE
                    </Button>
                </div>
            </div>

            {/* Contact Section */}
            <Footer/>
        </div>
    );
};

export default LandingPage;