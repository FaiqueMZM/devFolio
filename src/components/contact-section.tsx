"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../hooks/useScrollAnimation";
import { cn } from "../lib/utils";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "faiqueinaas@gmail.com",
    href: "mailto:faiqueinaas@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 (76) 720-8875",
    href: "tel:+94767208875",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ampara, Sri Lanka",
    href: "#",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: infoRef, visibleItems } = useStaggerAnimation(
    contactInfo.length,
    150,
    { threshold: 0.1 },
  );
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch((error: unknown) => {
        console.error("Email send error:", error);
        toast.error("❌ Failed to send the message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 relative"
      aria-label="Contact section"
    >
      <div className="container mx-auto">
        {/* Section Header with animation */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-out",
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Contact Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>

            <div
              ref={infoRef as React.RefObject<HTMLDivElement>}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className={cn(
                      "bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm hover:bg-[#2C394B]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF4C29]/10",
                      visibleItems[index]
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-[#FF4C29]/10 rounded-lg">
                          <Icon
                            className="w-6 h-6 text-[#FF4C29]"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {info.title}
                          </h4>
                          <a
                            href={info.href}
                            className="text-white/60 hover:text-[#FF4C29] transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form with animation */}
          <Card
            ref={formRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm transition-all duration-700 ease-out",
              formVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8",
            )}
          >
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Send a Message
              </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40 focus:ring-[#FF4C29]/50"
                    />
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40 focus:ring-[#FF4C29]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40 focus:ring-[#FF4C29]/50"
                  />
                </div>

                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40 resize-none focus:ring-[#FF4C29]/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#FF4C29] to-[#334756] hover:from-[#FF4C29]/80 hover:to-[#334756]/80 text-white border-0 hover:scale-[1.02] transition-transform duration-300"
                >
                  <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
