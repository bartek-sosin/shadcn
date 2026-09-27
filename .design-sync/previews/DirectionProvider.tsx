import { Button, DirectionProvider, Field, FieldLabel, Input } from "sosek-system"

export const RightToLeft = () => (
  <DirectionProvider direction="rtl">
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-3">
      <Field>
        <FieldLabel htmlFor="rtl-name">الاسم الكامل</FieldLabel>
        <Input id="rtl-name" placeholder="محمد أحمد" />
      </Field>
      <div className="flex gap-2">
        <Button>حفظ</Button>
        <Button variant="outline">إلغاء</Button>
      </div>
    </div>
  </DirectionProvider>
)
