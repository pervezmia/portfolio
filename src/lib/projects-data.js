export const projects = [
  {
    slug: "tutorbooking",
    title: "TutorBooking",
    tagline: "A booking platform connecting students with tutors.",
    tags: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    live: "https://client-tutor-booking-system.vercel.app/",
    github: "https://github.com/pervezmia/client_tutor_booking_system",
    problem:
      "Students looking for tutors usually rely on scattered Facebook posts or word of mouth, with no easy way to compare tutors, check real availability, or manage bookings once made. TutorBooking gives students a single place to search tutors by subject, see open slots, and book directly — while giving tutors a dashboard to manage their sessions.",
    decisions: [
      {
        title: "Better Auth with a proxy middleware pattern",
        detail:
          "Authentication uses Better Auth for JWT-based sessions, with a proxy layer on the Express side so the frontend never talks to auth internals directly. This kept the auth logic centralized and made it easier to add role checks (student vs tutor) later.",
      },
      {
        title: "Status-based booking cancellation instead of deletion",
        detail:
          "Bookings are never deleted — cancelling a booking updates its status field via a PATCH request instead of a DELETE. This preserves booking history for both students and tutors, and made it possible to show past/cancelled bookings in the dashboard without extra queries.",
      },
      {
        title: "Date-range filtering on the backend",
        detail:
          "Search and availability filtering (including date range) happens on the Express API rather than client-side, so the results stay accurate as the tutor list grows and don't rely on shipping the entire dataset to the browser.",
      },
    ],
    challenge:
      "The trickiest bug was in the cancellation flow: an early version sent the tutor's ID instead of the booking's own _id when cancelling, so the wrong record's status was being checked. Fixing it meant tracing the request through the booking list component to confirm which ID was actually being passed, then correcting the API call to use the booking's _id.",
    stack: {
      frontend: "Next.js, Tailwind CSS, HeroUI, next-themes",
      backend: "Express.js, MongoDB, Better Auth",
      charts: "Recharts (booking trends on the tutor dashboard)",
    },
  },
  {
    slug: "mentora",
    title: "Mentora",
    tagline: "An online course marketplace with instructor and student roles.",
    tags: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    live: "https://mentora.example.com",
    github: "https://github.com/pervez/mentora",
    problem:
      "Mentora was built to explore a two-sided platform: instructors need to create and manage courses, students need to browse and enroll. The goal was a role-based system where the same app behaves differently depending on who's logged in.",
    decisions: [
      {
        title: "Role-based routing and access control",
        detail:
          "Instructor and student roles are checked both on the frontend (to control what's rendered) and on the Express API (to control what's actually allowed), so role checks aren't just cosmetic.",
      },
      {
        title: "Serverless-compatible Express structure for Vercel",
        detail:
          "The original Express server assumed a persistent process. Deploying to Vercel meant restructuring it to work as serverless functions — no in-memory state between requests, and careful handling of database connections so they don't get recreated on every invocation.",
      },
    ],
    challenge:
      "Deployment was harder than development. The app worked locally but threw ECONNREFUSED errors during Vercel's prerender step, and hardcoded localhost URLs in API calls broke in production. Fixing it required moving all URLs into environment variables and setting them correctly in the Vercel dashboard for both preview and production environments.",
    stack: {
      frontend: "Next.js, Tailwind CSS",
      backend: "Express.js (serverless-adapted), MongoDB, Better Auth",
    },
  },
  {
    slug: "wanderlust",
    title: "Wanderlust",
    tagline: "A travel and destination booking app.",
    tags: ["Next.js", "Express.js", "MongoDB"],
    live: "https://wanderlust.example.com",
    github: "https://github.com/pervez/wanderlust",
    problem:
      "Wanderlust was built to practice a booking flow outside the tutoring/course domain — browsing destinations, viewing details, and reserving a spot — using the same core stack as the other projects to compare how the same patterns adapt to a different kind of data.",
    decisions: [
      {
        title: "Reusing the auth and booking patterns from earlier projects",
        detail:
          "Rather than starting from zero, the booking and reservation logic borrowed the same data-modeling approach used later in TutorBooking, which made it a useful early testbed for that pattern.",
      },
    ],
    challenge:
      "The main challenge was structuring destination data (locations, pricing, availability) in MongoDB in a way that stayed simple to query while still supporting filtering — an early version of the same filtering logic that got refined further in TutorBooking.",
    stack: {
      frontend: "Next.js, Tailwind CSS",
      backend: "Express.js, MongoDB",
    },
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}