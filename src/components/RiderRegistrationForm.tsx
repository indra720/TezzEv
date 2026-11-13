import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Check, Upload, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = ["User Details", "Personal KYC", "Banking Details", "Working Place", "Token Recharge", "Completed"];

export function RiderRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [aadharOtpSent, setAadharOtpSent] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const watchedName = watch("fullName", "Rider");
  const watchedMobile = watch("mobile", "");

  const nextStep = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }, 800);
  };
  
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const sendOtp = () => {
    toast.success("6-Digit OTP sent successfully!");
    setOtpSent(true);
  };

  const sendAadharOtp = () => {
    toast.success("Aadhar OTP sent successfully!");
    setAadharOtpSent(true);
  };

  const inputClass = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm transition-all focus:ring-1 focus:ring-brand";

  return (
    <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-6 shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-medium text-ink">Register</h2>
        <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
          {steps.map((step, i) => (
            <div key={step} className={`flex flex-col items-center gap-1 ${i <= currentStep ? "text-brand" : ""}`}>
              <div className={`h-6 w-6 rounded-full border grid place-items-center ${i <= currentStep ? "border-brand bg-brand text-white" : "border-muted"}`}>
                {i < currentStep ? <Check className="h-3 w-3" /> : i + 1}
              </div>
              <span className="hidden sm:inline">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(nextStep)} className="space-y-4">
        {currentStep === 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-ink mb-2">User Details</h3>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Full Name</label>
              <Input {...register("fullName", { required: true })} placeholder="Full Name" className={inputClass} />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Mobile Number</label>
                <div className="flex gap-2">
                    <Input {...register("mobile", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="10-digit Mobile" className={inputClass} />
                    <Button type="button" onClick={sendOtp} variant="outline" className="h-9 px-3 text-xs">Send OTP</Button>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">OTP (6-digit)</label>
                <Input {...register("otp", { required: true, pattern: /^[0-9]{6}$/ })} placeholder="6-digit OTP" className={inputClass} />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Upload Profile Picture</label>
              <Input type="file" required className={inputClass} />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Email</label>
                  <Input {...register("email")} placeholder="Email" type="email" className={inputClass} />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Pincode (6-digit)</label>
                  <Input {...register("pincode", { required: true, pattern: /^[0-9]{6}$/ })} placeholder="6-digit Pincode" className={inputClass} />
                </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-ink mb-2">Personal KYC</h3>
            <div className="p-3 bg-muted/50 rounded-lg text-xs space-y-1">
                <p>Name: <span className="font-bold">{watchedName}</span></p>
                <p>Mobile: <span className="font-bold">{watchedMobile}</span></p>
            </div>
            
            <div className="space-y-3 p-3 border rounded-lg">
              <h4 className="text-xs font-bold uppercase">PAN Card</h4>
              <Input {...register("panNumber", { required: true, pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/ })} placeholder="10-digit PAN" className={inputClass} />
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-muted-foreground">PAN Card Photo</label>
                <input type="file" required className="text-xs" />
              </div>
            </div>

            <div className="space-y-3 p-3 border rounded-lg">
              <h4 className="text-xs font-bold uppercase">Aadhaar Card</h4>
              <Input {...register("aadharNumber", { required: true, pattern: /^[0-9]{12}$/ })} placeholder="12-digit Aadhaar" className={inputClass} />
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-muted-foreground">Front Image</label>
                  <input type="file" required className="text-xs" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-muted-foreground">Back Image</label>
                  <input type="file" required className="text-xs" />
                </div>
              </div>
              <div className="flex gap-2">
                <Input {...register("aadharOtp", { required: true, pattern: /^[0-9]{6}$/ })} placeholder="6-digit Aadhaar OTP" className={inputClass} />
                <Button type="button" onClick={sendAadharOtp} variant="outline" className="h-9 px-3 text-xs whitespace-nowrap">Send OTP</Button>
              </div>
            </div>

            <div className="space-y-3 p-3 border rounded-lg">
              <h4 className="text-xs font-bold uppercase">Driving Licence</h4>
              <Input {...register("dlNumber", { required: true, minLength: 12, maxLength: 13 })} placeholder="12-13 digit DL Number" className={inputClass} />
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-muted-foreground">Front Image</label>
                  <input type="file" required className="text-xs" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-muted-foreground">Back Image</label>
                  <input type="file" required className="text-xs" />
                </div>
              </div>
            </div>

            <div className="space-y-3 p-3 border rounded-lg">
              <h4 className="text-xs font-bold uppercase">Video KYC (Recommended)</h4>
              <input type="file" required className="text-xs" />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-ink mb-2">Banking Details</h3>
            <div className="grid md:grid-cols-2 gap-2">
                <Input {...register("bankName", { required: true })} placeholder="Bank Name" className={inputClass} />
                <Input {...register("accountNo", { required: true })} placeholder="Account Number" className={inputClass} />
            </div>
            <Input {...register("ifsc", { required: true })} placeholder="IFSC Code" className={inputClass} />
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-ink mb-2">Working Place & References</h3>
            <div className="space-y-3 p-3 border rounded-lg">
                <h4 className="text-xs font-bold uppercase">Nominee Details</h4>
                <div className="grid grid-cols-2 gap-2">
                    <Input {...register("nomineeName", { required: true })} placeholder="Nominee Name" className={inputClass} />
                    <Input {...register("nomineeMobile", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Nominee Mobile" className={inputClass} />
                </div>
            </div>
            <div className="space-y-3 p-3 border rounded-lg">
                <h4 className="text-xs font-bold uppercase">Reference Details</h4>
                <div className="grid grid-cols-2 gap-2">
                    <Input {...register("refName", { required: true })} placeholder="Referrer Name" className={inputClass} />
                    <Input {...register("refMobile", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Referrer Mobile" className={inputClass} />
                </div>
            </div>
            <div className="flex items-start gap-2 p-1">
              <input type="checkbox" required className="mt-1" />
              <label className="text-[10px] text-muted-foreground leading-snug">
                I have read and accept the Terms & Conditions and Privacy Policy, and understand that the scooter remains SORA RIDER property while I ride it.
              </label>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-3 text-center py-4">
            <Zap className="mx-auto h-8 w-8 text-brand" />
            <h3 className="text-sm font-bold text-ink">Token Recharge</h3>
            <p className="text-xs text-muted-foreground">Pay ₹250 to activate your rider account.</p>
            <Button className="w-full h-9 text-xs bg-brand hover:bg-brand/90">Proceed to Payment</Button>
          </div>
        )}

        {currentStep === 5 && (
          <div className="text-center py-8 space-y-3">
            <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <Check className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-ink">Registration Completed!</h3>
            <p className="text-xs text-muted-foreground">Your account is under review.</p>
            <Button asChild variant="outline" className="mt-4">
                <a href="/rider-dashboard">Go to Dashboard <ChevronRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        )}

        <div className="flex justify-between pt-4 border-t">
          <Button type="button" onClick={prevStep} variant="ghost" size="sm" disabled={currentStep === 0 || currentStep === 5}>
            <ArrowLeft className="mr-1 h-3 w-3" /> Back
          </Button>
          <div className="ml-auto">
            {currentStep < 5 && (
              <Button type="submit" disabled={isSubmitting} size="sm" className="bg-brand text-white hover:bg-brand/90">
                {isSubmitting ? "Next..." : "Next"} <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
