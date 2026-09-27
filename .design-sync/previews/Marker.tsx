import { Icons, Marker, MarkerContent, MarkerIcon } from "sosek-system"

export const Variants = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <Marker>
      <MarkerIcon>
        <Icons.Sparkles />
      </MarkerIcon>
      <MarkerContent>Thinking for 4 seconds</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerIcon>
        <Icons.Search />
      </MarkerIcon>
      <MarkerContent>Searched 12 documents</MarkerContent>
    </Marker>
  </div>
)
