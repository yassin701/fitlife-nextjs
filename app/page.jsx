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
                    <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-linear-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 backdrop-blur-sm">
                                <span className="h-2 w-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                                <span className="text-gray-200 font-semibold tracking-wide">PREMIUM FITNESS EXPERIENCE</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                Elevate Your
                                <span className="block text-transparent bg-linear-to-r from-white via-yellow-400 to-pink-400 bg-clip-text">
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
                                    href="/Services"
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-blue-200 to-yellow-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
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
                                    <div className="text-yellow-300 text-sm font-medium">Active Members</div>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-yellow-300 text-sm font-medium">Access</div>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-1">45+</div>
                                    <div className="text-yellow-300 text-sm font-medium">Expert Coaches</div>
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

          

                </div>
    );
}