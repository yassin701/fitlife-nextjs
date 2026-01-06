import React from 'react'

export default function page() {
    return (
      
        <>
        <section className="relative py-20 bg-secondaryDark">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-softWhite text-center mb-8">
                    Join Our Gym Today
                </h2>
                <p className="text-lightGray text-center mb-12">
                    Fill out the form below and our team will get back to you to start your fitness journey.
                </p>

                <form className="grid gap-6 bg-dark p-10 rounded-2xl shadow-lg">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-softWhite font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="px-4 py-3 rounded-lg bg-secondaryDark border border-white/20 text-softWhite focus:border-bluePrimary focus:ring-1 focus:ring-bluePrimary outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-softWhite font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="px-4 py-3 rounded-lg bg-secondaryDark border border-white/20 text-softWhite focus:border-bluePrimary focus:ring-1 focus:ring-bluePrimary outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-softWhite font-medium mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Your Phone Number"
                            className="px-4 py-3 rounded-lg bg-secondaryDark border border-white/20 text-softWhite focus:border-bluePrimary focus:ring-1 focus:ring-bluePrimary outline-none transition"
                        />
                    </div>

                    {/* Goals / Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-softWhite font-medium mb-2">
                            Fitness Goals
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Tell us your fitness goals"
                            className="px-4 py-3 rounded-lg bg-secondaryDark border border-white/20 text-softWhite focus:border-bluePrimary focus:ring-1 focus:ring-bluePrimary outline-none transition"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-bluePrimary to-purplePrimary text-softWhite font-bold py-4 rounded-xl text-lg hover:shadow-2xl hover:shadow-bluePrimary/40 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Join Now
                    </button>
                </form>
            </div>
        </section>
</>
  )
}
