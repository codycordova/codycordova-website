'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/CODYCORDOVAmusic',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: 'http://twitter.com/realcodycordova',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: 'http://instagram.com/realcodycordova',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cody-cordova-499642b6/',
      icon: Linkedin,
    },
  ]

  return (
    <footer className="wsite-footer">
      <div className="container">
        <Card className="bg-black/40 backdrop-blur-md border-white/10">
          <CardContent className="pt-6">
            <div className="footer-content">
              <p className="text-foreground mb-4">
                &copy; {currentYear} CODY CORDOVA. All rights reserved.
              </p>
              
              <div className="footer-links mb-6">
                <Link 
                  href="/about" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/contactme" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  href="/affiliates" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Affiliates
                </Link>
              </div>

              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  )
}
