import { useState } from "react"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TreeViewPanel } from "./panels/TreeViewPanel"
import { GamePanel } from "./panels/GamePanel"
import { SettingsPanel } from "./panels/SettingsPanel"
import { EmulatorHeader } from "./EmulatorHeader"
import { MainContentArea } from "./MainContentArea"
import { LeftNav } from "./LeftNav"

export function Dashboard() {
  const [activePanel, setActivePanel] = useState('treeview')

  return (
    <div className="grid h-screen w-full pl-[56px]">
      <LeftNav
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
      <div className="flex flex-col">
        <EmulatorHeader />
        <main className="flex-1 overflow-auto">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
              {activePanel === 'game' && <GamePanel />}
              {activePanel === 'treeview' && <TreeViewPanel />}
              {activePanel === 'settings' && <SettingsPanel />}
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
             <MainContentArea />
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </div>
    </div>
  )
}