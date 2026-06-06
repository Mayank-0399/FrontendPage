import * as Icons from 'lucide-react'

export function getCourseIcon(iconName: string) {
  const iconMap: { [key: string]: any } = {
    BookOpen: Icons.BookOpen,
    Code: Icons.Code,
    Palette: Icons.Palette,
    Zap: Icons.Zap,
    Brain: Icons.Brain,
    Cpu: Icons.Cpu,
    Database: Icons.Database,
    GitBranch: Icons.GitBranch,
    Layers: Icons.Layers,
    Lock: Icons.Lock,
  }

  return iconMap[iconName] || Icons.BookOpen
}
