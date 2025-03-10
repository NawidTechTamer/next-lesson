import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import BranchComponent, { DataType } from "./branch/Branch";
import React from "react";
import { TbReportMoney } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiExpense } from "react-icons/gi";

interface ItemType {
  id: string;
  title: string;
  content: React.ReactNode;
}

const financialReport: DataType[] = [
  {
    id: 1,
    title: "Profit",
    icon: <TbReportMoney />,
    muchMoney: 360000,
    moneyIcon: <MdAttachMoney />,
  },
  {
    id: 2,
    title: "Revenue",
    icon: <BsGraphUpArrow />,
    muchMoney: 6000,
    moneyIcon: <MdAttachMoney />,
  },
  {
    id: 3,
    title: "Expenses",
    icon: <GiExpense />,
    muchMoney: 9000,
    moneyIcon: <MdAttachMoney />,
  },
];

const items: ItemType[] = [
  {
    id: "1",
    title: "First Branch",
    content: <BranchComponent item={financialReport} />,
  },
  {
    id: "2",
    title: "Second Branch",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Third Branch",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "Fourth Branch",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];

export default function AccordionComponent() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">W/ plus-minus</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                {item.title}
                <PlusIcon
                  size={16}
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
