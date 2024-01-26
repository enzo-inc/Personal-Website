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
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
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
