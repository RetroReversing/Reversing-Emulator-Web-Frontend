import { Play, Gamepad2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function EmulatorHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-[57px] items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select game" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mario">Mario</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Upload className="size-4" />
          Upload
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="default" size="sm" className="gap-1.5">
          <Play className="size-4" />
          Play
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Gamepad2 className="size-4" />
          Controls
        </Button>
      </div>
      <div className="text-sm font-medium">
        Reversing Emulator V0.1
      </div>
    </header>
  )
}