import {
  Bubble,
  BubbleContent,
  Marker,
  MarkerContent,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "sosek-system"

const thread = [
  ["start", "Can you summarize last week’s sales?"],
  ["end", "Revenue was $48.2k, up 12% week over week."],
  ["start", "Which product grew the most?"],
  ["end", "The Pro plan — 31 new subscriptions."],
  ["start", "Draft an email to the team about it."],
  ["end", "Done — I kept it short and added the chart."],
] as const

export const Thread = () => (
  <MessageScrollerProvider>
    <MessageScroller className="h-72 w-full max-w-md rounded-lg border">
      <MessageScrollerViewport>
        <MessageScrollerContent className="flex flex-col gap-3 p-4">
          <Marker variant="separator">
            <MarkerContent>Monday</MarkerContent>
          </Marker>
          {thread.map(([align, text], i) => (
            <MessageScrollerItem key={i} messageId={`m${i}`}>
              <Message align={align}>
                <MessageContent>
                  <Bubble variant={align === "end" ? "default" : "secondary"} align={align}>
                    <BubbleContent>{text}</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          ))}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  </MessageScrollerProvider>
)
