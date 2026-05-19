export interface Testimonial {
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  { name: "Ahmed Khan", location: "UK", comment: "The teachers are incredibly patient with my children. Highly recommended!", rating: 5 },
  { name: "Sara Malik", location: "USA", comment: "My Tajweed has improved significantly in just three months. Alhamdulillah.", rating: 5 },
  { name: "Omar Farooq", location: "Canada", comment: "Flexible timings and very professional atmosphere for learning.", rating: 5 },
  { name: "Fatima Zahra", location: "Australia", comment: "Best online platform for Quran learning. The Hifz program is excellent.", rating: 5 },
  { name: "Zubair Ahmad", location: "UAE", comment: "The Islamic Studies course is very comprehensive and easy to follow.", rating: 5 },
  { name: "Ayesha Siddiqa", location: "Norway", comment: "My daughter loves her classes! She's already finished basic Nazra.", rating: 5 },
  { name: "Hamza Bin Tariq", location: "Germany", comment: "Very qualified scholars. The learning pace is adjusted to individual needs.", rating: 5 },
  { name: "Maryam Bi", location: "Qatar", comment: "Clear audio and great interactive tools make learning very easy.", rating: 5 },
  { name: "Suleman Shah", location: "Malaysia", comment: "I appreciate the focus on correct pronunciation and rules of Tajweed.", rating: 5 },
  { name: "Nabeel Akhtar", location: "Ireland", comment: "A truly blessed institution. May Allah bless the teachers.", rating: 5 },
  // Adding more variations to simulate a large volume
  { name: "Ibrahim", location: "USA", comment: "Exceptional teaching quality.", rating: 5 },
  { name: "Khadija", location: "UK", comment: "My kids look forward to their lessons every day.", rating: 5 },
  { name: "Mustafa", location: "Canada", comment: "Very professional and punctual.", rating: 5 },
  { name: "Hala", location: "Turkey", comment: "The best choice for online Islamic education.", rating: 5 },
  { name: "Ali", location: "South Africa", comment: "Great experience with the Hifz teacher.", rating: 5 },
  { name: "Zainab", location: "Netherlands", comment: "Tailored approach for beginners.", rating: 5 },
  { name: "Usman", location: "Sweden", comment: "Very easy to book and manage sessions.", rating: 5 },
  { name: "Rida", location: "Oman", comment: "MashaAllah, great effort by the team.", rating: 5 },
  { name: "Bilal", location: "France", comment: "Effective methodology for kids.", rating: 5 },
  { name: "Nadia", location: "Belgium", comment: "High quality audio and video classes.", rating: 5 },
  { name: "Yusuf", location: "Italy", comment: "Helped me reconnect with my Deen.", rating: 5 },
  { name: "Safiyya", location: "Spain", comment: "Affordable and authentic learning.", rating: 5 },
  { name: "Haris", location: "Singapore", comment: "Knowledgeable and kind instructors.", rating: 5 },
  { name: "Amna", location: "Japan", comment: "Wonderful environment for non-Arabic speakers.", rating: 5 },
  { name: "Taha", location: "New Zealand", comment: "Significant growth in my Quran recitation.", rating: 5 },
  { name: "Layla", location: "Denmark", comment: "Perfect for busy working professionals.", rating: 5 },
  { name: "Idrees", location: "Switzerland", comment: "Scholarly guidance at every step.", rating: 5 },
  { name: "Muna", location: "Finland", comment: "Very patient with elderly students.", rating: 5 },
  { name: "Rashid", location: "Austria", comment: "The Seerah classes are enlightening.", rating: 5 },
  { name: "Samina", location: "Sweden", comment: "A community of learners. Very encouraging.", rating: 5 },
];

// Replicating to demonstrate depth and create more entries
export const extendedTestimonials = Array.from({ length: 500 }, (_, i) => {
  const original = testimonials[i % testimonials.length];
  return {
    ...original,
    name: `${original.name} ${String.fromCharCode(65 + (i % 26))}`, // Simple variation for uniqueness
  };
});
