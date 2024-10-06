import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function GamePanel() {
  return (
    <div className="h-full p-4 space-y-6">
      <fieldset className="space-y-4 rounded-lg border p-4">
        <legend className="text-sm font-semibold">Game</legend>
        <div className="space-y-2">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a game" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mario">Super Mario Bros.</SelectItem>
              <SelectItem value="zelda">The Legend of Zelda</SelectItem>
              <SelectItem value="metroid">Metroid</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Upload Game
          </Button>
        </div>
      </fieldset>

      <fieldset className="space-y-4 rounded-lg border p-4">
        <legend className="text-sm font-semibold">Events</legend>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="log-function-calls" />
            <label
              htmlFor="log-function-calls"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Log New Function Calls
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="log-key-press" />
            <label
              htmlFor="log-key-press"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Log Key Press
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="log-memory-access" />
            <label
              htmlFor="log-memory-access"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Log Memory Access
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="log-state-changes" />
            <label
              htmlFor="log-state-changes"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Log State Changes
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  )
}