import { Button } from "../ui/button";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="h-fit w-full px-5 py-5 flex flex-row justify-between items-center">
      <Button variant={"link"}>
        <ChevronLeft/>
        day 
        </Button>
      <DropdownMenu >
        <DropdownMenuTrigger className="pr-2 text-whiterounded-md">
          <SlidersHorizontal />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>User</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
