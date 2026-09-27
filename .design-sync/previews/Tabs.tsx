import { Card, CardContent, CardDescription, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from "sosek-system"

export const Default = () => (
  <Tabs defaultValue="account" className="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Update your name and email address.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Signed in as jane@company.com</p>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
)

export const Line = () => (
  <Tabs defaultValue="overview" className="w-full max-w-md">
    <TabsList variant="line">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
      <TabsTrigger value="settings" disabled>
        Settings
      </TabsTrigger>
    </TabsList>
    <TabsContent value="overview" className="pt-2 text-sm text-muted-foreground">
      Revenue grew 12% compared to last month.
    </TabsContent>
  </Tabs>
)
