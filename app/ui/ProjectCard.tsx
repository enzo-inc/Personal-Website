import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

import Image from 'next/image'
import Link from 'next/link'


export const ProjectCard =  ({title, description, content, footer, githubURL, githubSVG="",  otherURL, otherSVG="", size=30, tooltipContent}: {
    title: string,
    description: string,
    content: string,
    footer: string,
    githubURL?: string,
    githubSVG?: string,
    otherURL?: string,
    otherSVG?: string,
    size?: number
    tooltipContent?: string
}) => {
    return (
            <Card>
                <CardHeader>
                <div>
                   {githubURL && (
                    <Link href={githubURL} target="_blank">
                        <TooltipProvider>
                        <Tooltip delayDuration={200}>
                            <TooltipTrigger>
                                <Image
                                    src={githubSVG}
                                    alt="Github Logo"
                                    width={30}
                                    height={30}
                                />
                            </TooltipTrigger>
                            <TooltipContent className="text-white bg-black">
                            <p>View on GitHub</p>
                            </TooltipContent>
                        </Tooltip>
                        </TooltipProvider>
                    </Link>
                   )} 

                   {otherURL && (
                    <Link href={otherURL} target="_blank">
                        <TooltipProvider>
                        <Tooltip delayDuration={200}>
                            <TooltipTrigger>
                                <Image
                                    src={otherSVG}
                                    alt="Other Logo"
                                    width={size}
                                    height={size}
                                    className="pl-3"
                                />
                            </TooltipTrigger>
                            <TooltipContent className="text-white bg-black">
                            <p>{tooltipContent}</p>
                            </TooltipContent>
                        </Tooltip>
                        </TooltipProvider>                        
                    </Link>
                   )}
                </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="preserve-newlines"> {content} </p>
                </CardContent>
                <CardFooter>
                    <p>{footer}</p>
                </CardFooter>
                <Separator className="my-2 mx-4 mr-10 bg-black" />
            </Card>
    )

}