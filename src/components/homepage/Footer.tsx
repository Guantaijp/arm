import FooterImage from '../../assets/daylight-analog-city-landscape-with-buildings.jpg';
import {Mail, MapPin, Phone} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Logo and Company Details */}
                    <div>
                        <div className="flex flex-col items-start mb-4">
                            <h2 className="text-[#3C2A21] text-2xl font-bold">ARM</h2>
                            <span className="text-[#3C2A21] text-lg">ESTATES</span>
                        </div>
                    </div>
                    <div className="text-sm space-y-1">
                        <p>P.O BOX 34856-0080 NAIROBI.</p>
                        <p>T: +254 709 889 000</p>
                        <p>E: info@arm-estates.com</p>
                    </div>
                    {/* Quick Access Links */}
                    <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">A KELA BROTHERS REALTORS LIMITED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-600"/>
                            <span>123 Real Estate Avenue, Business District</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-gray-600"/>
                            <div className="flex gap-2">
                                <a href="tel:+1234567890" className="hover:text-blue-600">+1 234 567 890</a>
                                <span>/</span>
                                <a href="tel:+1234567891" className="hover:text-blue-600">+1 234 567 891</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-600"/>
                            <a href="mailto:info@armestates.com" className="hover:text-blue-600">
                                info@armestates.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Banner */}
                <div className="mt-8">
                    <img
                        src={FooterImage}
                        alt="ARM Estates Buildings"
                        className="w-full h-40 object-cover"
                    />
                </div>

                {/* Copyright Section */}
                <div className="mt-4 text-center text-sm text-gray-600 border-t border-gray-200 pt-4">
                    <p>&copy; {new Date().getFullYear()} ARM Estates. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;