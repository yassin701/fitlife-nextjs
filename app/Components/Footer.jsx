import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
               
            <footer className="bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 bg-linear-to-br from-blue-500 to-yellow-600 rounded-xl flex items-center justify-center">
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
  )
}

