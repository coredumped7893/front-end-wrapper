import { TableCell, TableRow } from "@/components/ui/table.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

const TAGS_TABLE_SKELETON_ROWS = 5;

export function TagsTableSkeletonLoading() {
  return Array.from({ length: TAGS_TABLE_SKELETON_ROWS }).map((_, idx) => (
    <TableRow className={"cursor-pointer h-[73px]"} key={idx}>
      <TableCell className="hidden sm:table-cell">
        <Skeleton className="h-[20px] w-[100px] rounded-sm" />
      </TableCell>
      <TableCell className="font-medium">
        <Skeleton className="h-[20px] w-[75px] rounded-sm" />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Skeleton className="h-[20px] w-[150px] rounded-sm" />
      </TableCell>
      <TableCell>
        <div className="flex justify-center w-[40px]">
          <Skeleton className="h-[10px] w-[20px] rounded-sm" />
        </div>
      </TableCell>
    </TableRow>
  ));
}
