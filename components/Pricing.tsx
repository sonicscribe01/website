'use client'

import { Check, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: ['30 minutes of transcription per month', 'Basic editing tools', 'Email support', 'Access to mobile app'],
  },
  {
    name: 'Pro',
    price: '$24.99',
    features: ['5 hours of transcription per month', 'Advanced editing tools', 'Priority email support', 'API access'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited transcription', 'Full suite of editing tools', 'Dedicated account manager', 'Custom API integration', 'Advanced analytics', 'SLA support'],
  },
]

// export default function Pricing() {
//   return (
//     <section id="pricing" className="py-20 bg-gradient-to-r from-[#0A0A0A] via-[#111111] to-[#1A1A1A]">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-white">Choose Your Plan</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <Card key={index} className="relative group bg-[#111111] border-zinc-800/50 hover:border-[#FF4500] transition-all duration-300">
//               <CardHeader>
//                 <div className="absolute top-8 left-8 p-3 rounded-full bg-[#1A1A1A] border border-zinc-800/50 group-hover:border-[#FF4500] transition-colors duration-300">
//                   <DollarSign className="h-6 w-6 text-gray-400 group-hover:text-[#FF4500] transition-colors duration-300" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-white mb-4 pt-16">{plan.name}</CardTitle>
//                 <CardDescription className="text-4xl font-bold text-gray-400 group-hover:text-[#FF4500] transition-colors duration-300">{plan.price}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
//                       <Check className="h-4 w-4 mr-2 text-gray-400 group-hover:text-[#FF4500] transition-colors duration-300" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full bg-[#1A1A1A] text-white border border-zinc-800/50 hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-colors duration-300">
//                   {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

export default function Pricing() {
  return null;
}

