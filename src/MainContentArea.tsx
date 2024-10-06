import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload } from 'lucide-react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ChatSection } from './MainSections/ChatSection'

export function MainContentArea() {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0 && acceptedFiles[0].name.endsWith('.nes')) {
      setFile(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/octet-stream': ['.nes']
    },
    maxFiles: 1
  })

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={40}>
        <div
          {...getRootProps()}
          className={`flex items-center justify-center h-full border-2 border-dashed rounded-lg ${
            isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {file ? (
            <div className="text-center">
              <p className="font-semibold">{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          ) : (
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Drop a .nes file here, or click to select</p>
            </div>
          )}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
       <ChatSection />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}