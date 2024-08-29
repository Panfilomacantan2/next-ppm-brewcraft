import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type toolTipProps = {
  toolTip: string;
  buttonText: string | React.ReactNode;
  onClick: () => void
};

export default function TooltipButton({ buttonText, toolTip, onClick }: toolTipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            onClick={onClick}
            className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
          >
           {buttonText}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{toolTip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
