import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "sosek-system"

export const Default = () => (
  <Alert className="w-full max-w-md">
    <AlertTitle>Your trial ends in 3 days</AlertTitle>
    <AlertDescription>Add a payment method to keep access to all projects.</AlertDescription>
  </Alert>
)

export const Destructive = () => (
  <Alert variant="destructive" className="w-full max-w-md">
    <AlertTitle>Payment failed</AlertTitle>
    <AlertDescription>We couldn’t charge your card ending in 4242. Update your billing details.</AlertDescription>
  </Alert>
)

export const WithAction = () => (
  <Alert className="w-full max-w-md">
    <AlertTitle>New version available</AlertTitle>
    <AlertDescription>Sosek 2.5 includes faster exports and dark mode.</AlertDescription>
    <AlertAction>
      <Button size="sm" variant="outline">
        Update
      </Button>
    </AlertAction>
  </Alert>
)
