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

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@devfolio.com",
    href: "mailto:hello@devfolio.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Contact Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm hover:bg-[#2C394B]/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-[#FF4C29]/10 rounded-lg">
                          <Icon className="w-6 h-6 text-[#FF4C29]" />
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

          {/* Contact Form */}
          <Card className="bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/80 text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="What's this about?"
                  className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-[#334756]/20 border-[#334756]/40 text-white placeholder:text-white/40 resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-[#FF4C29] to-[#334756] hover:from-[#FF4C29]/80 hover:to-[#334756]/80 text-white border-0">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
