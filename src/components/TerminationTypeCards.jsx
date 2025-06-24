import { motion } from "motion/react";

import { useNavigate } from "react-router";
import { useTerminationReason } from "@/store/terminationReasonStore";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TERMINATION_TYPES from "@/constants/terminationTypesConfig";
import { Badge } from "./ui/badge";

export default function TerminationTypeCards() {
  const { updateTerminationReason } = useTerminationReason();
  const navigate = useNavigate();

  function handleProceedToForm(item) {
    updateTerminationReason(item.title, item.value);
    navigate("/form");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {TERMINATION_TYPES.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <button
              className="w-full h-full text-start"
              onClick={() => handleProceedToForm(item)}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    <Icon className="text-primary mb-6" />
                    {item.title}
                  </CardTitle>
                  <CardAction>
                    <Badge variant="outline">{item.legalReference}</Badge>
                  </CardAction>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}
