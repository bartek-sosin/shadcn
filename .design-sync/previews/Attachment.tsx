import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  Icons,
} from "sosek-system"

export const States = () => (
  <AttachmentGroup className="flex-wrap">
    <Attachment>
      <AttachmentMedia>
        <Icons.FileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>Q3-report.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <Icons.X />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
    <Attachment state="uploading">
      <AttachmentMedia>
        <Icons.Image />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>hero-banner.png</AttachmentTitle>
        <AttachmentDescription>Uploading… 64%</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment state="error">
      <AttachmentMedia>
        <Icons.File />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>archive.zip</AttachmentTitle>
        <AttachmentDescription>File is larger than 25 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  </AttachmentGroup>
)

export const Sizes = () => (
  <AttachmentGroup>
    {(["default", "sm", "xs"] as const).map((s) => (
      <Attachment key={s} size={s}>
        <AttachmentMedia>
          <Icons.FileText />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>notes-{s}.md</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    ))}
  </AttachmentGroup>
)
