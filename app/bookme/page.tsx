'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import AnimatedText from '@/components/AnimatedText'
import { CheckCircle2 } from 'lucide-react'

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
      <div className="container max-w-4xl">
        {/* Title */}
        <ScrollReveal direction="fade" delay={0.1}>
          <AnimatedText variant="slide" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
              Book Cody Cordova
            </h1>
          </AnimatedText>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="my-8">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/codyru_orig.jpg"
                  alt="CODYCORDOVA throwin' down!"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-foreground/80 text-sm">
                CODYCORDOVA throwin&apos; down!
              </p>
            </GlassCard>
          </div>
        </ScrollReveal>

        {/* Form Section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="my-8">
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-serif text-center">
                  Get a quote
                </CardTitle>
                <p className="text-center text-foreground/80 mt-2">
                  Fill out the form below and I&apos;ll get back to you as soon as possible!
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg text-foreground">
                      Thank you for your booking request! We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-sm text-foreground/60 text-center">
                      <span className="text-primary">*</span> Indicates required field
                    </div>

                    {/* Event Type */}
                    <div className="space-y-3">
                      <Label className="text-foreground">
                        What kind of event are you throwing? <span className="text-primary">*</span>
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Rave', 'House Party', 'Professional Event', 'Music Festival', 'Wedding', 'School Dance', 'Other (specify in comments)'].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={`event-${type}`}
                              name="eventType"
                              value={type}
                              checked={formData.eventType === type}
                              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                              required
                              className="w-4 h-4 text-primary"
                            />
                            <Label htmlFor={`event-${type}`} className="text-foreground cursor-pointer">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outside LA */}
                    <div className="space-y-3">
                      <Label className="text-foreground">
                        Is the event outside of Los Angeles? <span className="text-primary">*</span>
                      </Label>
                      <div className="flex gap-6">
                        {['Yes', 'No'].map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={`outsideLA-${option}`}
                              name="outsideLA"
                              value={option}
                              checked={formData.outsideLA === option}
                              onChange={(e) => setFormData({ ...formData, outsideLA: e.target.value, payingForTravel: '' })}
                              required
                              className="w-4 h-4 text-primary"
                            />
                            <Label htmlFor={`outsideLA-${option}`} className="text-foreground cursor-pointer">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Travel Payment */}
                    {formData.outsideLA === 'Yes' && (
                      <div className="space-y-3">
                        <Label className="text-foreground">
                          If Yes are you paying for travel? <span className="text-sm text-foreground/60">(*ignore if local)</span>
                        </Label>
                        <div className="flex gap-6">
                          {['Yes', 'No'].map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id={`payingForTravel-${option}`}
                                name="payingForTravel"
                                value={option}
                                checked={formData.payingForTravel === option}
                                onChange={(e) => setFormData({ ...formData, payingForTravel: e.target.value })}
                                className="w-4 h-4 text-primary"
                              />
                              <Label htmlFor={`payingForTravel-${option}`} className="text-foreground cursor-pointer">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Date and Hours */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-foreground">
                          Date of Event <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="date"
                          type="text"
                          placeholder="MM/DD/YYYY"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required
                          className="bg-transparent border-white/40 text-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hours" className="text-foreground">
                          # of hours desired <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="hours"
                          type="text"
                          placeholder="e.g., 4"
                          value={formData.hours}
                          onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                          required
                          className="bg-transparent border-white/40 text-foreground"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-transparent border-white/40 text-foreground"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-transparent border-white/40 text-foreground"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-transparent border-white/40 text-foreground"
                      />
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-foreground">
                        Location of Event <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                        className="bg-transparent border-white/40 text-foreground"
                      />
                    </div>

                    {/* Comments */}
                    <div className="space-y-2">
                      <Label htmlFor="comments" className="text-foreground">
                        Comments
                      </Label>
                      <Textarea
                        id="comments"
                        rows={5}
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        className="bg-transparent border-white/40 text-foreground"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-black hover:bg-primary/90"
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </CardContent>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
