import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const sportsServices = [
    {
      id: 1,
      title: "Badminton",
      description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
      fullDescription: "Badminton is a sport played with rackets and a shuttlecock. It can be played as singles or doubles. The game is known for its fast-paced nature and requires quick reflexes and agility. It is a great cardiovascular workout and helps in building endurance.",
      image: "https://example.com/badminton.jpg",
    },
    {
      id: 2,
      title: "Swimming",
      description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
      fullDescription: "Swimming is an excellent full-body workout that improves cardiovascular health, builds muscle strength, and increases flexibility. It can be done for leisure, exercise, or competition. Swimming is a low-impact activity that is suitable for all ages.",
      image: "https://example.com/swimming.jpg",
    },
    {
      id: 3,
      title: "Cricket",
      description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
      fullDescription: "Cricket is a popular team sport played with a bat and ball. It involves batting, bowling, and fielding. The game requires strategic thinking, coordination, and physical fitness. It is played in various formats, including Test matches, One-Day Internationals, and T20s.",
      image: "https://example.com/cricket.jpg",
    },
    {
      id: 4,
      title: "Yoga",
      description: "A holistic practice combining physical postures, breathing exercises, and meditation to improve flexibility, strength, and mental well-being.",
      fullDescription: "Yoga is a holistic practice that combines physical postures, breathing exercises, and meditation. It helps in improving flexibility, building strength, and promoting mental well-being. Yoga is suitable for all age groups and can be adapted to different fitness levels.",
      image: "https://example.com/yoga.jpg",
    },
    {
      id: 5,
      title: "Gym",
      description: "A facility equipped for various forms of exercise, focusing on strength training, cardiovascular workouts, and overall fitness.",
      fullDescription: "A gym is a facility equipped with various exercise equipment for strength training, cardiovascular workouts, and overall fitness. It offers a range of activities including weight lifting, aerobics, and personal training sessions. Regular gym workouts help in maintaining a healthy lifestyle.",
      image: "https://example.com/gym.jpg",
    },
  ];

  const service = sportsServices.find((service) => service.id === parseInt(id));

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service-detail">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <img src={service.image} alt={service.title} className="w-full h-auto mb-8 rounded" />
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">{service.title}</h2>
          <p className="text-neutralGrey">{service.fullDescription}</p>
        </div>
        <div>
          <h2 className="text-3xl text-neutralDGrey font-semibold mb-3">Book a Session</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-neutralDGrey">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-neutralDGrey">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-neutralDGrey">Date</label>
              <input type="date" id="date" className="w-full px-4 py-2 border rounded" />
            </div>
            <button type="submit" className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
