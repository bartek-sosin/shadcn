import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
  Switch,
} from "sosek-system"

export const ProfileForm = () => (
  <FieldSet className="w-full max-w-md">
    <FieldLegend>Profile</FieldLegend>
    <FieldDescription>This information is shown on your public page.</FieldDescription>
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="name">Full name</FieldLabel>
        <Input id="name" placeholder="Jane Kowalska" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="jane@company.com" />
        <FieldDescription>We’ll never share your email.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button>Save profile</Button>
        <Button variant="outline">Cancel</Button>
      </Field>
    </FieldGroup>
  </FieldSet>
)

export const Invalid = () => (
  <Field data-invalid="true" className="w-full max-w-md">
    <FieldLabel htmlFor="username">Username</FieldLabel>
    <Input id="username" defaultValue="jk" aria-invalid="true" />
    <FieldError>Username must be at least 3 characters.</FieldError>
  </Field>
)

export const HorizontalControls = () => (
  <FieldGroup className="w-full max-w-md">
    <Field orientation="horizontal">
      <Checkbox id="terms" defaultChecked />
      <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
    </Field>
    <FieldSeparator />
    <Field orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="marketing">Marketing emails</FieldLabel>
        <FieldDescription>Product news and occasional offers.</FieldDescription>
      </FieldContent>
      <Switch id="marketing" />
    </Field>
  </FieldGroup>
)
