import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import card1 from "@/public/card1.jpg";
import card2 from "@/public/card2.jpg";
import { useRouter } from "next/navigation";

export default function MedicalCards() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-16 xl:px-48 max-sm:px-4 py-8 lg:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Qualified Doctors Card */}
        <Card className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src={card1}
              alt="Qualified doctors providing medical care"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Qualified Instructors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our instructors are highly qualified and experienced in medical
              training, ensuring you receive the best education possible.
            </p>
          </CardContent>
        </Card>

        {/* 24 Hours Service Card */}
        <Card className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src={card2}
              alt="Medical staff available 24 hours"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-bold">24/7 Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We offer 24/7 support to assist you with any questions or concerns
              you may have during your training.
            </p>
          </CardContent>
        </Card>

        {/* Weekly Timetable Card */}
        <Card className="bg-[#4B6BFB] text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Weekly Timetable
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-base/relaxed opacity-90">
              Check out our weekly timetable to find the best time for your
              training sessions.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Monday - Friday</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span>8:00 - 18:00</span>
              </div>
            </div>

            <Button
              onClick={() => router.push("/contact")}
              className="w-full bg-brand hover:bg-brand/90 text-black"
            >
              Enroll Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
