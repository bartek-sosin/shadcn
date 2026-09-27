import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "sosek-system"

export const Default = () => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Upgrade to Pro</CardTitle>
      <CardDescription>Unlock unlimited projects and priority support.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        Your team has used 9 of 10 free projects this month. Upgrading keeps your
        workspace running without interruptions.
      </p>
    </CardContent>
    <CardFooter className="gap-2">
      <Button>Upgrade</Button>
      <Button variant="ghost">Maybe later</Button>
    </CardFooter>
  </Card>
)

export const WithAction = () => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
      <CardAction>
        <Button variant="link" size="sm">
          Mark all read
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      <p>Anna commented on “Q3 roadmap”.</p>
      <p>Build #482 finished successfully.</p>
      <p>Marek invited you to “Design review”.</p>
    </CardContent>
  </Card>
)

export const Small = () => (
  <Card size="sm" className="w-full max-w-xs">
    <CardHeader>
      <CardTitle>Monthly revenue</CardTitle>
      <CardDescription>September 2026</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-semibold tracking-tight">$24,580</p>
    </CardContent>
  </Card>
)
