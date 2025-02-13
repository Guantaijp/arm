import FooterImage from '../assets/daylight-analog-city-landscape-with-buildings.jpg';

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Logo and Company Details */}
                    <div>
                        <div className="flex items-center mb-4">
                            <h2 className="text-[#3C2A21] text-2xl font-bold">ARM</h2>
                            <span className="text-[#3C2A21] text-lg ml-1">ESTATES</span>
                        </div>
                        <div className="text-sm space-y-1">
                            <p>P.O BOX 34856-0080 NAIROBI.</p>
                            <p>T: +254 709 889 000</p>
                            <p>E: info@arm-estates.com</p>
                        </div>
                    </div>

                    {/* Quick Access Links */}
                    <div>
                        <h3 className="text-[#3C2A21] font-bold mb-4">QUICK ACCESS</h3>
                        <div className="text-sm space-y-1">
                            <p>Downloads</p>
                            <p>Property Search</p>
                            <p>FAQs</p>
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