import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "sosek-system"

export const FAQ = () => (
  <Accordion type="single" collapsible defaultValue="billing" className="w-full max-w-md">
    <AccordionItem value="trial">
      <AccordionTrigger>How long is the free trial?</AccordionTrigger>
      <AccordionContent>Every workspace gets 14 days of Pro features, no card required.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="billing">
      <AccordionTrigger>Can I change plans later?</AccordionTrigger>
      <AccordionContent>
        Yes. Upgrades apply immediately; downgrades take effect at the end of your billing period.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="export">
      <AccordionTrigger>Can I export my data?</AccordionTrigger>
      <AccordionContent>Export any project as CSV or JSON from Settings → Data.</AccordionContent>
    </AccordionItem>
  </Accordion>
)
