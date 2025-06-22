import { create } from "zustand";

export const useFormData = create((set, get) => ({
  formData: {
    salary: {
      title: "Salário base",
      value: "",
    },
    fgts: {
      title: "FGTS",
      value: "",
    },
    withdrawalModality: {
      title: "Modalidade de saque",
      value: "",
    },
    admission: {
      title: "Admissão",
      value: "",
    },
    removal: {
      title: "Desligamento",
      value: "",
    },
    priorNotice: {
      title: "Aviso prévio",
      value: "",
    },
    proportionalVacation: {
      title: "Férias proporcionais",
      value: "",
    },
    proportionalVacationMonths: {
      title: "Quantidade de meses",
      value: "",
    },
    accruedVacation: {
      title: "Férias vencidas",
      value: "",
    },
  },
  getCurrentData: () => get().formData,

  updateField: (data) =>
    set((state) => {
      const updatedFormData = { ...state.formData };

      Object.entries(data).forEach(([key, value]) => {
        if (updatedFormData[key]) {
          updatedFormData[key] = {
            ...updatedFormData[key],
            value,
          };
        }
      });

      return { formData: updatedFormData };
    }),

  clearFormData: () =>
    set(() => ({
      formData: {
        salary: {
          title: "Salário base",
          value: "",
        },
        fgts: {
          title: "FGTS",
          value: "",
        },
        withdrawalModality: {
          title: "Modalidade de saque",
          value: "",
        },
        admission: {
          title: "Admissão",
          value: "",
        },
        removal: {
          title: "Desligamento",
          value: "",
        },
        priorNotice: {
          title: "Aviso prévio",
          value: "",
        },
        proportionalVacation: {
          title: "Férias proporcionais",
          value: "",
        },
        proportionalVacationMonths: {
          title: "Quantidade de meses",
          value: "",
        },
        accruedVacation: {
          title: "Férias vencidas",
          value: "",
        },
      },
    })),
}));
