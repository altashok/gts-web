"use client";

import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/context/LanguageContext";
import { CalendarDays, MapPin, Clock3 } from "lucide-react";

type EventItem = {
  id: string;
  date: string;
  dateValue: string;
  title: string;
  description: string;
  location: string;
  time: string;
  image: string;
};

export default function EventsPage() {
  const { t } = useLanguage();
  const events = (t("events.items") as EventItem[]) || [];
  const sortedEvents = [...events].sort((a, b) =>
    new Date(`${b.dateValue}T00:00:00`).getTime() - new Date(`${a.dateValue}T00:00:00`).getTime()
  );
  const eventDates = sortedEvents
    .map((event) => new Date(`${event.dateValue}T00:00:00`))
    .filter((date) => !Number.isNaN(date.getTime()));
  const firstEventMonth = eventDates.length
    ? new Date(eventDates.reduce((min, date) => (date < min ? date : min), eventDates[0]))
    : new Date();
  firstEventMonth.setDate(1);
  const lastEventMonth = eventDates.length
    ? new Date(eventDates.reduce((max, date) => (date > max ? date : max), eventDates[0]))
    : new Date();
  lastEventMonth.setMonth(lastEventMonth.getMonth() + 2);

  return (
    <div className="pb-16">
      <section className="bg-primary py-12 mb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.18),_transparent_40%)]" />
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/80 mb-3">{t("events.upcoming")}</p>
            <h1 className="font-headline text-4xl sm:text-5xl font-black text-primary-foreground mb-4">{t("events.title")}</h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-primary-foreground/80">{t("events.subtitle")}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event) => (
              <ScrollReveal key={event.id} animation="fade-up">
                <article className="group rounded-[2rem] border border-border/80 bg-white shadow-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
              <div className="bg-primary/70 p-4 absolute bottom-0 w-full backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-primary-foreground">{event.date}</p>
              </div>
            </div>
            <div className="p-6">
                    <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground mb-4">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <span>{t("events.location")}: {event.location}</span>
                    </div>
                    <h2 className="font-headline text-xl font-black text-foreground mb-3">{event.title}</h2>
                    <p className="text-sm leading-6 text-muted-foreground mb-5">{event.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] font-black text-primary">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2"> 
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2">
                        <Clock3 className="h-3.5 w-3.5" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] overflow-hidden border border-border/80 bg-white shadow-xl">
            <div className="bg-primary/5 px-6 py-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary/90">{t("events.upcoming")}</p>
              <h2 className="font-headline text-2xl font-black text-foreground mt-3">{t("events.title")}</h2>
            </div>
            <div className="p-6">
              <Calendar
                mode="multiple"
                selected={eventDates}
                modifiers={{ event: eventDates }}
                modifiersClassNames={{ event: 'ring-2 ring-primary/50 ring-inset bg-primary/10 text-primary font-black' }}
                className="w-full"
                fromMonth={new Date(firstEventMonth.getFullYear() - 1, 0)}
                toMonth={lastEventMonth}
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-white p-6 shadow-xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">{t("events.upcoming")}</h3>
            <ul className="space-y-4">
              {events.slice(0, 3).map((event) => (
                <li key={event.id} className="rounded-3xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">{event.date}</p>
                  <h4 className="mt-2 font-semibold text-foreground">{event.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{event.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
