import Image from "next/image";
import { Button } from "@/components/ui/button";
import aboutdetail from "@/public/aboutdetail.jpg";
import { useRouter } from "next/navigation";

export default function AboutDetail() {
  const router = useRouter();
  return (
    <section className="container mx-auto md:px-24 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={aboutdetail}
            alt="Team of dedicated professionals"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6 px-2">
          <h2 className="sm:text-4xl text-2xl font-bold tracking-tight">
            Dedicated to Your Well-Being
          </h2>
          <div className="relative max-sm:hidden">
            <svg
              viewBox="0 0 100 20"
              className="w-32 h-6 text-[#00D2C1]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10C20 10 20 15 40 15C60 15 60 5 80 5C100 5 100 10 120 10"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="sm:text-lg text-muted-foreground leading-relaxed">
            We are a team of passionate professionals committed to providing the
            highest quality care and services. Our mission is to empower
            individuals to lead healthier lives through innovative solutions,
            expert guidance, and a patient-centered approach.
          </p>
          <p className="sm:text-lg text-muted-foreground leading-relaxed">
            At our core, we value compassion, excellence, and trust. From our
            state-of-the-art facilities to our experienced specialists, we
            strive to exceed expectations and make a meaningful impact in the
            communities we serve.
          </p>
          <Button
            onClick={() => router.push("/contact")}
            className="bg-[#00D2C1] hover:bg-[#00D2C1]/90 text-white px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
