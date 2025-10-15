export default function Services() {
  const services = [
    {
      id: '1',
      title: 'General Home Repairs',
      description: 'From fixing leaky faucets to patching drywall, we handle all your home repair needs with expertise and efficiency.',
      icon: '🔧',
      features: ['Plumbing repairs', 'Drywall repair', 'Door & window fixes', 'General maintenance']
    },
    {
      id: '2',
      title: 'Kitchen & Bath Remodeling',
      description: 'Transform your kitchen and bathroom spaces with our professional remodeling services.',
      icon: '🏗️',
      features: ['Cabinet installation', 'Countertop replacement', 'Tile work', 'Fixture installation']
    },
    {
      id: '3',
      title: 'Interior & Exterior Painting',
      description: 'Professional painting services to refresh and protect your home with premium quality finishes.',
      icon: '🎨',
      features: ['Interior painting', 'Exterior painting', 'Cabinet refinishing', 'Trim & molding']
    },
    {
      id: '4',
      title: 'Flooring Installation',
      description: 'Expert installation of hardwood, laminate, tile, and vinyl flooring with precision and care.',
      icon: '🪵',
      features: ['Hardwood flooring', 'Laminate installation', 'Tile flooring', 'Floor repairs']
    },
    {
      id: '5',
      title: 'Carpentry & Woodwork',
      description: 'Custom carpentry solutions including built-ins, shelving, and trim work.',
      icon: '🪚',
      features: ['Custom cabinetry', 'Built-in shelving', 'Crown molding', 'Deck construction']
    },
    {
      id: '6',
      title: 'Electrical Services',
      description: 'Safe and reliable electrical work for installations, repairs, and upgrades.',
      icon: '⚡',
      features: ['Outlet installation', 'Light fixtures', 'Ceiling fans', 'Switch repairs']
    },
    {
      id: '7',
      title: 'Plumbing Services',
      description: 'Comprehensive plumbing services for repairs, installations, and maintenance.',
      icon: '🚰',
      features: ['Faucet installation', 'Leak repairs', 'Drain cleaning', 'Toilet repairs']
    },
    {
      id: '8',
      title: 'Outdoor Projects',
      description: 'Enhance your outdoor living space with decks, patios, and landscaping features.',
      icon: '🌳',
      features: ['Deck building', 'Fence installation', 'Patio construction', 'Outdoor repairs']
    }
  ]

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive home improvement solutions for every need</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <div className="services-detail-grid">
            {services.map(service => (
              <div key={service.id} className="service-detail-card">
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Need a Custom Solution?</h2>
            <p>We offer personalized services tailored to your specific needs. Contact us to discuss your project.</p>
            <a href="/contact" className="btn-primary">Get a Free Quote</a>
          </div>
        </div>
      </section>
    </div>
  )
}
