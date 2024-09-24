import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export const FormTextField = ({ name, label }) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState : { error } }) => (
          <TextField
            {...field}
            label={label}
            error={!!error}
            helperText={error ? error.message : ""}
          />
        )}
      />
    </div>
  );
};
