export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  edition?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We always enjoy participating in these types of challenges. It's a way to apply what we've learned and go beyond what we do in class.",
    name: "Bernardo Chagas",
    role: "Mechanical Engineering student, IST",
    edition: "JunctionX Lisbon 2025",
  },
  {
    quote:
      "The challenges were ambitious, and that made everything more interesting. We had to learn a lot and apply what we knew in a short time.",
    name: "Rui Guerra",
    role: "MSc Data Science & Engineering, IST",
    edition: "JunctionX Lisbon 2025",
  },
  {
    quote:
      "Some partners have already expressed interest in contacting the teams to assess the feasibility of implementing the solutions in a real production context.",
    name: "JunctionX Lisbon Organizers",
    role: "Organizing team",
    edition: "JunctionX Lisbon 2025",
  },
  {
    quote:
      "Winning JunctionX Lisbon and qualifying for Junction Finland was an incredible milestone. The 36 hours pushed us to build something we are genuinely proud of.",
    name: "Duarte Pereira da Cruz",
    role: "Computer Science & Engineering student, IST",
    edition: "JunctionX Lisbon 2025",
  },
  {
    quote:
      "The mentors and partners were approachable and gave us feedback that shaped our project in real time. It felt like a bridge between university and industry.",
    name: "Daniel Borges",
    role: "Computer Science & Engineering student, IST",
    edition: "JunctionX Lisbon 2025",
  },
  {
    quote:
      "JunctionX brought together people from different backgrounds in one intense weekend. The energy and collaboration were unlike anything I'd experienced before.",
    name: "André Pagaime",
    role: "Computer Science & Engineering student, IST",
    edition: "JunctionX Lisbon 2025",
  },
];
