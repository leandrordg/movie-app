import Form from "next/form";

import { SearchIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SearchBoxDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative h-8 w-full rounded-md border px-4 shadow-xs text-sm cursor-pointer hover:bg-muted select-none">
          <input
            type="text"
            placeholder="busque por filmes, séries, atores..."
            className="w-full h-full outline-none pointer-events-none"
          />
          <SearchIcon className="absolute top-1/2 right-4 -translate-y-1/2 size-4" />
        </div>
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
