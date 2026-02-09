import { useState, useMemo } from "react";
import { foundries, type Foundry } from "@/data/foundries";
import { ExternalLink } from "lucide-react";

const categoryLabels: Record<Foundry['category'], string> = {
  classic: '经典',
  modern: '现代',
  indie: '独立',
  tech: '科技',
  studio: '工作室',
};

export function FoundryTable() {
  const [search, setSearch] = useState('');

  const filteredFoundries = useMemo(() => {
    let result = [...foundries].sort((a, b) => a.name.localeCompare(b.name));
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
  }, [search]);

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索厂商..."
          className="w-full sm:w-64 px-3 py-1.5 bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-3 py-2 font-medium text-muted-foreground w-10">#</th>
                <th className="px-3 py-2 font-medium text-muted-foreground">名称</th>
                <th className="px-3 py-2 font-medium text-muted-foreground hidden md:table-cell">简介</th>
                <th className="px-3 py-2 font-medium text-muted-foreground hidden lg:table-cell">国家</th>
                
                <th className="px-3 py-2 font-medium text-muted-foreground text-right">官网</th>
              </tr>
            </thead>
            <tbody>
              {filteredFoundries.map((foundry, index) => (
                <tr key={foundry.id} className="border-b border-border last:border-b-0 hover:bg-muted/30">
                  <td className="px-3 py-2 text-muted-foreground">
                    {index + 1}
                  </td>
                  <td className="px-3 py-2">
                    <span className="font-medium text-foreground">{foundry.name}</span>
                  </td>
                  <td className="px-3 py-2 hidden md:table-cell max-w-[220px]">
                    <span className="text-muted-foreground truncate block">
                      {foundry.description || '—'}
                    </span>
                  </td>
                  <td className="px-3 py-2 hidden lg:table-cell text-muted-foreground">
                    {foundry.country || '—'}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <a
                      href={`https://${foundry.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="hidden sm:inline max-w-[100px] truncate">{foundry.website}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 flex justify-between items-center text-xs text-muted-foreground">
        <span>显示 {filteredFoundries.length} / {foundries.length} 个字体厂商</span>
        <span className="hidden sm:inline">更新于 2025</span>
      </div>
    </div>
  );
}
