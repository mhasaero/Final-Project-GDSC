import * as React from "react";

import { cn } from "../../lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      maxLength={300}
      className={cn("flex min-h-[80px] w-full bg-transparent px-3 py-2 text-sm placeholder:text-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none", className)}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
