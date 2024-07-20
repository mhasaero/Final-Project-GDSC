import React from "react";
import { ReactNode } from "react";
import { useRouteError } from "react-router-dom";

type Props = { error: ReactNode };

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </section>
  );
}
