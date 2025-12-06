import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { eventType, date, hours, name, email, phone, location, outsideLA, payingForTravel, comments } = body

    // Validate required fields
    if (!eventType || !date || !hours || !name || !email || !phone || !location) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      )
    }

    // Initialize Resend only when needed (lazy initialization)
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Format email content
    const emailContent = `
New Booking Request

Event Details:
- Event Type: ${eventType}
- Date: ${date}
- Hours: ${hours}
- Location: ${location}
- Outside Los Angeles: ${outsideLA || 'Not specified'}
${outsideLA === 'Yes' ? `- Paying for Travel: ${payingForTravel || 'Not specified'}` : ''}

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

${comments ? `Comments:\n${comments}` : 'No additional comments.'}

---
This booking request was sent from the Book Me form on codycordova.com
    `.trim()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Booking Form <noreply@codycordova.com>',
      to: ['codycordova96@gmail.com'],
      replyTo: email,
      subject: 'New Booking Request',
      text: emailContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send booking request. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Your booking request has been sent!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing booking request:', error)
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again.' },
      { status: 500 }
    )
  }
}

