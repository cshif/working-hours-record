import { useLoaderData } from "react-router-dom";

export default function ProjectHome() {
  const loaderData = useLoaderData();
  return (<pre>{loaderData}</pre>)
}