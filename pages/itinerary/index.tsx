import React from 'react';
import Link from 'next/link';
import ImagePopup from '@/components/ImagePopup';

interface EventItem {
    time: string;
    title: string;
    description: string;
    location?: string;
    link?: React.ReactNode;
}

const fridayEvents: EventItem[] = [
    {
        time: "3:00 PM",
        title: "Check-In Opens",
        description: "Welcome to Pride in My Pines!",
        location: "Welcome Booth"
    },
    {
        time: "5:00 PM",
        title: "Happy Hour",
        description: "Start the weekend with a refreshing drink",
        location: "Amphitheater"
    },
    {
        time: "6:00 PM",
        title: "Dinner - Cocina del Abuelo",
        description: "Birria, tacos, burritos, and more!",
        location: "Camp 29 - Upper level semi-circle entrance",
        link: (
          <Link href="/food" className="text-pink-500 hover:text-pink-400 underline text-md font-bold">
            Check menu here
          </Link>
        ),
    },
    {
        time: "8:00 PM",
        title: "Welcome Onesie Party",
        description: "Suit up for our cozy welcome party",
        location: "Amphitheater"
    },
    {
        time: "9:00 PM",
        title: "80's Movie Night",
        description: "Watch 'Goonies' under the stars",
        location: "Amphitheater"
    },
    {
        time: "11:00 PM",
        title: "After Hours Hang Out",
        description: "Continue the fun with fellow campers",
        location: "All Campsites"
    }
];

const saturdayEvents: EventItem[] = [
    {
        time: "8:00 AM",
        title: "Breakfast",
        description: "Start your day with a hearty meal: Pancakes and eggs",
        location: "Camp 46 - Upper level semi-circle center"
    },
    {
        time: "9:00 AM",
        title: "Morning Guided Hike",
        description: "Explore the beautiful surroundings with other campers!",
        location: "Lakeshore Picnic Area"
    },
    {
        time: "10:00 AM - 12:00 PM",
        title: "Explore campgrounds at your leisure",
        description: "E-bikes and boats available for rent at the boating dock",
        location: "Lakeshore Picnic Area"
    },
    {
        time: "12:00 PM",
        title: "Lunch",
        description: "Enjoy a lakeside picnic with Hot Dogs and Mac-n-Cheese",
        location: "Lakeshore Picnic Area"
    },
    {
        time: "2:00 PM - 4:00 PM",
        title: "Games & Sports",
        description: "Join in the fun activities",
        location: "Lakeshore Picnic Area"
    },
    {
        time: "5:00 PM",
        title: "Social Hour",
        description: "Mix and mingle with fellow campers",
        location: "Amphitheater"
    },
    {
        time: "5:00 PM",
        title: "Campsite Decorating Contest",
        description: "Show off your 80's themed campsite",
        location: "All Campsites"
    },
    {
        time: "6:00 PM",
        title: "Dinner - Cocina del Abuelo",
        description: "Cheeseburgers, nachos, and more! (check menu here)",
        location: "Camp 29 - Upper level semi-circle entrance",
        link: (
          <Link href="/food" className="text-pink-500 hover:text-pink-400 underline text-md font-bold">
            Check menu here
          </Link>
        ),
    },
    {
        time: "8:00 PM",
        title: "80's Karaoke",
        description: "Dress in Fab 80's fashion and sing your heart out",
        location: "Amphitheater"
    },
    {
        time: "9:00 PM",
        title: "80's Movie Night",
        description: "Watch 'Back to the Future' under the stars",
        location: "Amphitheater"
    },
    {
        time: "11:00 PM",
        title: "After Hours Hang Out",
        description: "Continue the fun with fellow campers",
        location: "All Campsites"
    }
];

const sundayEvents: EventItem[] = [
    {
        time: "8:00 AM",
        title: "Breakfast",
        description: "One last meal together: Eggs and tater tots",
        location: "Camp 46 - Upper level semi-circle center"
    },
    {
        time: "9:00 AM",
        title: "Farewell Gathering",
        description: "Say goodbye to your new friends, until next time!",
        location: "Amphitheater"
    },
    {
        time: "10:00 AM",
        title: "Camp/Tent Teardown",
        description: "Pack up your campsite",
        location: "All Campsites"
    },
    {
        time: "12:00 PM",
        title: "Departure",
        description: "Safe travels home!",
        location: "All Campsites"
    }
];

const EventDay: React.FC<{ day: string; events: EventItem[] }> = ({ day, events }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">{day}</h2>
        <div className="space-y-4">
            {events.map((event, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="text-green-400 font-semibold min-w-[100px]">{event.time}</span>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-100">{event.title}</h3>
                            <p className="text-gray-300">{event.description}</p>
                            {event.location && (
                                <p className="text-gray-400 text-sm mt-1">
                                    📍 {event.location}
                                </p>
                            )}
                            {event.link && (
                                <p className="text-gray-400 text-sm mt-1">
                                    {event.link}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function Itinerary() {
    return (
        <main className="container mx-auto px-4 py-4 flex flex-col items-center gap-4 max-w-4xl">
            <p className="text-xl text-gray-300 text-center max-w-2xl">
                Welcome to our Back to 80s Itinerary! This is dedicated to give you all the information needed for what's to come! 
                Reminder to dress up, dress out, and decorate those tents for a chance to win wonderful prizes!!! 🌈
            </p>

            <div className="text-center mb-4">
                <ImagePopup 
                    src="/campMap.jpg"
                    alt="Camp Map"
                    linkText="Camp Map here!"
                />
            </div>

            <div className="w-full">
                <EventDay day="May 30 (Friday) - Event Day 1" events={fridayEvents} />
                <EventDay day="May 31 (Saturday) - Event Day 2" events={saturdayEvents} />
                <EventDay day="June 1 (Sunday) - Event Day 3" events={sundayEvents} />
            </div>

            <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
                bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400
                text-pink-500 font-bold
                gap-2 hover:bg-gradient-to-r hover:from-green-400 hover:via-yellow-300 hover:to-pink-400 
                text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
                dark:hover:text-pink-400 hover:scale-105 transform transition duration-300 ease-in-out"
                href="/"
                target="_self"
                rel="noopener noreferrer"
            >
                Back to Home
            </Link>
        </main>
    );
} 