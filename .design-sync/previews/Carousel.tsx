import { Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "sosek-system"

export const Slides = () => (
  <div className="px-12">
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {["Plan", "Design", "Build", "Ship"].map((step, i) => (
          <CarouselItem key={step}>
            <Card>
              <CardContent className="flex aspect-square flex-col items-center justify-center gap-2">
                <span className="text-4xl font-semibold">{i + 1}</span>
                <span className="text-muted-foreground">{step}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)

export const MultiplePerView = () => (
  <div className="px-12">
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <CarouselContent>
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
          <CarouselItem key={m} className="basis-1/3">
            <Card size="sm">
              <CardContent className="flex h-20 items-center justify-center font-medium">{m}</CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)
