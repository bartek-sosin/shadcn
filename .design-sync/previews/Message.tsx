import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Button,
  Icons,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "sosek-system"

export const Chat = () => (
  <MessageGroup className="w-full max-w-lg">
    <Message>
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader className="gap-2">
          <span className="font-medium">Sosek Assistant</span>
          <span className="text-muted-foreground">10:42</span>
        </MessageHeader>
        <p>
          I drafted three onboarding screens using Card, Field and Button. Want me to add a progress
          indicator between steps?
        </p>
        <MessageFooter>
          <Button variant="ghost" size="icon-xs" aria-label="Copy">
            <Icons.Copy />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Like">
            <Icons.ThumbsUp />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Regenerate">
            <Icons.RefreshCw />
          </Button>
        </MessageFooter>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <Bubble>
          <BubbleContent>Yes please — use the Progress component.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </MessageGroup>
)
