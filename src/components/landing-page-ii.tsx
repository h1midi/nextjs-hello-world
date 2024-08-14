/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MkjZ2OaPfmV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import React, { useRef, useEffect, useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import {useTranslations} from 'next-intl';
import Link from "next/link"
import LocalSwitcher from './local-switcher';
import Image from 'next/image';
export function LandingPageII() {
const t = useTranslations('HomePage');
const contactRef =  useRef<null | HTMLDivElement>(null); 
const scriptContainerRef =  useRef(null); 
const scriptContainerRef2 =  useRef(null); 
const [isScriptLoaded, setIsScriptLoaded] = useState(false);
const [isButtonLoaded, setIsButtonLoaded] = useState(false);

useEffect(() => {
  if (!isScriptLoaded && scriptContainerRef.current) {
    const link = document.createElement('link');
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      setIsScriptLoaded(true);
    };
    document.body.appendChild(script);
  }
}, [isScriptLoaded]);

useEffect(() => {
  if (isScriptLoaded && !isButtonLoaded && scriptContainerRef.current) {
    if (window.calendar && window.calendar.schedulingButton) {
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1JeBe5ZURLtafzgUCaoa1SYkMsikvRn30fer7hswHAWW10BQrc5PKOihhb5G6OoYRJ08ZoHNlV?gv=true',
        color: '#FFFFFF',
        label: t('cta-1'),
        target: scriptContainerRef.current,
      });
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1JeBe5ZURLtafzgUCaoa1SYkMsikvRn30fer7hswHAWW10BQrc5PKOihhb5G6OoYRJ08ZoHNlV?gv=true',
        color: '#FFFFFF',
        label: t('cta-2'),
        target: scriptContainerRef2.current,
      });
      setIsButtonLoaded(true);
    }
  }
}, [t,isScriptLoaded, isButtonLoaded]);

const scrollToContact = () => {
  contactRef.current?.scrollIntoView({ behavior: 'smooth' });
};
return (
    <div className="w-full">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center">
        <Image
            src="/logo.png"
            alt="Logo"
            className="h-8"
          />
        </div>
        <div className="flex items-center space-x-4">
        <LocalSwitcher />
          <Button variant="outline" onClick={scrollToContact}>{t('contact')}</Button>
          </div>
      </header>
      <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold">{t('headline')}</h1>
          <p className="mt-4 text-lg">
          {t('sub-headline')}
          </p>
          <div className="mt-6 " ref={scriptContainerRef}></div>
        </div>
        <div className="mt-8 max-w-4xl">
          <Image
            src="/teaching.png"
            width={1280}
            height={720}
            alt="Hero"
            className="w-full rounded-lg"
            style={{ aspectRatio: "1280/720", objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center">{t('offer')}</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BookIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">
              {t('offer-1-title')}
              </h3>
              <p className="mt-2 text-muted-foreground">
              {t('offer-1-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4"> {t('offer-2-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('offer-2-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4"> {t('offer-3-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('offer-3-desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center"> {t('features')}</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4"> {t('feature-1-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('feature-1-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('feature-2-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('feature-2-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('feature-3-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('feature-3-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('feature-4-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('feature-4-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('feature-5-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('feature-5-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('feature-6-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('feature-6-desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center">{t('who-for')}</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <UsersIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('who-for-1-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('who-for-1-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('who-for-2-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('who-for-2-desc')}
              </p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <SchoolIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('who-for-3-title')}</h3>
              <p className="mt-2 text-muted-foreground">
              {t('who-for-3-desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 bg-muted">
        <h2 className="text-3xl font-bold text-center">{t('testimonials')}</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow p-6">
            <blockquote>
              <p className="text-lg font-semibold">
              &quot;{t('testimonial-1')}&quot;
              </p>
              <div className="mt-4 flex items-center">
                <Avatar>
                  {/* <AvatarImage src="/placeholder-user.jpg" /> */}
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-muted-foreground">Founder, Acme Training</div>
                </div>
              </div>
            </blockquote>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow p-6">
            <blockquote>
              <p className="text-lg font-semibold">
              &quot;{t('testimonial-2')}&quot;
              </p>
              <div className="mt-4 flex items-center">
                <Avatar>
                  {/* <AvatarImage src="/placeholder-user.jpg" /> */}
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-semibold">Jane Smith</div>
                  <div className="text-muted-foreground">CEO, XYZ Consulting</div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center">{t('how-works')}</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-4">
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <UserIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('how-works-1-title')}</h3>
              <p className="mt-2 text-muted-foreground">{t('how-works-1-desc')}</p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BriefcaseIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('how-works-2-title')}</h3>
              <p className="mt-2 text-muted-foreground">{t('how-works-2-desc')}</p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <BookIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('how-works-3-title')}</h3>
              <p className="mt-2 text-muted-foreground">{t('how-works-3-desc')}</p>
            </div>
          </div>
          <div className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4">
              <DollarSignIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{t('how-works-4-title')}</h3>
              <p className="mt-2 text-muted-foreground">{t('how-works-4-desc')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 bg-muted">
        <h2 className="text-3xl font-bold text-center">{t('faq')}</h2>
        <ul className="mt-8 space-y-4">
          <li>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between p-4 cursor-pointer">
                <h3 className="text-xl font-semibold">{t('faq-question-1')}</h3>
                <ChevronDownIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-muted-foreground">
                {t('faq-answer-1')}
                </p>
              </CollapsibleContent>
            </Collapsible>
          </li>
          <li>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between p-4 cursor-pointer">
                <h3 className="text-xl font-semibold">{t('faq-question-2')}</h3>
                <ChevronDownIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-muted-foreground">
                {t('faq-answer-2')}
                </p>
              </CollapsibleContent>
            </Collapsible>
          </li>
          <li>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between p-4 cursor-pointer">
                <h3 className="text-xl font-semibold">{t('faq-question-3')}</h3>
                <ChevronDownIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-muted-foreground">
                {t('faq-answer-3')}
                </p>
              </CollapsibleContent>
            </Collapsible>
          </li>
          <li>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between p-4 cursor-pointer">
                <h3 className="text-xl font-semibold">{t('faq-question-4')}</h3>
                <ChevronDownIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-muted-foreground">
                {t('faq-answer-4')}
                </p>
              </CollapsibleContent>
            </Collapsible>
          </li>
        </ul>
      </section>
      <section className="p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white h-[400px] flex items-center justify-center">
        <div className="flex justify-center">
        <div className="mt-6 " ref={scriptContainerRef2}></div>
        </div>
      </section>
      <section className="p-8" ref={contactRef} id="contact">
        <h2 className="text-3xl font-bold text-center">{t('contact')}</h2>
        <form className="max-w-xl mx-auto mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">{t('full-name')}</Label>
            <Input id="full-name" placeholder={t('full-name-placeholder')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input id="email" placeholder={t('email-placeholder')} type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t('message')}</Label>
            <Textarea id="message" placeholder={t('message-placeholder')} className="min-h-[100px]" />
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">{t('send')}</Button>
        </form>
      </section>
      <footer className="p-4 bg-white shadow-md">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">{t('rights')}</span>
          <div className="flex space-x-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              <FacebookIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              <InstagramIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              <YoutubeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }


  function YoutubeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }
  
  function GlobeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  }
  
function ChevronDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}