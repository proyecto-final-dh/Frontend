import { components } from '@reactour/tour';

function TourBadge({ children }: { children: React.ReactNode }) {
  return <components.Badge styles={{ badge: (base) => ({ ...base, backgroundColor: '#D8A868' }) }}>{children}🐾</components.Badge>;
}

export default TourBadge;
