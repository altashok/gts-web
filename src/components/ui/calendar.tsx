"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 bg-white rounded-3xl shadow-sm", className)}
      classNames={{
        months: "space-y-4",
        month: "overflow-hidden rounded-3xl border border-border/70 bg-background",
        caption: "flex items-center justify-between gap-3 border-b border-border/80 px-4 py-3",
        caption_label: "text-base font-semibold text-foreground",
        nav: "flex items-center gap-2",
        nav_button: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "h-10 w-10 rounded-full border border-border/70 bg-background text-foreground transition hover:bg-primary/10 hover:text-primary focus-visible:ring-primary"
        ),
        table: "min-w-full table-fixed border-collapse text-sm",
        head_row: "table-row",
        head_cell: "table-cell py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground",
        row: "table-row",
        cell: "table-cell h-12 p-0 text-center align-middle",
        day: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "h-10 w-10 rounded-full p-0 font-medium text-foreground transition hover:bg-primary/10 focus-visible:ring-primary"
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary focus-visible:ring-primary",
        day_today: "text-primary font-semibold",
        day_outside: "text-muted-foreground",
        day_disabled: "text-muted-foreground/60",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className, ...props }) => {
          return orientation === "left" ? (
            <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
          ) : (
            <ChevronRight className={cn("h-4 w-4", className)} {...props} />
          )
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
