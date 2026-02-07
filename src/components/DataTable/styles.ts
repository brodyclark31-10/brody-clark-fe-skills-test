import { SxProps, Theme } from "@mui/material";

/**
 * DataTable component styles
 */

/** Main data grid styles with theme-aware row striping and hover effects */
export const dataGridStyles: SxProps<Theme> = {
  height: "100%",
  borderRadius: 2,
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.04)"
        : "rgba(0, 0, 0, 0.02)",
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.02)"
        : "rgba(0, 0, 0, 0.01)",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.04)",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.02)"
        : "rgba(0, 0, 0, 0.01)",
  },
};

/** Form control wrapper for the data selector with white borders in light mode */
export const formControlStyles: SxProps<Theme> = {
  minWidth: 160,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: (theme) =>
      theme.palette.mode === "light" ? "white" : undefined,
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: (theme) =>
      theme.palette.mode === "light" ? "white !important" : undefined,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: (theme) =>
      theme.palette.mode === "light" ? "white" : undefined,
  },
};

/** Input label styles - white text in light mode for header visibility */
export const inputLabelStyles: SxProps<Theme> = {
  color: (theme) => (theme.palette.mode === "light" ? "white" : undefined),
  "&.Mui-focused": {
    color: (theme) => (theme.palette.mode === "light" ? "white" : undefined),
  },
};

/** Select dropdown styles with white text and hover effect in light mode */
export const selectStyles: SxProps<Theme> = {
  color: (theme) => (theme.palette.mode === "light" ? "white" : undefined),
  "& .MuiSvgIcon-root": {
    color: (theme) => (theme.palette.mode === "light" ? "white" : undefined),
  },
  "&:hover": {
    backgroundColor: (theme) =>
      theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.1)" : undefined,
  },
};

/** Menu props for select dropdown - ensures proper background color */
export const selectMenuProps = {
  PaperProps: {
    sx: {
      bgcolor: "background.paper",
    },
  },
};
