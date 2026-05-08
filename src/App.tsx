/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  MapPin, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Clock, 
  Users, 
  Globe, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Moon,
  Sun,
  GraduationCap,
  Sparkles,
  Award
} from 'lucide-react';

// --- Components ---

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif font-bold text-islamic-green mb-4 drop-shadow-sm"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-600 max-w-2xl mx-auto text-lg font-light"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`h-1.5 bg-gradient-to-r from-transparent via-islamic-gold to-transparent w-32 mt-6 ${centered ? 'mx-auto' : ''}`}
    />
  </div>
);

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants = {
    primary: 'bg-islamic-green text-white hover:bg-islamic-green/90 shadow-[0_10px_20px_-5px_rgba(1,50,32,0.4)]',
    secondary: 'bg-gradient-to-br from-islamic-gold to-[#B8860B] text-islamic-green hover:shadow-[0_10px_20px_-5px_rgba(230,179,37,0.4)]',
    outline: 'border-2 border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white',
    ghost: 'text-islamic-green hover:bg-islamic-green/5'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const CourseCard = ({ title, description, icon: Icon, delay, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    onClick={() => window.open(`https://wa.me/923296838371?text=I want to learn more about ${title}`, '_blank')}
    className="glass p-4 rounded-2xl mb-4 flex items-center gap-6 group hover:bg-islamic-green hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-premium relative overflow-hidden w-full border border-islamic-green/5"
  >
    <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-6xl font-serif font-bold text-islamic-green/5 group-hover:text-white/10 pointer-events-none select-none">
      {index}
    </div>
    <div className="w-12 h-12 rounded-xl bg-islamic-green/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
      <Icon className="w-6 h-6 text-islamic-green group-hover:text-islamic-gold" />
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-bold group-hover:text-islamic-gold">{title}</h3>
      <p className="text-gray-500 text-sm group-hover:text-white/80 line-clamp-1">{description}</p>
    </div>
    <div className="shrink-0 text-islamic-green group-hover:text-islamic-gold">
      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </div>
  </motion.div>
);

const FeatureBox = ({ title, description, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-3xl border border-islamic-green/10 bg-white shadow-sm hover:shadow-xl transition-all"
  >
    <Icon className="w-10 h-10 text-islamic-gold mb-4" />
    <h4 className="text-xl font-bold mb-2 text-islamic-green">{title}</h4>
    <p className="text-gray-500">{description}</p>
  </motion.div>
);

const PricingPlan = ({ title, price, classes, duration, features, recommended = false }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-10 rounded-[2.5rem] relative overflow-hidden h-full flex flex-col border transition-all duration-500 ${
      recommended 
        ? 'bg-islamic-green text-white shadow-[0_30px_60px_-15px_rgba(1,50,32,0.3)] scale-105 z-10 border-transparent' 
        : 'bg-white text-slate-800 border-slate-100 shadow-sm hover:shadow-xl'
    }`}
  >
    {recommended && (
      <div className="absolute top-0 right-0 bg-gradient-to-l from-islamic-gold to-[#B8860B] text-islamic-green px-6 py-2 rounded-bl-3xl font-bold text-[10px] tracking-widest uppercase">
        Most Popular
      </div>
    )}
    <h3 className={`text-2xl font-bold mb-2 ${recommended ? 'text-islamic-gold' : 'text-islamic-green'}`}>{title}</h3>
    <div className="flex items-baseline mb-8">
      <span className="text-4xl font-bold">{price}</span>
      <span className={`ml-2 text-sm ${recommended ? 'text-white/60' : 'text-slate-400'}`}>/month</span>
    </div>
    <div className={`mb-8 border-t border-b py-6 ${recommended ? 'border-white/10' : 'border-slate-100'}`}>
      <div className="flex items-center mb-3">
        <Clock className={`w-5 h-5 mr-3 ${recommended ? 'text-islamic-gold' : 'text-islamic-green'}`} />
        <span className="font-medium">{classes} Classes / Week</span>
      </div>
      <div className="flex items-center">
        <Clock className={`w-5 h-5 mr-3 ${recommended ? 'text-islamic-gold' : 'text-islamic-green'}`} />
        <span className="font-medium">{duration} Min Sessions</span>
      </div>
    </div>
    <ul className="mb-10 space-y-4">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center text-sm">
          <CheckCircle2 className={`w-4 h-4 mr-3 flex-shrink-0 ${recommended ? 'text-islamic-gold' : 'text-islamic-green'}`} />
          <span className={recommended ? 'text-white/90' : 'text-slate-600'}>{f}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <Button 
        variant={recommended ? 'secondary' : 'primary'} 
        className="w-full py-4 text-sm uppercase tracking-widest"
        onClick={() => window.open(`https://wa.me/923296838371?text=Hi, I would like to enroll in the ${title}`, '_blank')}
      >
        Enroll Now
      </Button>
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'dark bg-slate-950' : 'bg-islamic-white'}`}>
      
      {/* --- Loading Animation (Overlay) --- */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        onAnimationComplete={() => document.body.style.overflow = 'auto'}
        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 border-4 border-islamic-gold border-t-islamic-green rounded-full"
        />
        <motion.h1 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8 text-2xl font-serif text-islamic-green font-bold"
        >
          Umm al-Qura
        </motion.h1>
      </motion.div>

      {/* --- Sticky Navbar --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-islamic-green rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">U</div>
            <span className={`text-2xl font-serif font-bold tracking-tight ${isDarkMode || (!isScrolled && false) ? 'text-islamic-green' : 'text-islamic-green'}`}>
              Umm al-<span className="text-islamic-gold">Qura</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider text-gray-700">
            {['Home', 'About', 'Courses', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-islamic-gold transition-colors">{item}</a>
            ))}
            <a 
              href="https://wa.me/923296838371" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-islamic-gold transition-colors"
            >
              Contact
            </a>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-islamic-gold" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
             <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-islamic-gold" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-8 h-8 text-islamic-green" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-10 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-10 h-10 text-islamic-green" />
              </button>
            </div>
            <div className="mt-12 flex flex-col space-y-8 text-3xl font-serif font-bold text-islamic-green">
              {['Home', 'About', 'Courses', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
              ))}
              <a 
                href="https://wa.me/923296838371" 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582218778054-94563a696425?q=80&w=2670&auto=format&fit=crop" 
            alt="Children studying Quran" 
            className="w-full h-full object-cover brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-islamic-green/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-islamic-gold/20 text-islamic-gold text-sm font-bold uppercase tracking-widest mb-6 border border-islamic-gold/30 backdrop-blur-sm">
                Certified Teachers Worldwide
              </span>
              <h1 className="text-6xl md:text-9xl font-serif font-bold text-white leading-[0.9] mb-8">
                Learn Quran <br />
                <span className="text-gradient-gold">from Experts</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl leading-relaxed">
                Nazra, Hifz, Tajweed & Islamic Studies for Kids (7+) and Adults. 
                <span className="block mt-4 py-2 px-4 bg-islamic-gold text-islamic-green font-bold inline-block rounded-lg shadow-lg">Start your spiritual journey today.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  variant="secondary" 
                  className="text-lg px-12 flex items-center justify-center" 
                  onClick={() => window.open('https://wa.me/923296838371?text=Hi,%20I%20would%20like%20to%20get%20more%20information%20about%20Umm%20al-Qura%20Academy.', '_blank')}
                >
                  <MessageCircle className="w-6 h-6 mr-3" /> Message on WhatsApp
                </Button>
              </div>
            </motion.div>
            
            {/* Animated Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl">
              {[
                { label: 'Students', value: '500+' },
                { label: 'Teachers', value: '20+' },
                { label: 'Countries', value: '15' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-white"
                >
                  <div className="text-4xl font-bold font-serif text-islamic-gold mb-1">{stat.value}</div>
                  <div className="text-sm font-medium uppercase tracking-wider text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-1 h-12 rounded-full bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-4 bg-islamic-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- About Academy --- */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="pattern-overlay absolute inset-0 z-0 opacity-[0.03]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-islamic-gold/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2670&auto=format&fit=crop" 
                alt="The Holy Quran" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="lg:w-1/2">
              <span className="text-islamic-gold font-bold uppercase tracking-widest text-sm mb-4 block">About Umm al-Qura</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-islamic-green mb-8">Nurturing Hearts With Divine Wisdom</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Umm al-Qura Quran Academy is a premier international platform dedicated to spreading the light of the Quran. We believe in providing high-quality, accessible education regardless of geographical boundaries. <strong>We teach students aged 7 and older (boys and girls).</strong>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: GraduationCap, text: 'Expert Male & Female Teachers' },
                  { icon: Users, text: 'One-on-One Personalized Classes' },
                  { icon: Clock, text: 'Flexible 24/7 Timings' },
                  { icon: Globe, text: 'Worldwide Access Anywhere' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-islamic-green/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-islamic-green" />
                    </div>
                    <span className="font-semibold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="primary">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Courses Section --- */}
      <section id="courses" className="py-24 bg-islamic-green/5">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Premium Courses" 
            subtitle="Tailored programs designed to help you master the Quran and Islamic principles from the comfort of your home."
          />

          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: 'Quran Nazra', 
                description: 'Perfect for beginners. Learn to read the Quran with correct pronunciation (Makharij).',
                icon: BookOpen
              },
              { 
                title: 'Quran with Tajweed', 
                description: 'Advanced rules of recitation to recite the Quran skillfully and beautifully.',
                icon: Sparkles
              },
              { 
                title: 'Hifz-ul-Quran', 
                description: 'Systematic memorization program with revision techniques to retain the holy verses.',
                icon: Award
              },
              { 
                title: 'Tafseer Course', 
                description: 'Deep dive into the meanings, historical context, and guidance of the Quranic verses.',
                icon: GraduationCap
              },
              { 
                title: 'Islamic Studies', 
                description: 'Comprehensive education on Fiqh, Seerah, Hadith, and Islamic etiquettes for kids.',
                icon: Users
              },
              { 
                title: 'Arabic Language', 
                description: 'Learn the language of the Quran. Grammar, vocabulary, and conversational Arabic.',
                icon: Globe
              }
            ].map((course, i) => (
              <CourseCard key={i} {...course} index={i + 1} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Why Choose Us" subtitle="We strive for excellence in every aspect of our online learning platform." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Expert Tutors', description: 'Certified Male & Female teachers with 2, 3, 4, and 5+ years of experience.', icon: GraduationCap },
              { title: '24/7 Support', description: 'Technical assistance and academic support available at all times.', icon: MessageCircle },
              { title: 'Affordable Fees', description: 'Premium education shouldn\'t be a burden. We offer competitive pricing.', icon: CheckCircle2 },
              { title: 'Flexible Schedule', description: 'Pick class times that fit perfectly into your busy lifestyle.', icon: Clock },
              { title: 'Female Teachers', description: 'Dedicated and patient female tutors available for sisters and children.', icon: Users }
            ].map((feature, i) => (
              <FeatureBox key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Teachers Section --- */}
      <section className="py-24 bg-islamic-green">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Expert Teachers" 
            subtitle="Guidance from certified professionals dedicated to your spiritual growth."
            centered={true}
          />
          {/* Custom style for this section heading as it's on dark bg */}
          <style>{`#courses + section + section h2 { color: white; } #courses + section + section p { color: rgba(255,255,255,0.7); }`}</style>
          
          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Sheikh Abdullah', role: 'Qira\'at Expert', exp: '5 Yrs', gender: 'Male' },
              { name: 'Ustadha Fatima', role: 'Tajweed Specialist', exp: '4 Yrs', gender: 'Female' },
              { name: 'Hafiz Omar', role: 'Hifz Program Lead', exp: '3 Yrs', gender: 'Male' },
              { name: 'Ustadha Sara', role: 'Islamic Studies', exp: '2 Yrs', gender: 'Female' }
            ].map((teacher, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 shadow-lg relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-xl bg-islamic-gold/20 flex items-center justify-center shrink-0 group-hover:bg-islamic-gold/30 transition-colors">
                  <span className="text-2xl font-serif font-bold text-islamic-gold">{teacher.name[0]}</span>
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-islamic-gold transition-colors">{teacher.name}</h3>
                </div>

                <div className="flex items-center space-x-6 text-sm shrink-0">
                  <div className="flex items-center text-white/70">
                    <Star className="w-4 h-4 fill-islamic-gold text-islamic-gold mr-2" />
                    <span>{teacher.exp} Exp.</span>
                  </div>
                </div>
                
                <div className="absolute right-0 top-0 h-full w-1 bg-islamic-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Student Voice" subtitle="Hear from our global community about their learning experience." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Khan', location: 'United Kingdom', quote: 'Umm al-Qura has transformed my children\'s recitation. The teachers are incredibly patient and professional.', rating: 5 },
              { name: 'Sarah Miller', location: 'USA', quote: 'As a revert, I was nervous about starting, but my teacher made me feel so comfortable. I can now read Juz Amma fluently.', rating: 5 },
              { name: 'Ibrahim Ali', location: 'Canada', quote: 'The interactive system and flexible timings are perfect for my busy work schedule. Highly recommend the Tajweed course.', rating: 5 },
              { name: 'Aisha Rahman', location: 'Australia', quote: 'My daughter loves her classes! The digital platform is so easy to use and the progress reports keep me informed.', rating: 5 },
              { name: 'Omar Hassan', location: 'Germany', quote: 'The depth of knowledge in the Tafseer course is outstanding. It has truly enriched my understanding of the Quran.', rating: 5 },
              { name: 'Zainab B.', location: 'Norway', quote: 'Finding a female teacher with such high qualifications was a blessing. Very flexible and accommodating.', rating: 5 }
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[2rem] bg-white border border-gray-100 shadow-premium relative"
              >
                <div className="absolute top-10 right-10">
                  <MessageCircle className="w-8 h-8 text-islamic-gold/20" />
                </div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-islamic-gold text-islamic-gold" />
                  ))}
                </div>
                <p className="text-gray-600 italic text-lg mb-8">"{t.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-islamic-green/10 flex items-center justify-center font-bold text-islamic-green">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-islamic-green">{t.name}</h5>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pricing Plans --- */}
      <section id="pricing" className="py-24 bg-islamic-green/5">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Affordable Learning Plans" 
            subtitle="Quality Quranic education accessible for everyone with our transparent pricing structure."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <PricingPlan 
              title="Basic Plan" 
              price="$35" 
              classes="5" 
              duration="30" 
              features={[
                'Nazra & Basic Qaida',
                'Basic Duas',
                'Monthly Performance Report',
                'Weekend Off'
              ]} 
            />
            <PricingPlan 
              title="Standard Plan" 
              price="$55" 
              classes="5" 
              duration="30" 
              recommended={true}
              features={[
                'Quran with Tajweed',
                'Salah & Wudu Practice',
                'Memorization of Small Surahs',
                '24/7 Portal Access',
                'Family Discount Available'
              ]} 
            />
            <PricingPlan 
              title="Premium Plan" 
              price="$85" 
              classes="5" 
              duration="45" 
              features={[
                'Full Hifz Course',
                'Advanced Tajweed Rules',
                'Tafseer & Hadith Lessons',
                'Priority Support',
                'Certificate of Completion'
              ]} 
            />
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-islamic-green p-12 lg:p-16 text-white">
              <h2 className="text-4xl font-serif font-bold mb-8">Get In Touch</h2>
              <p className="text-white/70 mb-12">Have questions? We're here to help you start your spiritual journey.</p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-islamic-gold" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Call Us</div>
                    <div className="text-xl font-bold">03296838371</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-islamic-gold" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email Us</div>
                    <div className="text-xl font-bold">contact@ummalqura.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-islamic-gold" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Main Office</div>
                    <div className="text-xl font-bold">Rahim Yar Khan, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10">
                <div className="flex space-x-6">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-islamic-gold hover:border-islamic-gold transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-islamic-green/5 rounded-full flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="w-12 h-12 text-islamic-green animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-islamic-green">Start Instant Chat</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Forget long forms. Click below to message us directly on WhatsApp for instant enrollment and course details.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => window.open('https://wa.me/923296838371?text=Asalamu%20Alaikum,%20I%20am%20interested%20in%20enrolling%20in%20the%20Quran%20courses.', '_blank')}
                    className="bg-[#25D366] text-white hover:bg-[#128C7E] py-6 px-12 text-xl shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] flex items-center justify-center mx-auto w-full sm:w-auto"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" /> Message on WhatsApp
                  </Button>
                </motion.div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-6">
                  Available 24/7 for your queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-islamic-green py-20 relative overflow-hidden">
        <div className="pattern-overlay absolute inset-0 opacity-[0.05]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">
            <div className="space-y-6">
               <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-islamic-green font-bold text-xl">U</div>
                <span className="text-2xl font-serif font-bold text-white tracking-tight">
                  Umm al-<span className="text-islamic-gold">Qura</span>
                </span>
              </div>
              <p className="text-white/60 leading-relaxed">
                Empowering the Ummah with authentic Quranic knowledge through modern technology and expert guidance.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-8 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-islamic-gold" />
              </h4>
              <ul className="space-y-4 text-white/50">
                {['Home', 'About Us', 'Courses', 'Success Stories', 'Privacy Policy'].map(item => (
                  <li key={item}><a href="#" className="hover:text-islamic-gold transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-8 relative">
                Our Courses
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-islamic-gold" />
              </h4>
              <ul className="space-y-4 text-white/50">
                {['Quran for Kids', 'Tajweed Classes', 'Online Hifz', 'Arabic Language', 'Islamic Studies'].map(item => (
                  <li key={item}><a href="#" className="hover:text-islamic-gold transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-8 relative">
                Newsletter
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-islamic-gold" />
              </h4>
              <p className="text-white/50 mb-6 font-light">Subscribe for Islamic tips and academy updates.</p>
              <div className="flex p-1 bg-white/5 rounded-full border border-white/10">
                <input type="email" placeholder="Your Email" className="bg-transparent border-none focus:outline-none px-6 py-2 w-full text-white" />
                <button className="bg-islamic-gold text-islamic-green p-3 rounded-full hover:bg-white transition-colors">
                  <ChevronRight className="w-5 h-5 font-bold" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Umm al-Qura Quran Academy. All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">Inspired by Divine Guidance & Knowledge</p>
          </div>
        </div>
      </footer>

      {/* --- Floating WhatsApp Button --- */}
      <motion.a
        href="https://wa.me/923296838371"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-[70] w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] flex items-center justify-center text-white cursor-pointer"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-islamic-gold"></span>
        </span>
      </motion.a>

    </div>
  );
}

