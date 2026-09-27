import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "sosek-system"

const products = [
  { title: "Analytics", text: "Understand how people use your product." },
  { title: "Automations", text: "Connect tools and remove busywork." },
  { title: "Reports", text: "Share dashboards with your whole team." },
  { title: "Security", text: "SSO, audit logs and granular roles." },
]

export const SiteNav = () => (
  <NavigationMenu defaultValue="products">
    <NavigationMenuList>
      <NavigationMenuItem value="products">
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-96 grid-cols-2 gap-2 p-2">
            {products.map((p) => (
              <li key={p.title}>
                <NavigationMenuLink href="#" className="flex-col items-start gap-1">
                  <div className="text-sm font-medium">{p.title}</div>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem value="pricing">
        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
          Pricing
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem value="docs">
        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
          Docs
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)
