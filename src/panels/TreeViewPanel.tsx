import { FolderTree } from 'lucide-react'
import { TreeView, TreeViewItem } from '@/components/ui/tree-view/treeView'
import { flattenTree } from 'react-accessible-treeview'

const data = {
  name: '',
  children: [
    {
      name: 'Current batch',
      children: [{ name: 'index.js' }, { name: 'styles.css' }],
    },
    {
      name: 'Older queries',
      children: [
        {
          name: 'all countries',
        },
        {
          name: 'add new countries',
        },
        {
          name: 'regions',
        },
        {
          name: 'regions by customer',
        },
      ],
    },
    {
      name: 'query all users',
    },
    {
      name: 'users in last day',
    },
    {
      name: 'new users over time',
    },
  ],
};

export function TreeViewPanel() {
  return (
    <div className="h-full p-4">

    <div className="flex items-center space-x-2 mb-4">
        <FolderTree className="h-5 w-5" />
        <h2 className="text-lg font-semibold">File Structure</h2>
      </div>
    <TreeView
        data={flattenTree(data)}
        aria-label="directory tree"
        nodeRenderer={({ element, isBranch, isExpanded, getNodeProps, level, isSelected }) => (
          <TreeViewItem
            isExpanded={isExpanded}
            isBranch={isBranch}
            isSelected={isSelected}
            level={level}
            xPadding={16}
            name={element.name}
            {...getNodeProps()}
          />
        )}
      />

  
     
    </div>
  )
}