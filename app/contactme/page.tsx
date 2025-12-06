'use client'

import { useState } from 'react'

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: '', email: '', message: '' })
        }, 5000)
      } else {
        alert(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
          <strong>Contact Me and Subscribe to Keep in Touch</strong>
        </h2>
        
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="wsite-multicol">
          <div className="wsite-multicol-table-wrap" style={{ margin: '0 -15px' }}>
            <table className="wsite-multicol-table">
              <tbody className="wsite-multicol-tbody">
                <tr className="wsite-multicol-tr">
                  <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                    <h3>Contact Form</h3>
                    {submitted ? (
                      <p>Thank you for your message! We&apos;ll get back to you soon.</p>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <label className="wsite-form-label wsite-form-fields-required-label">
                          <span className="form-required">*</span> Indicates required field
                        </label>
                        <div className="wsite-form-field wsite-name-field" style={{ margin: '5px 0' }}>
                          <label className="wsite-form-label">
                            Name <span className="form-required">*</span>
                          </label>
                          <div style={{ clear: 'both' }}></div>
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ flex: 1 }}>
                              <input
                                type="text"
                                placeholder="First"
                                className="wsite-form-input wsite-input"
                                value={formData.name.split(' ')[0] || ''}
                                onChange={(e) => {
                                  const parts = formData.name.split(' ')
                                  parts[0] = e.target.value
                                  setFormData({ ...formData, name: parts.join(' ') })
                                }}
                                required
                              />
                              <label className="wsite-form-sublabel">First</label>
                            </div>
                            <div style={{ flex: 1 }}>
                              <input
                                type="text"
                                placeholder="Last"
                                className="wsite-form-input wsite-input"
                                value={formData.name.split(' ').slice(1).join(' ') || ''}
                                onChange={(e) => {
                                  const parts = formData.name.split(' ')
                                  const first = parts[0] || ''
                                  setFormData({ ...formData, name: `${first} ${e.target.value}`.trim() })
                                }}
                                required
                              />
                              <label className="wsite-form-sublabel">Last</label>
                            </div>
                          </div>
                        </div>
                        <div className="wsite-form-field" style={{ margin: '5px 0' }}>
                          <label className="wsite-form-label" htmlFor="email">
                            Email <span className="form-required">*</span>
                          </label>
                          <div className="wsite-form-input-container">
                            <input
                              type="email"
                              id="email"
                              className="wsite-form-input wsite-input"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div className="wsite-form-field" style={{ margin: '5px 0' }}>
                          <label className="wsite-form-label" htmlFor="message">
                            Comment <span className="form-required">*</span>
                          </label>
                          <div className="wsite-form-input-container">
                            <textarea
                              id="message"
                              className="wsite-form-input wsite-input"
                              rows={5}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '10px', marginBottom: '10px' }}>
                          <button type="submit" className="wsite-button">
                            <span className="wsite-button-inner">Submit</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </td>
                  <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                    <h2 className="wsite-content-title">Subscribe to my newsletter</h2>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Newsletter subscription will be implemented'); }}>
                      <label className="wsite-form-label wsite-form-fields-required-label">
                        <span className="form-required">*</span> Indicates required field
                      </label>
                      <div className="wsite-form-field" style={{ margin: '5px 0' }}>
                        <label className="wsite-form-label" htmlFor="newsletter-email">
                          Email <span className="form-required">*</span>
                        </label>
                        <div className="wsite-form-input-container">
                          <input
                            type="email"
                            id="newsletter-email"
                            className="wsite-form-input wsite-input"
                            required
                          />
                        </div>
                      </div>
                      <div style={{ textAlign: 'left', marginTop: '10px', marginBottom: '10px' }}>
                        <button type="submit" className="wsite-button">
                          <span className="wsite-button-inner">Subscribe to Newsletter</span>
                        </button>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

