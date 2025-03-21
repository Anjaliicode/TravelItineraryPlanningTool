import React, { useState, useEffect } from 'react';
import "../styles/Homepage.css";

const TravelItineraryPlanning = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: '1',
    interests: []
  });

  const destinations = [
    {
      image: "/api/placeholder/1200/600",
      title: "Santorini, Greece",
      description: "Experience breathtaking sunsets over the Aegean Sea"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Kyoto, Japan",
      description: "Discover ancient temples amid stunning cherry blossoms"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Machu Picchu, Peru",
      description: "Explore the mysteries of this ancient Incan citadel"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Serengeti, Tanzania",
      description: "Witness the majesty of wildlife on an unforgettable safari"
    }
  ];

  const interests = [
    "Adventure", "Relaxation", "Culture", "Food & Dining", 
    "Nature", "History", "Shopping", "Photography"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleInterestChange = (interest) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(item => item !== interest)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    alert('Your travel itinerary request has been submitted!');
  };

  return (
    <div className="travel-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">TravelItinerary</span>
          <span className="logo-icon">✈️</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-auth">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-signup">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <div className="carousel">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={destination.image} alt={destination.title} />
              <div className="slide-content">
                <h2>{destination.title}</h2>
                <p>{destination.description}</p>
              </div>
            </div>
          ))}
          <div className="carousel-dots">
            {destinations.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="hero-overlay">
          <h1 className="hero-title">Plan Your Dream Journey</h1>
          <p className="hero-subtitle">Personalized travel itineraries tailored to your preferences</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-container">
          <h2>Create Your Custom Travel Itinerary</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Where do you want to go?</label>
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                value={formData.destination}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Number of Travelers</label>
              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
                <option value="10+">10+</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>What are you interested in?</label>
              <div className="interests-container">
                {interests.map(interest => (
                  <div key={interest} className="interest-item">
                    <input
                      type="checkbox"
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    <label htmlFor={interest}>{interest}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <button type="submit" className="submit-btn">Create My Itinerary</button>
          </form>
        </div>

        <div className="form-image">
          <img src="/api/placeholder/600/800" alt="Travel planning" />
          <div className="image-caption">
            <p>Let us handle the details while you focus on making memories</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Travel Planner?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Personalized Itineraries</h3>
            <p>Custom travel plans based on your preferences and interests</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Budget Friendly</h3>
            <p>Options for every budget without compromising on experiences</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Flexible Planning</h3>
            <p>Easily modify your plans as your travel needs change</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Local Insights</h3>
            <p>Discover hidden gems and authentic experiences</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TravelItinerary</h3>
            <p>Making travel planning simple and enjoyable since 2025</p>
            <div className="social-icons">
              <a href="#" className="social-icon">📱</a>
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📸</a>
              <a href="#" className="social-icon">🐦</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#blog">Travel Blog</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: hello@travelitinerary.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Voyage Street, Travelville</p>
          </div>
          
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for travel tips and exclusive offers</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 TravelItinerary Planning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TravelItineraryPlanning;