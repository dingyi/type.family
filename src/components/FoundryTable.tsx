import { useState, useMemo } from "react";
import { foundries, type Foundry } from "@/data/foundries";
import { ExternalLink, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const categoryLabels: Record<Foundry['category'], string> = {
  classic: '经典',
  modern: '现代',
  indie: '独立',
  tech: '科技',
  studio: '工作室',
};

export function FoundryTable() {
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
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索厂商..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow"
          />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-1.5">
          {(['all', 'classic', 'modern', 'indie', 'tech', 'studio'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-3 py-1.5 text-sm rounded-md transition-colors
                ${filter === cat
                  ? 'bg-foreground text-background font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
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
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="text-xs font-medium text-muted-foreground w-12">#</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">名称</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground hidden md:table-cell">简介</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground hidden lg:table-cell">国家</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground hidden lg:table-cell">代表字体</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">类型</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground text-right">官网</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFoundries.map((foundry, index) => (
                <TableRow key={foundry.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-sm text-foreground">
                      {foundry.name}
                    </div>
                    {foundry.founded && (
                      <span className="text-xs text-muted-foreground">{foundry.founded}</span>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-[250px]">
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {foundry.description || '—'}
                    </span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                    {foundry.country || '—'}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell max-w-[200px]">
                    {foundry.notableFonts && foundry.notableFonts.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {foundry.notableFonts.slice(0, 3).map((font) => (
                          <span
                            key={font}
                            className="px-1.5 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {font}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="text-xs text-muted-foreground">
                      {categoryLabels[foundry.category]}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <a
                      href={`https://${foundry.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="text-xs hidden sm:inline max-w-[120px] truncate">{foundry.website}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground pt-2">
        <span>
          显示 {filteredFoundries.length} / {foundries.length} 个字体厂商
        </span>
        <span className="hidden sm:inline">
          更新于 2025
        </span>
      </div>
    </div>
  );
}
