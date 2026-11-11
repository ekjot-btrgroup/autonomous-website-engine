import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  { name: "Starter", price: "$19", period: "/month", features: ["5 projects", "Email support"] },
  { name: "Studio", price: "$49", period: "/month", features: ["Unlimited projects", "Priority support", "Custom domain"], popular: true },
];

export const PricingSimple = () => (
  <section className="bg-white py-24 px-6">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-4xl font-semibold text-slate-900">Simple, transparent pricing</h2>
      <p className="mt-4 text-center text-slate-500">Pick the plan that fits your team. Cancel anytime.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <Card key={p.name} className={p.popular ? "border-blue-600 shadow-lg" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">{p.name}{p.popular && <Badge className="bg-blue-600">Most popular</Badge>}</CardTitle>
              <p className="text-4xl font-bold text-slate-900">{p.price}<span className="text-base font-normal text-slate-500">{p.period}</span></p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">{p.features.map((f) => <li key={f} className="flex items-center gap-2 text-slate-600"><Check className="h-4 w-4 text-blue-600" />{f}</li>)}</ul>
              <button className="mt-6 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700">Choose plan</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
