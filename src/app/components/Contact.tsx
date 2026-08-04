import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../content";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFErbxcdXLyFzbxtrBZ5LdNFMIs8pXndM9CmRBV7--dTBKdw/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.2053637618",
  email: "entry.892719335",
  subject: "entry.741187822",
  message: "entry.481788824",
} as const;

export function Contact() {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [notification, setNotification] = useState<{
    kind: "success" | "error";
    title: string;
    message: string;
  } | null>(null);
  
  const formRef = useRef<HTMLFormElement | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: "#",
    },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("sending");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    
    const body = new URLSearchParams();
    body.append(GOOGLE_FORM_FIELDS.name, formData.get(GOOGLE_FORM_FIELDS.name)?.toString() || "");
    body.append(GOOGLE_FORM_FIELDS.email, formData.get(GOOGLE_FORM_FIELDS.email)?.toString() || "");
    body.append(GOOGLE_FORM_FIELDS.subject, formData.get(GOOGLE_FORM_FIELDS.subject)?.toString() || "");
    body.append(GOOGLE_FORM_FIELDS.message, formData.get(GOOGLE_FORM_FIELDS.message)?.toString() || "");

    try {
      // Direct URL-encoded fetch request to Google Form
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      // Also trigger hidden iframe POST submission as a dual-delivery backup
      try {
        const iframeForm = document.createElement("form");
        iframeForm.action = GOOGLE_FORM_ACTION;
        iframeForm.method = "POST";
        iframeForm.target = "hidden_iframe";

        for (const [key, value] of body.entries()) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value;
          iframeForm.appendChild(input);
        }

        document.body.appendChild(iframeForm);
        iframeForm.submit();
        document.body.removeChild(iframeForm);
      } catch {}

      // Clear all fields and show success popup modal
      formRef.current?.reset();
      setSubmitState("sent");
      setNotification({
        kind: "success",
        title: "Message Sent Successfully!",
        message: "Thank you for contacting me. I will get back to you soon.",
      });
    } catch {
      setSubmitState("error");
      setNotification({
        kind: "error",
        title: "Failed to send message.",
        message: "Please try again.",
      });
    }
  };

  useEffect(() => {
    if (!notification) return;

    const timeoutId = window.setTimeout(() => {
      setNotification(null);
      setSubmitState("idle");
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [notification]);

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Hidden iframe for dual submission backup */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        title="Google Form Submission Frame"
      />

      {/* Modern Centered Popup Modal */}
      <AnimatePresence>
        {notification ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative w-full max-w-md rounded-2xl border p-6 shadow-2xl backdrop-blur-xl ${
                notification.kind === "success"
                  ? "border-cyan-500/40 bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950/40 shadow-cyan-500/20"
                  : "border-red-500/40 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950/40 shadow-red-500/20"
              }`}
            >
              <button
                onClick={() => {
                  setNotification(null);
                  setSubmitState("idle");
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center border ${
                    notification.kind === "success"
                      ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                  }`}
                >
                  {notification.kind === "success" ? (
                    <CheckCircle2 size={36} />
                  ) : (
                    <AlertCircle size={36} />
                  )}
                </div>

                <div className="space-y-2">
                  <h3
                    className={`text-xl font-bold ${
                      notification.kind === "success"
                        ? "text-cyan-300"
                        : "text-red-300"
                    }`}
                  >
                    {notification.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {notification.message}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setNotification(null);
                    setSubmitState("idle");
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl font-medium transition-all duration-200 ${
                    notification.kind === "success"
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-cyan-500/25"
                      : "bg-gradient-to-r from-red-600 to-rose-600 text-white hover:opacity-90 shadow-lg shadow-red-500/25"
                  }`}
                >
                  OK
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, opportunities, or partnerships.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-gray-300">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  info.href === "#" ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-gray-200">{info.value}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-gray-200">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-purple-500/30"
            >
              <h3 className="text-xl mb-4 text-gray-300">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", href: profile.github, Icon: Github },
                  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
                  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
                ].map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{
                      scale: 1.15,
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm shadow-xl">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name={GOOGLE_FORM_FIELDS.name}
                      defaultValue=""
                      autoComplete="name"
                      style={{
                        color: "#ffffff",
                        WebkitTextFillColor: "#ffffff",
                        caretColor: "#ffffff",
                      }}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name={GOOGLE_FORM_FIELDS.email}
                      defaultValue=""
                      autoComplete="email"
                      style={{
                        color: "#ffffff",
                        WebkitTextFillColor: "#ffffff",
                        caretColor: "#ffffff",
                      }}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name={GOOGLE_FORM_FIELDS.subject}
                      defaultValue=""
                      autoComplete="off"
                      style={{
                        color: "#ffffff",
                        WebkitTextFillColor: "#ffffff",
                        caretColor: "#ffffff",
                      }}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name={GOOGLE_FORM_FIELDS.message}
                      defaultValue=""
                      rows={5}
                      style={{
                        color: "#ffffff",
                        WebkitTextFillColor: "#ffffff",
                        caretColor: "#ffffff",
                      }}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-3.5 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    disabled={submitState === "sending"}
                  >
                    <Send size={20} />
                    {submitState === "sending" ? "Sending..." : "Send Message"}
                  </motion.button>

                  {submitState === "error" ? (
                    <p className="text-sm text-red-300 text-center font-medium">
                      Failed to send message. Please try again.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




