
"use client";

import Image from "next/image";
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
import { GraduationCap, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const formSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Age is required"),
  parentName: z.string().min(2, "Parent name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  level: z.string(),
  notes: z.string().optional(),
});

export default function EnrollPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Enrollment Submitted!",
      description: "We've received your inquiry for " + values.studentName + ". We'll contact you at " + values.email + " soon.",
    });
    form.reset();
  }  

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary py-24 mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-affil" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-affil)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-black text-primary-foreground mb-6">{t('enroll.title')}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-medium">{t('enroll.subtitle')}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-muted p-6 rounded-2xl space-y-4">
              <div className="flex items-center space-x-3 text-secondary">
                <GraduationCap className="h-6 w-6" />
                <h3 className="font-bold">{t('enroll.nextSemester.title')}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{t('enroll.nextSemester.desc')}</p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-2xl space-y-4 border border-secondary/20">
              <div className="flex items-center space-x-3 text-secondary">
                <Info className="h-6 w-6" />
                <h3 className="font-bold">{t('enroll.requirements.title')}</h3>
              </div>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4">
                <li>{t('enroll.requirements.age')}</li>
                <li>{t('enroll.requirements.interest')}</li>
                <li>{t('enroll.requirements.weekend')}</li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border">
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

                <Button type="submit" className="w-full bg-primary text-primary-foreground font-black py-6 text-lg">
                  {t('enroll.form.submit')}
                </Button>
                <p className="text-center text-xs text-muted-foreground italic">
                  {t('enroll.form.disclaimer')}
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
