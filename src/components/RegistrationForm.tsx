import { useForm } from "react-hook-form";
import { User, Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "sonner";

type FormData = { name: string; mobile: string; email: string; message: string };

export function RegistrationForm({ variant = "card" }: { variant?: "card" | "plain" }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message submitted! We'll be in touch.", { description: `Thanks for reaching out, ${data.name}` });
    reset();
  };

  const Wrapper = variant === "card"
    ? "div"
    : "div";

  return (
    <Wrapper className={variant === "card"
      ? "rounded-2xl bg-brand p-6 text-white shadow-2xl shadow-brand/30 sm:p-8"
      : "rounded-2xl border border-border bg-card p-6 sm:p-8"}>
      <div className="text-center">
        <h3 className={`text-2xl font-extrabold tracking-tight ${variant === "card" ? "text-white" : "text-ink"}`}>
          RIDER REGISTRATION
        </h3>
        <p className={`mt-1 text-sm ${variant === "card" ? "text-white/85" : "text-muted-foreground"}`}>
          Join SoraRider and start earning!
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
        {[
          { name: "name", placeholder: "Full Name", Icon: User, type: "text", isTextArea: false },
          { name: "mobile", placeholder: "Mobile Number", Icon: Phone, type: "tel", isTextArea: false },
          { name: "email", placeholder: "Email Address", Icon: Mail, type: "email", isTextArea: false },
        ].map(({ name, placeholder, Icon, type, isTextArea }) => (
          <div key={name} className="relative ">
            <input
              type={type}
              placeholder={placeholder}
              {...register(name as keyof FormData, { required: true, minLength: name === "mobile" ? 10 : 2 })}
              className="w-full rounded-xl border-0 bg-white px-4 py-3 pr-10 text-sm text-ink outline-none ring-2 ring-transparent placeholder:text-muted-foreground focus:ring-ink/20"
            />
            <Icon className="absolute right-3 top-4 h-4 w-4 text-muted-foreground" />
            {errors[name as keyof FormData] && (
              <p className={`mt-1 text-xs ${variant === "card" ? "text-white/90" : "text-destructive"}`}>Required</p>
            )}
          </div>
        ))}
        {/* Message Field */}
        <div className="relative">
          <textarea
            placeholder="Your Message"
            {...register("message", { required: true, minLength: 10 })}
            className="w-full rounded-xl border-0 bg-white px-4 py-3 pr-10 text-sm text-ink outline-none ring-2 ring-transparent placeholder:text-muted-foreground focus:ring-ink/20 min-h-[100px]"
          />
          <MessageSquare className="absolute right-3 top-4 h-4 w-4 text-muted-foreground" />
          {errors.message && (
            <p className={`mt-1 text-xs ${variant === "card" ? "text-white/90" : "text-destructive"}`}>Required (min 10 chars)</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
        <p className={`text-center  md:mt-4 lg:mt-0 text-xs ${variant === "card" ? "text-white/80" : "text-muted-foreground"}`}>
          By registering, you agree to our <span className="underline">Terms &amp; Conditions</span>
        </p>
      </form>
    </Wrapper>
  );
}
