import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ProjectCard } from "@/app/ui/ProjectCard"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Icons
import githubSVG from '@/public/github.svg'
import ethSVG from '@/public/eth.svg'
import linkedinSVG from '@/public/linkedin.svg'

// Projects
import { fields as ETH_Global_fields} from "@/app/content/projects/ETH_Global"
import { fields as NeutralNetwork_fields} from "@/app/content/projects/NeutralNetwork"
import { fields as Collateral_fields} from "@/app/content/projects/Collateral"
import { fields as ABM_fields} from "@/app/content/projects/ABM"



export function ProjectSheet({trigger} : {trigger: React.ReactNode}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent side={'left'} className="sm:w-[750px]">
        <SheetHeader>
          <SheetTitle className="text-2xl">Projects</SheetTitle>
          {/* <SheetDescription>
            Test
          </SheetDescription> */}
        </SheetHeader>

        <ScrollArea className="h-full w-full overflow-y-auto">
        {/* Project cards  */}
            <div className="grid gap-6 py-4">

                <ProjectCard
                  title={NeutralNetwork_fields.title}
                  description={NeutralNetwork_fields.description}
                  content={NeutralNetwork_fields.content}
                  footer={NeutralNetwork_fields.footer}
                  githubURL={NeutralNetwork_fields.githubURL}
                  githubSVG={githubSVG}
                  otherURL={NeutralNetwork_fields.otherURL}
                  otherSVG={linkedinSVG}
                  size={40}
                  tooltipContent="Watch Demo on LinkedIn"
                  />

                <ProjectCard
                  title={ETH_Global_fields.title}
                  description={ETH_Global_fields.description}
                  content={ETH_Global_fields.content}
                  footer={ETH_Global_fields.footer}
                  githubURL={ETH_Global_fields.githubURL}
                  githubSVG={githubSVG}
                  otherURL={ETH_Global_fields.otherURL}
                  otherSVG={ethSVG}
                  tooltipContent="View on ETHGlobal"
                  />

                <ProjectCard
                  title={Collateral_fields.title}
                  description={Collateral_fields.description}
                  content={Collateral_fields.content}
                  footer={Collateral_fields.footer}
                  githubURL={Collateral_fields.githubURL}
                  githubSVG={githubSVG}
                  />

                <ProjectCard
                  title={ABM_fields.title}
                  description={ABM_fields.description}
                  content={ABM_fields.content}
                  footer={ABM_fields.footer}
                  githubURL={ABM_fields.githubURL}
                  githubSVG={githubSVG}
                  />
                  
            </div>
        <ScrollBar orientation="vertical"/>
        </ScrollArea>
        
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
