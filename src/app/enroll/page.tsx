
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Info, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState, useCallback } from "react";
import { submitEnrollment } from "@/app/actions/enroll-action";
import { ReCaptchaProvider } from "@/components/providers/ReCaptchaProvider";

const formSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Age is required"),
  parentName: z.string().min(2, "Parent name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  level: z.string(),
  notes: z.string().optional(),
});

type ExecuteRecaptcha = ((action?: string) => Promise<string>) | undefined;

function EnrollPageContent({ executeRecaptcha, recaptchaEnabled }: { executeRecaptcha: ExecuteRecaptcha; recaptchaEnabled: boolean }) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      age: "",
      parentName: "",
      email: "",
      phone: "",
      level: "beginner",
      notes: "",
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
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

      const result = await submitEnrollment(values, token);

      if (result.success) {
        toast({
          title: "Enrollment Submitted!",
          description: `We've received your inquiry for ${values.studentName}. A confirmation has been sent to our administration.`,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: result.error || "Failed to process enrollment. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "An unexpected error occurred. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha, form, recaptchaEnabled, toast]);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary py-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-enroll" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-enroll)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-2xl md:text-4xl font-black text-primary-foreground mb-2">{t('enroll.title')}</h1>
            <p className="text-base text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('enroll.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <ScrollReveal animation="slide-in-left">
              <div className="bg-muted p-6 rounded-2xl space-y-4">
                <div className="flex items-center space-x-3 text-secondary">
                  <GraduationCap className="h-6 w-6" />
                  <h3 className="font-bold">{t('enroll.nextSemester.title')}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{t('enroll.nextSemester.desc')}</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-2xl space-y-4 border border-secondary/20 mt-8">
                <div className="flex items-center space-x-3 text-secondary">
                  <Info className="h-6 w-6" />
                  <h3 className="font-bold">{t('enroll.requirements.title')}</h3>
                </div>
                <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4">
                  <li>{t('enroll.requirements.point1')}</li>
                  <li>{t('enroll.requirements.point2')}</li>
                  <li>{t('enroll.requirements.point3')}</li>
                  <li>{t('enroll.requirements.point4')}</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <ScrollReveal animation="slide-in-right">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="studentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('enroll.form.studentName')}</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('enroll.form.age')}</FormLabel>
                            <FormControl>
                              <Input placeholder="8" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('enroll.form.parentName')}</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('enroll.form.email')}</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('enroll.form.phone')}</FormLabel>
                            <FormControl>
                              <Input placeholder="+44 XXXXXXXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('enroll.form.level')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">{t('enroll.form.level.beginner')}</SelectItem>
                              <SelectItem value="intermediate">{t('enroll.form.level.intermediate')}</SelectItem>
                              <SelectItem value="advanced">{t('enroll.form.level.advanced')}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {t('enroll.form.level.desc')}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('enroll.form.notes')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="..." 
                              className="min-h-[100px]"
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
                          Processing...
                        </>
                      ) : recaptchaEnabled && !executeRecaptcha ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Initializing Security...
                        </>
                      ) : (
                        t('enroll.form.submit')
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground italic mt-4">
                      {t('enroll.form.disclaimer')}
                    </p>
                    <p className="text-[10px] text-center text-muted-foreground mt-2">
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
      </div>
    </div>
  );
}

function EnrollPageContentWithRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  return <EnrollPageContent executeRecaptcha={executeRecaptcha} recaptchaEnabled={true} />;
}

export default function EnrollPage() {
  const hasRecaptchaKey = Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  if (!hasRecaptchaKey) {
    return <EnrollPageContent executeRecaptcha={undefined} recaptchaEnabled={false} />;
  }

  return (
    <ReCaptchaProvider>
      <EnrollPageContentWithRecaptcha />
    </ReCaptchaProvider>
  );
}

