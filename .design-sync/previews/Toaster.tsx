import { useEffect } from "react"
import { Button, Toaster, toast } from "sosek-system"

export const Notifications = () => {
  useEffect(() => {
    toast.success("Project published", { description: "sosek.app/marketing is now live." })
    toast("Invite sent", { description: "Marek will get an email shortly." })
  }, [])
  return (
    <div className="flex min-h-64 items-start">
      <Button variant="outline" onClick={() => toast("Saved to drafts")}>
        Show toast
      </Button>
      <Toaster position="bottom-right" expand />
    </div>
  )
}
