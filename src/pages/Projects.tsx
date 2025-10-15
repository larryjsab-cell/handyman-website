import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { Project } from '../types'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjects()
  }, [filter])

  const loadProjects = async () => {
    setLoading(true)
    let query = supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true })

    if (filter !== 'all') {
      query = query.eq('category', filter)
    }

    const { data } = await query

    if (data) {
      setProjects(data)
    }
    setLoading(false)
  }

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'remodeling', label: 'Remodeling' },
    { value: 'construction', label: 'Construction' },
    { value: 'painting', label: 'Painting' },
    { value: 'flooring', label: 'Flooring' },
    { value: 'repairs', label: 'Repairs' }
  ]

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of completed work</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="projects-filter">
            {categories.map(category => (
              <button
                key={category.value}
                className={`filter-btn ${filter === category.value ? 'active' : ''}`}
                onClick={() => setFilter(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading">Loading projects...</div>
          ) : (
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
          )}

          {!loading && projects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
