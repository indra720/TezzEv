import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  User,
  ShieldCheck,
  CreditCard,
  FileText,
  Upload,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Rider Pre-Registration — TezzEV" },
      {
        name: "description",
        content: "Pre-register as a delivery rider with TezzEV. Paperless verification and fast onboarding.",
      },
    ],
  }),
});

const steps = ["Basics", "Licence & Aadhaar", "Bank Details", "Nominee & Terms", "Review", "Confirmation"];

const registerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit mobile number required"),
  otp: z.string().optional(),
  email: z.string().email("Valid email required").or(z.literal("")),
  city: z.string().min(2, "City is required"),
  pincode: z.string().regex(/^\d{6}$/, "Valid 6-digit pincode required"),

  // KYC
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Valid PAN (e.g. ABCDE1234F) required"),
  aadharNumber: z.string().regex(/^\d{12}$/, "Valid 12-digit Aadhaar required"),
  dlNumber: z.string().min(8, "Driving License number required"),

  // Bank
  bankName: z.string().min(2, "Bank name required"),
  accountNo: z.string().min(6, "Account number required"),
  ifsc: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Valid IFSC required (e.g. SBIN0001234)"),

  // Nominee
  nomineeName: z.string().min(2, "Nominee name required"),
  nomineeMobile: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit nominee mobile required"),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept TezzEV Terms & Conditions" }),
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: string }>({});

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      otp: "",
      email: "",
      city: "Jaipur",
      pincode: "302015",
      panNumber: "ABCDE1234F",
      aadharNumber: "123456789012",
      dlNumber: "RJ1420220012345",
      bankName: "State Bank of India",
      accountNo: "12345678901",
      ifsc: "SBIN0001234",
      nomineeName: "Sunita Sharma",
      nomineeMobile: "9876543210",
      termsAccepted: true,
    },
    mode: "onBlur",
  });

  const formValues = watch();

  const handleSendOtp = () => {
    if (!formValues.mobile || !/^[6-9]\d{9}$/.test(formValues.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number first.");
      return;
    }
    setOtpSent(true);
    setValue("otp", "789123");
    toast.success("Mock 6-Digit OTP Sent!", {
      description: "Code [789123] auto-filled for preview convenience.",
    });
  };

  const handleFakeFileUpload = (key: string, name: string) => {
    setUploadedFiles((prev) => ({ ...prev, [key]: name }));
    toast.success(`${name} Uploaded!`, {
      description: "File uploaded successfully.",
    });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const batteryPercent = Math.round(((currentStep + 1) / steps.length) * 100);

  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Register"
        title="Rider Pre-Registration"
        subtitle="Quick paperless verification. Zero advance deduction until vehicle handover."
      />

      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-4xl mx-auto">
          {/* Clean Progress Meter */}
          <div className="clean-card p-5 mb-8 bg-slate-50/70 border border-slate-200">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
              <span className="text-blue-600">Step {currentStep + 1} of {steps.length}: {steps[currentStep]}</span>
              <span>{batteryPercent}% Complete</span>
            </div>

            <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${batteryPercent}%` }}
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="clean-card p-6 sm:p-10 border border-slate-200">
            {/* STEP 0: BASICS */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#081330] border-b border-slate-100 pb-3 flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Step 1: Basic Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name (As on Aadhaar)
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="ramesh@gmail.com"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        {...register("mobile")}
                        placeholder="9876543210"
                        className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                      />
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="btn-outline-blue text-xs py-2 px-3 whitespace-nowrap"
                      >
                        {otpSent ? "Resend" : "Send OTP"}
                      </button>
                    </div>
                    {errors.mobile && (
                      <p className="text-xs text-red-500 mt-1">{errors.mobile.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      OTP (Auto-filled mock)
                    </label>
                    <input
                      type="text"
                      {...register("otp")}
                      placeholder="Enter 6-digit OTP"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      {...register("city")}
                      placeholder="Jaipur"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      {...register("pincode")}
                      placeholder="302015"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1: KYC */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#081330] border-b border-slate-100 pb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  <span>Step 2: Driving Licence & Aadhaar Check</span>
                </h3>

                {/* PAN */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    PAN Card Number
                  </label>
                  <input
                    type="text"
                    {...register("panNumber")}
                    placeholder="ABCDE1234F"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm uppercase outline-none focus:border-blue-600"
                  />
                  <div
                    onClick={() => handleFakeFileUpload("pan", "pan_card.jpg")}
                    className="border border-dashed border-slate-300 rounded-lg p-2.5 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 text-xs text-blue-600 font-medium"
                  >
                    <Upload className="h-4 w-4 mx-auto mb-0.5 text-slate-400" />
                    <span>{uploadedFiles.pan || "Click to upload PAN Card photo"}</span>
                  </div>
                </div>

                {/* Aadhaar */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    12-Digit Aadhaar Number
                  </label>
                  <input
                    type="text"
                    {...register("aadharNumber")}
                    placeholder="123456789012"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-600"
                  />
                  <div
                    onClick={() => handleFakeFileUpload("aadhar", "aadhaar_card.jpg")}
                    className="border border-dashed border-slate-300 rounded-lg p-2.5 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 text-xs text-blue-600 font-medium"
                  >
                    <Upload className="h-4 w-4 mx-auto mb-0.5 text-slate-400" />
                    <span>{uploadedFiles.aadhar || "Click to upload Aadhaar front & back"}</span>
                  </div>
                </div>

                {/* DL */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    Driving Licence Number
                  </label>
                  <input
                    type="text"
                    {...register("dlNumber")}
                    placeholder="RJ1420220012345"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm uppercase outline-none focus:border-blue-600"
                  />
                  <div
                    onClick={() => handleFakeFileUpload("dl", "driving_license.jpg")}
                    className="border border-dashed border-slate-300 rounded-lg p-2.5 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 text-xs text-blue-600 font-medium"
                  >
                    <Upload className="h-4 w-4 mx-auto mb-0.5 text-slate-400" />
                    <span>{uploadedFiles.dl || "Click to upload Driving Licence photo"}</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: BANK */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#081330] border-b border-slate-100 pb-3 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <span>Step 3: Bank Details for Deposit Refund</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Your security deposit will be refunded to this account when you return the vehicle.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    {...register("bankName")}
                    placeholder="State Bank of India / HDFC"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    {...register("accountNo")}
                    placeholder="Enter bank account number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    {...register("ifsc")}
                    placeholder="SBIN0001234"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm uppercase outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: NOMINEE */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#081330] border-b border-slate-100 pb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span>Step 4: Nominee & Terms</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nominee Name
                    </label>
                    <input
                      type="text"
                      {...register("nomineeName")}
                      placeholder="Family member name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nominee Mobile
                    </label>
                    <input
                      type="tel"
                      {...register("nomineeMobile")}
                      placeholder="9876543210"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 mt-4 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formValues.termsAccepted}
                    onChange={(e) => setValue("termsAccepted", e.target.checked as true)}
                    className="mt-1 h-4 w-4 accent-blue-600 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                    I agree to the TezzEV Rental Terms and certify that my submitted documents are valid. I understand that the scooter remains the property of TezzEV Mobility Pvt Ltd.
                  </label>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#081330] border-b border-slate-100 pb-3">
                  Step 5: Review your application
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Rider Details</span>
                    <div className="font-bold text-slate-900 text-sm">{formValues.fullName || "Ramesh Kumar"}</div>
                    <div className="text-slate-600">{formValues.mobile || "9876543210"}</div>
                    <div className="text-slate-500">{formValues.city} ({formValues.pincode})</div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Document Numbers</span>
                    <div>PAN: <strong className="text-slate-800">{formValues.panNumber}</strong></div>
                    <div>Aadhaar: <strong className="text-slate-800">{formValues.aadharNumber}</strong></div>
                    <div>DL: <strong className="text-slate-800">{formValues.dlNumber}</strong></div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Bank Refund Account</span>
                    <div className="font-semibold text-slate-800">{formValues.bankName}</div>
                    <div className="text-slate-600">Acc: {formValues.accountNo}</div>
                    <div className="text-slate-600">IFSC: {formValues.ifsc}</div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Emergency Nominee</span>
                    <div className="font-semibold text-slate-800">{formValues.nomineeName}</div>
                    <div className="text-slate-600">{formValues.nomineeMobile}</div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: SUCCESS */}
            {currentStep === 5 && (
              <div className="py-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#081330]">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-blue-600">{formValues.fullName || "Pilot"}</span>. Your pre-registration for Jaipur has been queued for launch day vehicle assignment.
                </p>

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 inline-block text-xs text-blue-900 font-medium">
                  Priority Rider Queue ID: <strong>TEZZ-PILOT-#000842</strong>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <Link to="/rider-dashboard" className="btn-primary text-xs py-2.5 px-6">
                    View Cockpit Dashboard Preview
                  </Link>
                  <Link to="/" className="btn-secondary text-xs py-2.5 px-6">
                    Return to Home
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="btn-secondary text-xs py-2 px-4 disabled:opacity-40"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary text-xs py-2.5 px-6"
                >
                  <span>{currentStep === 4 ? "Submit Registration" : "Next Step"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
