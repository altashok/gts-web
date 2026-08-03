import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Book Order",
  description: "Order textbooks from the Global Tamil School.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TextBookOrderPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] opacity-90">
              Global Tamil School
            </p>
            <h1 className="font-headline text-3xl font-black sm:text-4xl md:text-5xl">
              Text Book Order
            </h1>
            <p className="mt-4 text-base text-primary-foreground/85 sm:text-lg">
              Please complete the form below to order your textbooks for the upcoming academic year.
            </p>
          </div>
        </div>
      </section>

      <section className="px-2 py-4 sm:px-4 sm:py-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-visible rounded-3xl border border-border bg-white p-1 shadow-xl sm:p-2 lg:p-3">
            <div className="w-full overflow-visible">
              <iframe
                src="https://forms.gle/xQi4VihMAMzBDvdC7"
                title="Text Book Order Form"
                className="block min-h-[3800px] w-full border-0 sm:min-h-[2600px] lg:min-h-[3300px]"
                loading="lazy"
                allowFullScreen
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
