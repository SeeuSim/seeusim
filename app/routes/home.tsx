import type { Route } from './+types/home';

export function meta(_props: Route.MetaArgs) {
  return [
    { title: "Seeu Sim Ong's Personal Website" },
    { name: 'description', content: 'Learn more about me here.' },
  ];
}

export default function Home() {
  return <main></main>;
}
