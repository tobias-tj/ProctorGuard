/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface FormModalProps {
  table: "student" | "exam" | "event" | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
  trigger: React.ReactNode;
}

const FormModal: React.FC<FormModalProps> = ({ table, type, id, trigger }) => {
  const Form = () => {
    if (type === "delete" && id) {
      return (
        <form className="flex flex-col gap-4">
          <DialogDescription className="text-center">
            Todos lo datos se elminaran.
            <h2 className="text-black">
              Estas seguro que quieres eliminar este{" "}
              {table === "student" ? "estudiante" : "examen"}?
            </h2>
          </DialogDescription>
          <Button variant="destructive" className="self-center">
            Eliminar Registros
          </Button>
        </form>
      );
    }

    return <p>Form not found!</p>;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {type === "create"
              ? `Create ${table}`
              : type === "update"
              ? `Update ${table}`
              : `Eliminar ${table === "student" ? "estudiante" : "examen"}`}
          </DialogTitle>
        </DialogHeader>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Form />
        </React.Suspense>
        <DialogFooter>
          {type !== "delete" && <Button variant="outline">Cancel</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
