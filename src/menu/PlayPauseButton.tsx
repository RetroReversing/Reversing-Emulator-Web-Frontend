import { Button } from "@/components/ui/button"
import React from "react"

export function PlayPauseButton() {
  const [isPlay, setIsPlay] = React.useState(true)
  return <Button onClick={()=> setIsPlay(!isPlay)}>{isPlay? "Play": "Pause"}</Button>
}
