'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import AnimatedText from '@/components/AnimatedText'
import { CheckCircle2, Mail } from 'lucide-react'

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
      <div className="container max-w-6xl">
        {/* Title */}
        <ScrollReveal direction="fade" delay={0.1}>
          <AnimatedText variant="slide" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
              Contact Me and Subscribe to Keep in Touch
            </h1>
          </AnimatedText>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ScrollReveal direction="up" delay={0.2}>
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg text-foreground">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-sm text-foreground/60">
                      <span className="text-primary">*</span> Indicates required field
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground">
                        Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-transparent border-white/40 text-foreground"
                        placeholder="Your full name"
                      />
                    </div>

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
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Comment <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-transparent border-white/40 text-foreground"
                        placeholder="Your message..."
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
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal direction="up" delay={0.3}>
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Subscribe to my newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert('Newsletter subscription will be implemented')
                  }}
                  className="space-y-6"
                >
                  <div className="text-sm text-foreground/60">
                    <span className="text-primary">*</span> Indicates required field
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newsletter-email" className="text-foreground">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      required
                      className="bg-transparent border-white/40 text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-black hover:bg-primary/90"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              </CardContent>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
