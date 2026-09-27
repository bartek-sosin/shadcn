import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "sosek-system"

export const VerificationCode = () => (
  <div className="flex flex-col gap-2">
    <p className="text-sm font-medium">Enter the 6-digit code sent to your phone</p>
    <InputOTP maxLength={6} defaultValue="482">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  </div>
)
