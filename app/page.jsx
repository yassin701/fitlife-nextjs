import Link from "next/link";
import Image from "next/image";
import heroImage from "../public/images/heroImage.png";
import Features from './Components/Fuetures';

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage} // Your image path
                        alt="FitLife Gym - People training and exercising"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                        sizes="100vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 backdrop-blur-sm">
                                <span className="h-2 w-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                                <span className="text-white font-semibold tracking-wide">PREMIUM FITNESS EXPERIENCE</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                Elevate Your
                                <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                                    Fitness Journey
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-200 max-w-xl">
                                Join our community where fitness meets lifestyle. Transform your body with expert guidance,
                                cutting-edge equipment, and a supportive environment designed for your success.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-5 pt-6">
                                <Link
                                    href="/services"
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Discover Services
                                    <svg
                                        className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>

                                <Link
                                    href="/free-trial"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-blue-400/30 transition-all duration-300"
                                >
                                    7-Day Free Trial
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-10">
                                <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-1">850+</div>
                                    <div className="text-blue-300 text-sm font-medium">Active Members</div>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-blue-300 text-sm font-medium">Access</div>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-1">45+</div>
                                    <div className="text-blue-300 text-sm font-medium">Expert Coaches</div>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

           {/* Features Section */}
           <Features />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-y border-gray-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Start your journey today with a free consultation and personalized plan
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
                        >
                            Book Consultation
                        </Link>
                        <Link
                            href="/tour"
                            className="px-10 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-bold text-lg rounded-xl hover:bg-blue-400/10 transition-all duration-300"
                        >
                            Schedule Tour
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold">FL</span>
                                </div>
                                <span className="text-2xl font-bold text-white">FitLife</span>
                            </div>
                            <p className="text-gray-400 mt-3 max-w-md">
                                Premium fitness facility dedicated to transforming lives through innovative training and community support.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div>
                                <h4 className="text-white font-bold mb-4">Quick Links</h4>
                                <div className="flex flex-col space-y-2">
                                    <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
                                    <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link>
                                    <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link>
                                    <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-4">Contact</h4>
                                <div className="flex flex-col space-y-2 text-gray-400">
                                    <p>123 Fitness Street</p>
                                    <p>City, State 12345</p>
                                    <p>info@fitlife.com</p>
                                    <p>(555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-10 pt-8 text-center">
                        <p className="text-gray-500">
                            © 2024 FitLife. All rights reserved. |
                            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 ml-1">Privacy Policy</Link> |
                            <Link href="/terms" className="text-blue-400 hover:text-blue-300 ml-1">Terms of Service</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}