'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BookMe() {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    hours: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    outsideLA: '',
    payingForTravel: '',
    comments: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/bookme', {
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
          setFormData({
            eventType: '',
            date: '',
            hours: '',
            name: '',
            email: '',
            phone: '',
            location: '',
            outsideLA: '',
            payingForTravel: '',
            comments: '',
          })
        }, 5000)
      } else {
        alert(data.error || 'Failed to send booking request. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting booking form:', error)
      alert('Failed to send booking request. Please try again.')
    }
  }

  return (
    <div className="wsite-content">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Book Cody Cordova</h1>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>Book Me as a DJ</h2>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/codyru_orig.jpg"
            alt="CODYCORDOVA throwin' down!"
            width={800}
            height={600}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
          <div style={{ display: 'block', fontSize: '90%', marginTop: '10px' }}>
            CODYCORDOVA throwin&apos; down!
          </div>
        </div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
          <strong>Get a quote:</strong>
        </h2>

        <div className="paragraph" style={{ textAlign: 'center' }}>
          <strong>Fill out the form below and I&apos;ll get back to you as soon as possible!</strong>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        {submitted ? (
          <div className="paragraph" style={{ textAlign: 'center' }}>
            <p>Thank you for your booking request! We&apos;ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <label className="wsite-form-label wsite-form-fields-required-label" style={{ display: 'block' }}>
              <span className="form-required">*</span> Indicates required field
            </label>

            <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
              <label className="wsite-form-label" style={{ display: 'block' }}>
                What kind of event are you throwing? <span className="form-required">*</span>
              </label>
              <div className="wsite-form-radio-container" style={{ display: 'inline-block', textAlign: 'left' }}>
                {['Rave', 'House Party', 'Professional Event', 'Music Festival', 'Wedding', 'School Dance', 'Other (specify in comments)'].map((type) => (
                  <span key={type} className="form-radio-container" style={{ display: 'block', margin: '5px 0' }}>
                    <input
                      type="radio"
                      id={`event-${type}`}
                      name="eventType"
                      value={type}
                      checked={formData.eventType === type}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      required
                    />
                    <label htmlFor={`event-${type}`} style={{ marginLeft: '5px' }}>{type}</label>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
            <hr className="styled-hr" style={{ width: '100%' }} />
            <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

            <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
              <label className="wsite-form-label" style={{ display: 'block' }}>
                Is the event outside of Los Angeles? <span className="form-required">*</span>
              </label>
              <div className="wsite-form-radio-container" style={{ display: 'inline-block', textAlign: 'left' }}>
                {['Yes', 'No'].map((option) => (
                  <span key={option} className="form-radio-container" style={{ display: 'block', margin: '5px 0' }}>
                    <input
                      type="radio"
                      id={`outsideLA-${option}`}
                      name="outsideLA"
                      value={option}
                      checked={formData.outsideLA === option}
                      onChange={(e) => setFormData({ ...formData, outsideLA: e.target.value, payingForTravel: '' })}
                      required
                    />
                    <label htmlFor={`outsideLA-${option}`} style={{ marginLeft: '5px' }}>{option}</label>
                  </span>
                ))}
              </div>
            </div>

            {formData.outsideLA === 'Yes' && (
              <>
                <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
                <hr className="styled-hr" style={{ width: '100%' }} />
                <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

                <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
                  <label className="wsite-form-label" style={{ display: 'block' }}>
                    If Yes are you paying for travel? <span style={{ fontSize: '90%' }}>(*ignore if local)</span>
                  </label>
                  <div className="wsite-form-radio-container" style={{ display: 'inline-block', textAlign: 'left' }}>
                    {['Yes', 'No'].map((option) => (
                      <span key={option} className="form-radio-container" style={{ display: 'block', margin: '5px 0' }}>
                        <input
                          type="radio"
                          id={`payingForTravel-${option}`}
                          name="payingForTravel"
                          value={option}
                          checked={formData.payingForTravel === option}
                          onChange={(e) => setFormData({ ...formData, payingForTravel: e.target.value })}
                        />
                        <label htmlFor={`payingForTravel-${option}`} style={{ marginLeft: '5px' }}>{option}</label>
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
            <hr className="styled-hr" style={{ width: '100%' }} />
            <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

            <div className="wsite-multicol">
              <div className="wsite-multicol-table-wrap" style={{ margin: '0 -15px' }}>
                <table className="wsite-multicol-table">
                  <tbody className="wsite-multicol-tbody">
                    <tr className="wsite-multicol-tr">
                      <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                        <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
                          <label className="wsite-form-label" htmlFor="date" style={{ display: 'block' }}>
                            Date of Event <span className="form-required">*</span>
                          </label>
                          <input
                            type="text"
                            id="date"
                            className="wsite-form-input wsite-input"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                          />
                        </div>
                      </td>
                      <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                        <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
                          <label className="wsite-form-label" htmlFor="hours" style={{ display: 'block' }}>
                            # of hours desired <span className="form-required">*</span>
                          </label>
                          <input
                            type="text"
                            id="hours"
                            className="wsite-form-input wsite-input"
                            value={formData.hours}
                            onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                            required
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
              <label className="wsite-form-label" htmlFor="name" style={{ display: 'block' }}>
                Name <span className="form-required">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="wsite-form-input wsite-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
              <label className="wsite-form-label" htmlFor="email" style={{ display: 'block' }}>
                Email <span className="form-required">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="wsite-form-input wsite-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
              <label className="wsite-form-label" htmlFor="phone" style={{ display: 'block' }}>
                Phone Number <span className="form-required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="wsite-form-input wsite-input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
              <label className="wsite-form-label" htmlFor="location" style={{ display: 'block' }}>
                Location of Event <span className="form-required">*</span>
              </label>
              <input
                type="text"
                id="location"
                className="wsite-form-input wsite-input"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="wsite-form-field" style={{ margin: '5px 0', textAlign: 'center' }}>
              <label className="wsite-form-label" htmlFor="comments" style={{ display: 'block' }}>
                Comments
              </label>
              <textarea
                id="comments"
                className="wsite-form-input wsite-input"
                rows={5}
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>
              <button type="submit" className="wsite-button">
                <span className="wsite-button-inner">Submit</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

