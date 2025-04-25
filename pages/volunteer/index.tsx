
import VolunteerForm from '@/components/volunteerForm';

export default function Volunteer() {
    return (
        <main className="volunteer-section flex flex-col gap-4 row-start-2 items-center items-start">
            <h3 className="text-2xl font-extrabold dark:text-white text-center">
                Be part of the experience! Volunteer and enjoy contributing while creating lasting friendships with fellow campers and the Pride in My Pines team. 🌲🌈
            </h3>
            <VolunteerForm />
        </main>
    );
}

