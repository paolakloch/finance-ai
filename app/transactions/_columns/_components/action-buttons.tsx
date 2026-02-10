import { Button } from "@/app/_components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";
import React from "react";

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionButtons = ({ onEdit, onDelete }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-forground"
        onClick={onEdit}
      >
        <EditIcon className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-forground"
        onClick={onDelete}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ActionButtons;
