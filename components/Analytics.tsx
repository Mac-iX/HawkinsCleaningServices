"use client"

import { useEffect } from "react"
import Script from "next/script"

export function Analytics() {
  useEffect(() => {
    // Track lead conversion events
    const trackConversion = (type: string) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
          event_category: "lead",
          event_label: type,
          value: 1,
        })
      }
    }

    // Track phone calls
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
    phoneLinks.forEach((link) => {
      link.addEventListener("click", () => trackConversion("phone_call"))
    })

    // Track SMS clicks
    const smsLinks = document.querySelectorAll('a[href^="sms:"]')
    smsLinks.forEach((link) => {
      link.addEventListener("click", () => trackConversion("sms"))
    })

    // Track calendar bookings
    const calendarLinks = document.querySelectorAll('a[href*="calendly"]')
    calendarLinks.forEach((link) => {
      link.addEventListener("click", () => trackConversion("calendar"))
    })

    return () => {
      // Cleanup event listeners
      phoneLinks.forEach((link) => {
        link.removeEventListener("click", () => trackConversion("phone_call"))
      })
      smsLinks.forEach((link) => {
        link.removeEventListener("click", () => trackConversion("sms"))
      })
      calendarLinks.forEach((link) => {
        link.removeEventListener("click", () => trackConversion("calendar"))
      })
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MEASUREMENT_ID');
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  )
}
