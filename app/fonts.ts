import { Roboto_Mono, Roboto, Roboto_Condensed, Roboto_Flex, Courier_Prime, Inter } from 'next/font/google'

export const roboto = Roboto({weight: ["400", "700"],  subsets: ['latin'] })
export const roboto_mono = Roboto_Mono({weight: ["400", "700"],  subsets: ['latin'] })
export const roboto_condensed = Roboto_Condensed({weight: ["400", "700"],  subsets: ['latin'] })
export const roboto_flex = Roboto_Flex({weight: ["400", "700"],  subsets: ['latin'] })

export const courierPrime = Courier_Prime({weight: "400", subsets: ['latin']})
export const inter = Inter({weight: ["400", "700"], subsets: ['latin']})