import { useState } from "react";
import { foundries, type Foundry } from "@/data/foundries";
import { ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const categoryColors: Record<Foundry['category'], string> = {
  classic: 'neon-text-amber',
  modern: 'neon-text-cyan',
  indie: 'neon-text-pink',
  tech: 'text-neon-purple',
};

const categoryLabels: Record<Foundry['category'], string> = {
  classic: '经典',
  modern: '现代',
  indie: '独立',
  tech: '科技',
};

export function FoundryTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [filter, setFilter] = useState<Foundry['category'] | 'all'>('all');

  const filteredFoundries = filter === 'all' 
    ? foundries 
    : foundries.filter(f => f.category === filter);

  return (
    <div className="w-full">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {(['all', 'classic', 'modern', 'indie', 'tech'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              px-4 py-2 font-display text-sm uppercase tracking-wider
              border transition-all duration-300
              ${filter === cat 
                ? 'neon-border bg-primary/10 text-primary' 
                : 'border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary/80'
              }
            `}
          >
            {cat === 'all' ? '全部' : categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Table container */}
      <div className="relative border neon-border overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-primary/30 hover:bg-transparent">
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest w-12">
                  #
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest">
                  厂商名称
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest">
                  国家/地区
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest">
                  创立年份
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest">
                  代表字体
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest">
                  类型
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest text-right">
                  官网
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFoundries.map((foundry, index) => (
                <TableRow
                  key={foundry.id}
                  onMouseEnter={() => setHoveredRow(foundry.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`
                    border-b border-muted/30 transition-all duration-300
                    ${hoveredRow === foundry.id 
                      ? 'bg-primary/5 shadow-[inset_0_0_30px_hsl(var(--neon-cyan)/0.1)]' 
                      : 'bg-transparent'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <TableCell className="font-mono text-muted-foreground text-sm">
                    {String(foundry.id).padStart(2, '0')}
                  </TableCell>
                  <TableCell className={`font-display font-semibold ${hoveredRow === foundry.id ? 'neon-text-cyan' : 'text-foreground'} transition-all duration-300`}>
                    {foundry.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {foundry.country}
                  </TableCell>
                  <TableCell className="font-mono text-accent">
                    {foundry.founded}
                  </TableCell>
                  <TableCell className="max-w-[200px]">
                    <div className="flex flex-wrap gap-1">
                      {foundry.notableFonts.slice(0, 3).map((font) => (
                        <span
                          key={font}
                          className="px-2 py-0.5 text-xs bg-muted/50 text-muted-foreground border border-muted-foreground/20"
                        >
                          {font}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`text-xs uppercase tracking-wider ${categoryColors[foundry.category]}`}>
                      {categoryLabels[foundry.category]}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <a
                      href={`https://${foundry.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <span className="text-xs font-mono hidden sm:inline">{foundry.website}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-6 flex justify-between items-center text-xs font-mono text-muted-foreground border-t border-muted/30 pt-4">
        <span>
          显示 <span className="text-primary">{filteredFoundries.length}</span> / {foundries.length} 个字体厂商
        </span>
        <span className="hidden sm:inline">
          数据更新于 <span className="text-accent">2024</span>
        </span>
      </div>
    </div>
  );
}
