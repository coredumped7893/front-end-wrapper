import { Link } from "react-router-dom";
import { Home, ListChecksIcon, Tags, Users2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { ModeToggle } from "@/components/ThemeToggle.tsx";
import { useUserAuth } from "@/lib/useUserAuth.ts";

export default function DesktopSidebar() {
  const { data: user } = useUserAuth();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <ListChecksIcon className="h-4 w-4 transition-all group-hover:scale-110" />
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/dashboard"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        {import.meta.env.VITE_DISABLE_TAGS_MANAGER === "false" &&
          user &&
          user.roles.map((r) => r.name).includes("ADMIN") && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/tags"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Tags className="h-5 w-5" />
                  <span className="sr-only">Tags</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Tags</TooltipContent>
            </Tooltip>
          )}

        {import.meta.env.VITE_DISABLE_USERS_PAGE === "false" &&
          user &&
          user.roles.map((r) => r.name).includes("ADMIN") && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="#"
                  className="disabled flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Users</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Users</TooltipContent>
            </Tooltip>
          )}

        <Tooltip>
          <ModeToggle />
        </Tooltip>
      </nav>
    </aside>
  );
}
