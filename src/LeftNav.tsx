import { Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { Triangle, SquareTerminal, Bot, Code2, Book, Settings2, LifeBuoy, SquareUser, LucideIceCreamCone } from "lucide-react";
import { Button } from "./components/ui/button";
import { TooltipProvider } from "./components/ui/tooltip";

export function LeftNav({ activePanel, setActivePanel }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="w-full fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-lg ${activePanel === 'treeview' ? 'bg-muted' : ''}`}
              aria-label="Tree View"
              onClick={() => setActivePanel('treeview')}
            >
              <SquareTerminal className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Tree View
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-lg ${activePanel === 'models' ? 'bg-muted' : ''}`}
              aria-label="Models"
              onClick={() => setActivePanel('models')}
            >
              <Bot className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Models
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-lg ${activePanel === 'api' ? 'bg-muted' : ''}`}
              aria-label="API"
              onClick={() => setActivePanel('api')}
            >
              <Code2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            API
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Documentation"
            >
              <Book className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Documentation
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-lg ${activePanel === 'settings' ? 'bg-muted' : ''}`}
              aria-label="Settings"
              onClick={() => setActivePanel('settings')}
            >
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Settings
          </TooltipContent>
        </Tooltip>
        </TooltipProvider>
      </nav>
      {/* <nav className="mt-auto grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Help"
            >
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Account"
            >
              <SquareUser className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Account
          </TooltipContent>
        </Tooltip>
      </nav> */}
    </aside>
  )
}