interface ContactLink {
  label: string;
  href: string;
  download?: boolean;
}

const links: ContactLink[] = [
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/jakob-engelhardt/",
  },
  {
    label: "x",
    href: "https://x.com/jaaakobs",
  },
  {
    label: "email",
    href: "mailto:engelhardt.jak@gmail.com",
  },
  {
    label: "chat",
    href: "https://api.whatsapp.com/send/?phone=4915750421836",
  },
  {
    label: "cv",
    href: "/cv",
    download: false,
  },
];

export default function ContactSection() {
  return (
    <section>
      <h2 className="font-heading text-lg text-[#4a4a4a] mb-4 tracking-wide">Contact</h2>
      
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-[15px] text-[#1a1a1a] hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            {link.label}
            <span className="text-xs">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
