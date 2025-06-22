import { useNavigate } from "react-router";

import { Calculator } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@/components/ui/data-list";

import formatDateOrReturnString from "@/utils/formatDateOrReturnString";
import getEntriesWithTruthyValue from "@/utils/getEntriesWithTruthyValue";

export default function FormReviewDialog({
  openDialog,
  setOpenDialog,
  currentData,
}) {
  const navigate = useNavigate();

  const data = getEntriesWithTruthyValue(currentData);

  const hasValidData = data.length > 0;

  function handleConfirmDialog() {
    navigate("/result");
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader className="space-y-6 text-start">
          <DialogTitle>Revisão detalhada dos seus dados</DialogTitle>
          <DialogDescription asChild>
            {hasValidData ? (
              <DataList>
                {data.map(([key, field]) => (
                  <DataListItem key={key}>
                    <DataListLabel>{field.title}</DataListLabel>
                    <DataListValue>
                      {formatDateOrReturnString(field.value)}
                    </DataListValue>
                  </DataListItem>
                ))}
              </DataList>
            ) : (
              <p>Nenhum dado preenchido ainda.</p>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={handleConfirmDialog}
            disabled={!hasValidData}
            className="w-full"
          >
            <Calculator />
            Calcular rescisão
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
