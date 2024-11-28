import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface PricingTier {
  name: string;
  price: number;
  features: string[];
  highlighted?: boolean;
}

export default function Pricing() {
  const router = useRouter();
  const tiers: PricingTier[] = [
    {
      name: "Basic Training",
      price: 399,
      features: [
        "Introduction to Medical Terminology",
        "Basic First Aid",
        "CPR Certification",
        "Online Resources",
      ],
    },
    {
      name: "Standard Training",
      price: 449,
      features: [
        "All in Basic Training",
        "Advanced First Aid",
        "Emergency Response Training",
      ],
      highlighted: true,
    },
    {
      name: "Premium Training",
      price: 599,
      features: [
        "All in Standard Training",
        "Hands-on Workshops",
        "One-on-One Mentoring",
      ],
    },
  ];

  return (
    <div className="py-16 px-4 md:px-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Pricing</h2>
        <div className="flex justify-center">
          <div className="w-4 h-2 bg-[#00D2C1] pt-2 wavy-line" />
        </div>
        <p className="max-w-2xl mx-auto text-gray-600 py-3">
          Choose the best training package that suits your needs and start your
          journey towards becoming a certified medical professional.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                tier.highlighted ? "bg-[#4C5FD5] text-white" : "bg-white"
              }`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">{tier.price} birr</span>
                  <span className="ml-2 text-base text-muted-foreground">
                    / course
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`text-center ${
                      tier.highlighted
                        ? "text-white/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-8">
                <Button
                  onClick={() => router.push("/contact")}
                  className={`w-full md:py-6 ${
                    tier.highlighted
                      ? "bg-white text-[#4C5FD5] hover:bg-white/90"
                      : "bg-[#00D2C1] text-white hover:bg-[#00D2C1]/90"
                  }`}
                >
                  Sign Up Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
