import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic", 
        price: 29,
        period: "month",
        features: [
            "50 AI thumbnails/m0",
            "Basic Tempalets",
            "Standard Roslution",
            "No WaterMark",
            "Email support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited Ai thumbnail",
            "Premium Templates",
            "4k Resolution",
            "A/B Testing Tools",
            "Priority Support",
            "custom Fonts",
            "Brand Kit  analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Everythin in Pro",
            "API Access",
            "dedicated Account Manager",
            "cusomt branding"
        ],
        mostPopular: false
    }
];