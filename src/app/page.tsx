"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Reviews",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/restaurant-logo-food-business-template-branding-design-vector_53876-154130.jpg"
      logoAlt="Delfin Restaurant Logo"
      brandName="Delfin"
      button={{
        text: "Make a Reservation",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain"}}
      title="Experience Culinary Excellence at Delfin"
      description="Indulge in an unforgettable dining journey with exquisite dishes, impeccable service, and a warm, inviting atmosphere. Delfin combines tradition with innovation for a unique taste experience."
      tag="Your Premier Dining Destination"
      buttons={[
        {
          text: "View Our Menu",          href: "#menu"},
        {
          text: "Make a Reservation",          href: "#contact"},
      ]}
      buttonAnimation="opacity"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-young-woman-sitting-modern-cafe_171337-17121.jpg",          imageAlt: "upscale restaurant interior dining table"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-food-concept_23-2148510924.jpg",          imageAlt: "chef plating gourmet dish close-up"}
      ]}
      mediaAnimation="slide-up"
      rating={4.2}
      ratingText="(471 Reviews)"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Delfin: A Taste of Perfection"
      description={[
        "Nestled in the heart of Tetovo, Delfin has been a cherished culinary landmark, offering a blend of traditional flavors and modern dining. Our commitment to quality ingredients, creative dishes, and exceptional service sets us apart.",        "We pride ourselves on creating a memorable experience for every guest, whether you're joining us for a family dinner, a romantic evening, or a special celebration. Discover the passion behind every plate at Delfin."]}
      buttons={[
        {
          text: "Our Story"},
      ]}
      buttonAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "outdoor-seating",          title: "Delightful Outdoor Seating",          subtitle: "Enjoy your meal under the stars or in the warm daylight on our charming patio.",          category: "Experience",          value: "Comfort & Ambiance",          buttons: [
            {
              text: "View Gallery"},
          ],
        },
        {
          id: "great-cocktails",          title: "Exquisite Cocktail Selection",          subtitle: "Our expert mixologists craft the perfect drinks to complement your dining experience.",          category: "Drinks",          value: "Craft & Flavor",          buttons: [
            {
              text: "View Bar Menu"},
          ],
        },
        {
          id: "kids-menu",          title: "Thoughtful Kids' Menu",          subtitle: "Delicious and healthy options designed to please our younger guests.",          category: "Family",          value: "Happy Children",          buttons: [
            {
              text: "Explore Kids Meals"},
          ],
        },
      ]}
      title="What Makes Delfin Special?"
      description="From our inviting ambiance to our carefully curated menu, every detail is designed for your enjoyment."
      tag="Our Unique Offerings"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "menu-1",          brand: "Appetizers",          name: "Macedonian Appetizer Platter",          price: "MKD 550",          rating: 4.7,
          reviewCount: "150 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-deliciuos-food_23-2148782062.jpg",          imageAlt: "Traditional Macedonian appetizer platter"},
        {
          id: "menu-2",          brand: "Appetizers",          name: "Homemade Tavche Gravche",          price: "MKD 420",          rating: 4.5,
          reviewCount: "110 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/bean-soup-ceramic-bowl_23-2147775586.jpg",          imageAlt: "Traditional Macedonian baked beans"},
        {
          id: "menu-3",          brand: "Salads",          name: "Shopska Salad",          price: "MKD 390",          rating: 4.6,
          reviewCount: "180 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/salad_140725-103.jpg",          imageAlt: "Fresh Shopska Salad with sirene cheese"},
        {
          id: "menu-4",          brand: "Fish & Seafood",          name: "Grilled Ohrid Trout",          price: "MKD 1200",          rating: 4.9,
          reviewCount: "230 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/fried-fish-served-with-potatoes-tomatoes-lemon-slice-sauce_140725-7844.jpg",          imageAlt: "Grilled Ohrid Trout with vegetables"},
        {
          id: "menu-5",          brand: "Meat Dishes",          name: "Delfin Mixed Grill",          price: "MKD 1400",          rating: 4.8,
          reviewCount: "200 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-vegetables-table_140725-4690.jpg",          imageAlt: "Delfin's generous mixed grilled meat platter"},
        {
          id: "menu-6",          brand: "Meat Dishes",          name: "Veshchali (Stuffed Pork Fillet)",          price: "MKD 1150",          rating: 4.7,
          reviewCount: "140 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-tomato-slices-greens-sauce-rosemary-sprig_140725-8549.jpg",          imageAlt: "Grilled Veshchali (stuffed pork fillet)"},
        {
          id: "menu-7",          brand: "Pasta & Risotto",          name: "Pasta Carbonara",          price: "MKD 680",          rating: 4.4,
          reviewCount: "90 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-spaghetti-served-with-bacon-cheese_23-2148566418.jpg",          imageAlt: "Creamy Pasta Carbonara with crispy bacon"},
        {
          id: "menu-8",          brand: "Desserts",          name: "Baklava with Walnuts",          price: "MKD 300",          rating: 4.6,
          reviewCount: "130 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-plate-with-baklava_23-2148464332.jpg",          imageAlt: "Traditional Baklava with chopped walnuts"},
        {
          id: "menu-9",          brand: "Desserts",          name: "Trilece (Three Milk Cake)",          price: "MKD 350",          rating: 4.5,
          reviewCount: "100 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cheesecake-slice-berries_23-2148782067.jpg",          imageAlt: "Sweet and creamy Trilece (Three Milk Cake)"}
      ]}
      title="Delfin's Full Culinary Menu"
      description="Explore a rich selection of Macedonian traditional dishes, international favorites, and delightful desserts, crafted with passion and the finest ingredients."
      tag="Our Extensive Offerings"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Elena P.",          role: "Regular Patron",          company: "Local Foodie",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-talking-phone-coffee-shop_273609-2803.jpg",          videoAriaLabel: "Elena P. testimonial video"},
        {
          id: "2",          name: "Marko K.",          role: "Gourmet Enthusiast",          company: "Tetovo Reviews",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-young-man-with-table-happy-expression_1194-4591.jpg",          videoAriaLabel: "Marko K. testimonial video"},
        {
          id: "3",          name: "Sophia G.",          role: "Family Visitor",          company: "Traveler's Choice",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-friends-eating-pizza_23-2149872397.jpg",          videoAriaLabel: "Sophia G. testimonial video"},
        {
          id: "4",          name: "Aleksandar M.",          role: "Chef & Critic",          company: "Culinary Scene",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/father-funny-son-tasting-dish_23-2148351766.jpg",          videoAriaLabel: "Aleksandar M. testimonial video"},
        {
          id: "5",          name: "Isabella R.",          role: "Cocktail Lover",          company: "Nightlife Explorer",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-girl-with-food_23-2148972772.jpg",          videoAriaLabel: "Isabella R. testimonial video"},
      ]}
      kpiItems={[
        {
          value: "4.2/5",          label: "Average Rating"},
        {
          value: "471+",          label: "Happy Reviews"},
        {
          value: "10+",          label: "Years in Business"},
      ]}
      title="What Our Guests Say"
      description="Don't just take our word for it – hear from our satisfied customers who have experienced the Delfin difference."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",          value: "4.2",          title: "Average Google Rating",          description: "Reflecting consistent quality and customer satisfaction.",          icon: Star,
        },
        {
          id: "metric-2",          value: "471+",          title: "Satisfied Reviews",          description: "A growing community of happy diners trust Delfin for exceptional experiences.",          icon: Users,
        },
        {
          id: "metric-3",          value: "15+",          title: "Years of Culinary Excellence",          description: "Proudly serving Tetovo with authentic flavors and innovative dishes since establishment.",          icon: Award,
        },
      ]}
      title="Delfin at a Glance"
      description="Our journey and achievements are a testament to our dedication to culinary excellence and guest satisfaction."
      tag="Our Impact & Legacy"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "How do I make a reservation?",          content: "Reservations can be made directly on our website through the contact form, by calling us at 044 339 125, or by visiting us in person. We recommend booking in advance, especially for weekend evenings."},
        {
          id: "faq-2",          title: "Do you offer vegetarian or vegan options?",          content: "Yes, our menu includes a variety of vegetarian and vegan dishes. Please inform your server about any dietary restrictions or preferences, and our chefs will be happy to accommodate."},
        {
          id: "faq-3",          title: "What are your operating hours?",          content: "Delfin is open daily from 8 AM to 11 PM. Our kitchen closes one hour before the restaurant closes. Special holiday hours may apply, please check our social media for updates."},
        {
          id: "faq-4",          title: "Do you have outdoor seating?",          content: "Yes, we offer charming outdoor seating perfect for enjoying the weather. Outdoor tables are available on a first-come, first-served basis, or can be reserved by special request."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-smiling-waiter-using-digital-tablet-while-communicating-with-couple-outdoor-cafe_637285-557.jpg"
      imageAlt="Restaurant host greeting guests at the entrance"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Frequently Asked Questions"
      description="Find quick answers to common inquiries about reservations, menu, and special requests."
      tag="Got Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Book Your Table"
      title="Make a Reservation"
      description="Planning a visit? Secure your table at Delfin for an exquisite dining experience. Fill out the form below or call us directly."
      inputPlaceholder="Your Email Address"
      buttonText="Send Reservation Request"
      termsText="By submitting, you agree to our booking policies and privacy terms."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/decorative-light-bulbs-wooden-poles-mountainous-area_169016-25422.jpg"
      imageAlt="Outdoor seating area of Delfin restaurant"
      logoSrc="http://img.b2bpic.net/free-vector/restaurant-logo-food-business-template-branding-design-vector_53876-154130.jpg"
      logoAlt="Delfin Restaurant Logo"
      logoText="Delfin"
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Our Menu",              href: "#menu"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Reviews",              href: "#testimonials"},
            {
              label: "FAQs",              href: "#faq"},
          ],
        },
        {
          title: "Visit Us",          items: [
            {
              label: "2X5F+FF4, Marshal Tito, Tetovo 1220",              href: "https://maps.app.goo.gl/example"},
            {
              label: "+389 44 339 125",              href: "tel:+38944339125"},
            {
              label: "delfin@example.com",              href: "mailto:delfin@example.com"},
          ],
        },
        {
          title: "Hours",          items: [
            {
              label: "Monday - Sunday",              href: "#"},
            {
              label: "8:00 AM - 11:00 PM",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Delfin. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}