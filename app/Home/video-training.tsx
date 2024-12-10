import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
export default function TrainingSection() {
  return (
    <section className="w-full py-12 bg-background overflow-hidden">
      {/*  <div className="w-full text-center pt-2">
        <div className="text-center ">
          <h2 className="text-4xl font-bold text-gray-900">Training</h2>
          <div className="flex justify-center">
            <div className="w-4 h-2 bg-[#00D2C1] pt-2 wavy-line" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 py-3">
            We are proud to collaborate with industry-leading partners who share
            our commitment to excellence and innovation in the medical field.
          </p>
        </div>
      </div> */}
      <div className="h-1 w-5/6 rounded-full mx-auto bg-gradient-to-r from-brand to-yellow-400  pt-3 mb-6  overflow-hidden" />

      <div className=" grid gap-8 px-0 md:px-6">
        <Card className="border-none shadow-none">
          <CardContent className="grid gap-10">
            {/* First Article */}
            <article className="grid md:grid-cols-[1fr,1.5fr] gap-6 items-start">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg ">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/gn6xt1ca8A0"
                  title="Medical Training Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-4 md:pl-12">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-[#068073]">
                    CPR
                  </h2>
                  <p className="text-md text-muted-foreground">
                    Learn the life-saving skill of CPR and be prepared to act in
                    cardiac emergencies. Explore our training resources to gain
                    the confidence to save lives....
                  </p>
                  <Link
                    href="https://tirta-s-school.teachable.com/"
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-[#068073] hover:text-emerald-700"
                  >
                    Learn more {">"}
                  </Link>
                  <div className="h-1 w-full bg-gradient-to-r from-brand to-yellow-400" />
                </div>
                <article className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-[#068073]">
                    Choking in Special Populations
                  </h2>
                  <p className="text-md text-muted-foreground">
                    Quick action during a choking emergency can save lives.
                    Learn essential tips and techniques to manage choking
                    incidents safely and effectively in special populations,
                    including pregnant women and children....
                  </p>
                  <Link
                    href="https://tirta-s-school.teachable.com/"
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-[#068073] hover:text-emerald-700"
                  >
                    Learn more {">"}
                  </Link>
                  <div className="h-1 w-full bg-gradient-to-r from-brand to-yellow-400" />
                </article>
                <article className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-[#068073]">
                    Road Traffic Accidents
                  </h2>
                  <p className="text-md text-muted-foreground">
                    Be ready to respond to road traffic accidents with our
                    step-by-step guides and first aid resources. Together, we
                    can reduce injury and save lives on the road.
                  </p>
                  <Link
                    href="https://tirta-s-school.teachable.com/"
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-[#068073] hover:text-emerald-700"
                  >
                    Learn more {">"}
                  </Link>
                  <div className="h-1 w-full bg-gradient-to-r from-brand to-yellow-400" />
                </article>

                {/* Third Article */}
              </div>
            </article>

            {/* Second Article */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
