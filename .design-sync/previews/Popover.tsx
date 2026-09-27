import {
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "sosek-system"

export const Dimensions = () => (
  <div className="flex justify-center pt-4">
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">Set dimensions</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the size of the selected layer.</PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-3">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="pw" className="w-16">Width</FieldLabel>
            <Input id="pw" defaultValue="1280px" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="ph" className="w-16">Height</FieldLabel>
            <Input id="ph" defaultValue="720px" />
          </Field>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  </div>
)
