import { useState, useMemo } from "react";
import { foundries, type Foundry } from "@/data/foundries";
import { ExternalLink, Search, Star } from "lucide-react";
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
  studio: 'text-muted-foreground',
};

const categoryLabels: Record<Foundry['category'], string> = {
  classic: '经典',
  modern: '现代',
  indie: '独立',
  tech: '科技',
  studio: '工作室',
};

export function FoundryTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [filter, setFilter] = useState<Foundry['category'] | 'all'>('all');
  const [search, setSearch] = useState('');

  const filteredFoundries = useMemo(() => {
    let result = foundries;
    if (filter !== 'all') {
      result = result.filter(f => f.category === filter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.description?.toLowerCase().includes(q) ||
        f.country?.toLowerCase().includes(q) ||
        f.website.toLowerCase().includes(q) ||
        f.notableFonts?.some(font => font.toLowerCase().includes(q))
      );
    }
    return result;
  }, [filter, search]);

  return (
    <div className="w-full">
      {/* Search bar */}
      <div className="relative mb-6 max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索厂商名称、国家、字体..."
          className="w-full pl-10 pr-4 py-2 bg-card border border-muted-foreground/30 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {(['all', 'classic', 'modern', 'indie', 'tech', 'studio'] as const).map((cat) => (
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
            <span className="ml-1 text-xs opacity-60">
              {cat === 'all' ? foundries.length : foundries.filter(f => f.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Table container */}
      <div className="relative border neon-border overflow-hidden">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

        <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-primary/30 hover:bg-transparent sticky top-0 bg-card z-10">
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest w-12">
                  #
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest">
                  厂商名称
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest hidden md:table-cell">
                  简介
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest hidden lg:table-cell">
                  国家/地区
                </TableHead>
                <TableHead className="font-display text-primary text-xs uppercase tracking-widest hidden lg:table-cell">
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
                >
                  <TableCell className="font-mono text-muted-foreground text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </TableCell>
                  <TableCell className="min-w-[140px]">
                    <div className={`font-display font-semibold ${hoveredRow === foundry.id ? 'neon-text-cyan' : 'text-foreground'} transition-all duration-300`}>
                      {foundry.name}
                    </div>
                    {foundry.founded && (
                      <span className="font-mono text-xs text-accent">{foundry.founded}</span>
                    )}
                    {foundry.rating && (
                      <span className="inline-flex items-center ml-2">
                        <Star className="w-3 h-3 text-accent fill-accent" />
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-[250px]">
                    <span className="text-xs text-muted-foreground line-clamp-2">
                      {foundry.description || '—'}
                    </span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground text-sm">
                    {foundry.country || '—'}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell max-w-[200px]">
                    {foundry.notableFonts && foundry.notableFonts.length > 0 ? (
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
                    ) : (
                      <span className="text-xs text-muted-foreground/40">—</span>
                    )}
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
                      <span className="text-xs font-mono hidden sm:inline max-w-[150px] truncate">{foundry.website}</span>
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
          数据来源 <span className="text-accent">Airtable</span> · 更新于 <span className="text-accent">2025</span>
        </span>
      </div>
    </div>
  );
}
