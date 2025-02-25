import Form from "next/form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";

export function SearchBoxDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SearchIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buscar filmes e séries</DialogTitle>
          <DialogDescription>
            Encontre os melhores filmes e séries para assistir.
          </DialogDescription>
        </DialogHeader>
        <Form
          action="/search"
          className="flex items-center border rounded-md overflow-clip divide-x"
        >
          <input
            type="text"
            name="q"
            placeholder="busque por filmes, séries, atores..."
            className="rounded-none border-x-none flex-1 px-4 h-full outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-2 cursor-pointer hover:bg-muted"
          >
            <SearchIcon className="size-4" />
          </button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
