import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "sosek-system"

export const EditProfile = () => (
  <Dialog defaultOpen>
    <DialogTrigger asChild>
      <Button variant="outline">Edit profile</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Make changes to your profile. Click save when you’re done.</DialogDescription>
      </DialogHeader>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
          <Input id="dialog-name" defaultValue="Jane Kowalska" />
        </Field>
        <Field>
          <FieldLabel htmlFor="dialog-username">Username</FieldLabel>
          <Input id="dialog-username" defaultValue="@jane" />
        </Field>
      </FieldGroup>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
