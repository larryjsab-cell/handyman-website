import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { Project } from '../types'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true })
      .limit(3)

    if (data) {
      setProjects(data)
    }
  }

  const services = [
    {
      id: '1',
      title: 'Home Repairs',
      description: 'Expert repairs for all your home maintenance needs',
      icon: '🔧'
    },
    {
      id: '2',
      title: 'Remodeling',
      description: 'Transform your space with professional remodeling',
      icon: '🏗️'
    },
    {
      id: '3',
      title: 'Painting',
      description: 'Interior and exterior painting services',
      icon: '🎨'
    },
    {
      id: '4',
      title: 'Flooring',
      description: 'Quality flooring installation and repair',
      icon: '🪵'
    },
    {
      id: '5',
      title: 'Carpentry',
      description: 'Custom carpentry and woodwork solutions',
      icon: '🪚'
    },
    {
      id: '6',
      title: 'Electrical',
      description: 'Safe and reliable electrical services',
      icon: '⚡'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Professional Handyman & Home Improvement Services</h1>
            <p>Quality craftsmanship for all your home repair and renovation needs</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
              <Link to="/services" className="btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed and insured for your protection</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">★</div>
              <h3>Expert Team</h3>
              <p>Experienced professionals with years of expertise</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱</div>
              <h3>On-Time Service</h3>
              <p>Reliable and punctual service guaranteed</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Fair Pricing</h3>
              <p>Competitive rates with no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-subtitle">Comprehensive home improvement solutions</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <h2>Recent Projects</h2>
          <p className="section-subtitle">See our quality work in action</p>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">{project.title[0]}</div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and quote</p>
            <Link to="/contact" className="btn-primary">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
