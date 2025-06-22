import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export default function FormStepCard({
  title,
  description,
  form,
  field,
  isFirstStep,
  handlePrevStep,
  onSubmit,
}) {
  const Field = field;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {<Field form={form} />}
            <div className="flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="ghost"
                disabled={isFirstStep}
                onClick={handlePrevStep}
              >
                Voltar
              </Button>
              <Button type="submit" variant="outline">
                Próximo
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
