import React, { HTMLInputTypeAttribute } from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Control, FieldValues } from "react-hook-form";
import { Input } from "./ui/input";

interface Props {
  control: Control<any> | undefined;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
}

const CustomFormField = ({
  control,
  label,
  name,
  type = "text",
  placeholder,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomFormField;
