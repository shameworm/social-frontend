import { Waypoints } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex justify-center mt-16 mb-32">
      <div className="flex items-center space-x-4">
        <Waypoints className="h-8 w-8 text-primary" />
        <h1 className="font-extrabold font-sans text-lg text-foreground ">Connect Social</h1>
      </div>
    </div>
  );
}
