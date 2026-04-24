
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState, useCallback } from "react";
import { submitContactForm } from "@/app/actions/contact-action";
import { ReCaptchaProvider } from "@/components/providers/ReCaptchaProvider";
import { contactFaqItems } from "@/translations/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ExecuteRecaptcha = ((action?: string) => Promise<string>) | undefined;

function ContactPageContent({ executeRecaptcha, recaptchaEnabled }: { executeRecaptcha: ExecuteRecaptcha; recaptchaEnabled: boolean }) {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const faqItems = contactFaqItems[language];

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof contactSchema>) => {
    if (recaptchaEnabled && !executeRecaptcha) {
      toast({
        variant: "destructive",
        title: "Security Error",
        description: "Safety check (reCAPTCHA) is still loading. Please wait a second and try again.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const token = recaptchaEnabled ? await executeRecaptcha?.("LOGIN") : "";
      if (recaptchaEnabled && !token) {
        throw new Error("Failed to generate security token.");
      }

      const result = await submitContactForm(values, token);

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We've received your message and will get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "An unexpected error occurred. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha, form, recaptchaEnabled, toast]);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary py-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-contact" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-contact)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-[35px] md:text-5xl font-black text-primary-foreground mb-4">{t('contact.title')}</h1>
            <p className="text-[23px] md:text-lg text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('contact.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <ScrollReveal animation="slide-in-left">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold">{t('contact.info.title')}</h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.info.desc')}
                </p>
              </div>

              <div className="space-y-8 mt-12">
                {[
                  { icon: MapPin, title: t('contact.info.location'), content: "12 Belmont Avenue, New Malden\nLondon KT3 6QD" },
                  { icon: Phone, title: t('contact.info.call'), content: "+44 74597 13276 (UK/WhatsApp)\n+44 7424 566744 (UK)\n+91 86829 01099 (India)" },
                  { icon: Mail, title: t('contact.info.email'), content: "globaltamilschool@gmail.com" },
                  { icon: Clock, title: t('contact.info.hours'), content: t('contact.info.hours.days') }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Embedded Google Map */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="aspect-video w-full bg-muted rounded-2xl relative overflow-hidden border shadow-sm">
                 <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.17255938885!2d-0.2523292233939527!3d51.40050861783321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760920d0f41369%3A0xe47f63126f56860!2s12%20Belmont%20Ave%2C%20New%20Malden%20KT3%206QD!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Global Tamil School Location"
                  className="absolute inset-0 grayscale contrast-125"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="slide-in-right">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.name')}</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.email')}</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.subject')}</FormLabel>
                          <FormControl>
                            <Input placeholder="..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.message')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('contact.form.placeholder.message')} 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground font-black py-6 text-lg hover:shadow-lg transition-shadow"
                      disabled={isSubmitting || (recaptchaEnabled && !executeRecaptcha)}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : recaptchaEnabled && !executeRecaptcha ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Initializing Security...
                        </>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground mt-4">
                      This site is protected by reCAPTCHA Enterprise and the Google{' '}
                      <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{' '}
                      <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
                    </p>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-24">
          <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-black">{t('contact.faq.title')}</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
              {t('contact.faq.subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={120}>
            <div className="max-w-4xl mx-auto rounded-3xl border border-primary/10 bg-card p-6 md:p-8 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}

function ContactPageContentWithRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  return <ContactPageContent executeRecaptcha={executeRecaptcha} recaptchaEnabled={true} />;
}

export default function ContactPage() {
  const hasRecaptchaKey = Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  if (!hasRecaptchaKey) {
    return <ContactPageContent executeRecaptcha={undefined} recaptchaEnabled={false} />;
  }

  return (
    <ReCaptchaProvider>
      <ContactPageContentWithRecaptcha />
    </ReCaptchaProvider>
  );
}

