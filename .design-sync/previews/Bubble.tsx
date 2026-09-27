import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "sosek-system"

export const Variants = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    {(["default", "secondary", "muted", "tinted", "outline", "ghost", "destructive"] as const).map((v) => (
      <Bubble key={v} variant={v}>
        <BubbleContent>{v === "destructive" ? "Message failed to send." : `A ${v} bubble.`}</BubbleContent>
      </Bubble>
    ))}
  </div>
)

export const Conversation = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <BubbleGroup>
      <Bubble variant="secondary">
        <BubbleContent>Hey! Did the new design system land?</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>I want to use it for the onboarding flow.</BubbleContent>
      </Bubble>
    </BubbleGroup>
    <Bubble align="end">
      <BubbleContent>Yes — 55 components are live in Sosek System.</BubbleContent>
      <BubbleReactions>
        <span>🎉 2</span>
      </BubbleReactions>
    </Bubble>
  </div>
)
